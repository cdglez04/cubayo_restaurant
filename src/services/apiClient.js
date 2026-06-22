// =========================================================
//  apiClient.js — Cliente HTTP central (Axios)
//  Preparado para conectar a un backend Django REST Framework
//  con autenticación JWT (djangorestframework-simplejwt).
//
//  El frontend de la landing NO requiere login todavía, pero
//  esta capa queda lista para cuando se añadan zonas privadas
//  (panel de pedidos, administración, etc.). Por eso el manejo
//  de token y el refresh automático ya están implementados.
// =========================================================

import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api'
const REFRESH_PATH = import.meta.env.VITE_AUTH_REFRESH_PATH || '/token/refresh/'

// Claves de almacenamiento. En producción conviene migrar a
// cookies httpOnly emitidas por el backend para mitigar XSS;
// mientras tanto, localStorage permite probar el flujo.
const ACCESS_KEY = 'cubayo_access'
const REFRESH_KEY = 'cubayo_refresh'

export const tokenStore = {
  getAccess: () => localStorage.getItem(ACCESS_KEY),
  getRefresh: () => localStorage.getItem(REFRESH_KEY),
  set: ({ access, refresh }) => {
    if (access) localStorage.setItem(ACCESS_KEY, access)
    if (refresh) localStorage.setItem(REFRESH_KEY, refresh)
  },
  clear: () => {
    localStorage.removeItem(ACCESS_KEY)
    localStorage.removeItem(REFRESH_KEY)
  },
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000,
})

// --- Request: adjunta el access token si existe ---
apiClient.interceptors.request.use((config) => {
  const access = tokenStore.getAccess()
  if (access) config.headers.Authorization = `Bearer ${access}`
  return config
})

// --- Response: si recibe 401, intenta refrescar el token una vez ---
let isRefreshing = false
let pendingQueue = []

const resolveQueue = (error, token = null) => {
  pendingQueue.forEach((p) => (error ? p.reject(error) : p.resolve(token)))
  pendingQueue = []
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config

    // Sin respuesta del servidor (red caída / CORS / timeout)
    if (!error.response) return Promise.reject(error)

    const status = error.response.status
    const refresh = tokenStore.getRefresh()

    if (status === 401 && refresh && !original._retry) {
      if (isRefreshing) {
        // Encola las peticiones que llegan mientras se refresca
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject })
        }).then((token) => {
          original.headers.Authorization = `Bearer ${token}`
          return apiClient(original)
        })
      }

      original._retry = true
      isRefreshing = true

      try {
        const { data } = await axios.post(`${BASE_URL}${REFRESH_PATH}`, {
          refresh,
        })
        tokenStore.set({ access: data.access })
        resolveQueue(null, data.access)
        original.headers.Authorization = `Bearer ${data.access}`
        return apiClient(original)
      } catch (refreshError) {
        resolveQueue(refreshError, null)
        tokenStore.clear()
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export default apiClient

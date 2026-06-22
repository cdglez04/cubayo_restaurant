// =========================================================
//  Servicios de dominio — funciones que hablan con el backend.
//  Hoy la landing es solo frontend; estas funciones quedan
//  definidas para enchufarse al Django REST API cuando exista.
// =========================================================

import apiClient, { tokenStore } from './apiClient'

const LOGIN_PATH = import.meta.env.VITE_AUTH_LOGIN_PATH || '/token/'

// --- Autenticación JWT (SimpleJWT) ---
export const auth = {
  async login(username, password) {
    const { data } = await apiClient.post(LOGIN_PATH, { username, password })
    tokenStore.set({ access: data.access, refresh: data.refresh })
    return data
  },
  logout() {
    tokenStore.clear()
  },
  isAuthenticated() {
    return Boolean(tokenStore.getAccess())
  },
}

// --- Lista de espera / aviso de apertura ---
// Cuando el backend exponga p.ej. POST /api/leads/ esto ya conecta.
export const leads = {
  async subscribe({ name, email }) {
    const { data } = await apiClient.post('/leads/', { name, email })
    return data
  },
}

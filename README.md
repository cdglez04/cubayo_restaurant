# Cuba Yo — Landing page

Landing de **Cuba Yo**, cafetería &amp; pizzería cubana en Porter, TX.
Frontend en **Vite + React (JavaScript)**, preparado para conectarse a un
backend **Django REST Framework con autenticación JWT**.

## Requisitos
- Node.js 18+ (recomendado 20+)
- npm

## Puesta en marcha

```bash
npm install          # instala dependencias
cp .env.example .env # configura tus variables
npm run dev          # arranca en http://localhost:5173
```

## Scripts
- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción en `dist/`
- `npm run preview` — sirve el build para revisar

## Estructura

```
src/
├─ assets/        Imágenes (logo, corazón, fachada, productos recortados)
├─ components/    Cada sección con su .jsx y su .css
├─ config/        business.js — datos del negocio (única fuente de verdad)
├─ services/      apiClient.js (Axios + JWT) y services.js (auth, leads)
├─ styles/        global.css — tokens de diseño y patrón de azulejo
├─ App.jsx
└─ main.jsx
```

## Variables de entorno
Solo las variables con prefijo `VITE_` se exponen al navegador. **Nunca**
pongas secretos del backend aquí (la `SECRET_KEY` de Django, claves privadas
de pago, etc.); esos viven en el `.env` del backend.

| Variable | Uso |
|---|---|
| `VITE_API_BASE_URL` | URL base del API Django (ej. `http://127.0.0.1:8000/api`) |
| `VITE_AUTH_LOGIN_PATH` | Ruta de login JWT (SimpleJWT: `/token/`) |
| `VITE_AUTH_REFRESH_PATH` | Ruta de refresh (`/token/refresh/`) |
| `VITE_BUSINESS_PHONE` | Teléfono público |
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp |

## Conectar el backend (cuando exista)
1. En Django: `djangorestframework` + `djangorestframework-simplejwt`.
2. Exponer `POST /api/token/` y `POST /api/token/refresh/`.
3. Configurar **CORS** (`django-cors-headers`) permitiendo el origen del frontend.
4. Para el aviso de apertura, crear `POST /api/leads/` con `{ name, email }`.

El cliente Axios (`src/services/apiClient.js`) ya adjunta el token, refresca
automáticamente en caso de 401 y encola peticiones mientras refresca.

> Nota de seguridad: hoy los tokens se guardan en `localStorage` para facilitar
> las pruebas. Para producción conviene migrar a cookies `httpOnly` emitidas
> por el backend, para reducir el riesgo de XSS.

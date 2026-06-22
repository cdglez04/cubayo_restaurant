import { useState } from 'react'
import { BUSINESS } from '../config/business'
import { leads } from '../services/services'
import './Location.css'

export default function Location() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState('idle') // idle | loading | ok | error
  const [msg, setMsg] = useState('')

  const submit = async () => {
    if (!email.trim()) {
      setState('error')
      setMsg('Escribe tu correo para avisarte.')
      return
    }
    setState('loading')
    setMsg('')
    try {
      // Cuando el backend Django exponga POST /api/leads/ esto guarda el lead.
      await leads.subscribe({ name: name.trim(), email: email.trim() })
      setState('ok')
      setMsg('¡Listo! Te avisamos apenas abramos.')
      setEmail('')
      setName('')
    } catch {
      // Sin backend aún: mensaje honesto en vez de fingir éxito.
      setState('error')
      setMsg('Aún no podemos guardarlo en línea. Llámanos y te apuntamos.')
    }
  }

  const addr = BUSINESS.address

  return (
    <section className="loc" id="ubicacion">
      <div className="container loc__grid">
        <div className="loc__info">
          <span className="eyebrow">Visítanos pronto</span>
          <h2 className="loc__title">Aquí nos vas a encontrar</h2>

          <div className="loc__rows">
            <a className="loc__row" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">
              <span className="loc__ic"><Pin /></span>
              <span>
                <strong>{addr.line1}</strong>
                <br />{addr.city}, {addr.state} {addr.zip}
              </span>
            </a>
            <a className="loc__row" href={`tel:${BUSINESS.phone}`}>
              <span className="loc__ic"><Phone /></span>
              <span><strong>{BUSINESS.phoneDisplay}</strong><br />Llámanos directo</span>
            </a>
          </div>

          <div className="loc__notify">
            <h3 className="loc__notify-title">Te avisamos cuando abramos</h3>
            <p className="loc__notify-sub">Déjanos tu correo y sé de los primeros en probar.</p>
            <div className="loc__form">
              <input
                type="text"
                placeholder="Tu nombre (opcional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Tu nombre"
              />
              <div className="loc__form-send">
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  aria-label="Tu correo"
                />
                <button
                  className="btn btn-primary"
                  onClick={submit}
                  disabled={state === 'loading'}
                >
                  {state === 'loading' ? 'Enviando…' : 'Avísame'}
                </button>
              </div>
              {msg && (
                <p className={`loc__msg loc__msg--${state}`}>{msg}</p>
              )}
            </div>
          </div>
        </div>

        <div className="loc__map">
          <iframe
            title="Mapa de Cuba Yo en Porter, TX"
            src="https://www.google.com/maps?q=24151+US+59+Suite+205+Porter+TX+77365&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

function Pin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function Phone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

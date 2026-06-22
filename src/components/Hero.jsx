import { BUSINESS } from '../config/business'
import heart from '../assets/heart.png'
import facade from '../assets/facade.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero azulejo" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__badge">
            <span className="hero__badge-dot" />
            Pronto abrimos en Porter, TX
          </span>

          <h1 className="hero__title">
            El sabor cubano
            <br />
            que estabas
            <span className="hero__title-accent"> esperando</span>
          </h1>

          <p className="hero__lead">
            {BUSINESS.type}. Café colado, pizza recién horneada y el
            sándwich cubano de verdad — a un costadito de la US 59.
          </p>

          <div className="hero__actions">
            <a className="btn btn-primary" href="#menu">
              Ver el menú
            </a>
            <a className="btn btn-ghost" href={`tel:${BUSINESS.phone}`}>
              <PhoneIcon /> {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div className="hero__meta">
            <MapIcon />
            <span>
              {BUSINESS.address.line1} · {BUSINESS.address.city},{' '}
              {BUSINESS.address.state} {BUSINESS.address.zip}
            </span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__window">
            <img
              src={facade}
              alt="Fachada del local de Cuba Yo en Porter, Texas"
              className="hero__facade"
              loading="eager"
            />
            <div className="hero__stamp">
              <img src={heart} alt="" className="hero__stamp-heart" />
              <span>Sabor que te hace volver</span>
            </div>
          </div>
          <div className="hero__ribbon" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}
function MapIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

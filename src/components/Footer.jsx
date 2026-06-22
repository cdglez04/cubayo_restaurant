import { BUSINESS } from '../config/business'
import logo from '../assets/logo-cubayo.png'
import './Footer.css'

export default function Footer() {
  const addr = BUSINESS.address
  const year = new Date().getFullYear()

  return (
    <footer className="ft">
      <div className="container ft__grid">
        <div className="ft__brand">
          <img src={logo} alt="Cuba Yo" className="ft__logo" />
          <p className="ft__tagline">
            Cafetería &amp; Pizzería cubana. Sabor que te hace volver.
          </p>
        </div>

        <div className="ft__col">
          <h4>Dónde</h4>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">
            {addr.line1}
          </a>
          <span>{addr.city}, {addr.state} {addr.zip}</span>
        </div>

        <div className="ft__col">
          <h4>Contacto</h4>
          <a href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
          <span>¡Pronto abrimos!</span>
        </div>

        <div className="ft__col">
          <h4>Síguenos</h4>
          <a href={BUSINESS.social.facebook.url} target="_blank" rel="noreferrer">
            <Fb /> {BUSINESS.social.facebook.label}
          </a>
          <a href={BUSINESS.social.instagram.url} target="_blank" rel="noreferrer">
            <Ig /> {BUSINESS.social.instagram.label}
          </a>
          <a href={BUSINESS.social.tiktok.url} target="_blank" rel="noreferrer">
            <Tk /> {BUSINESS.social.tiktok.label}
          </a>
        </div>
      </div>

      <div className="ft__bar">
        <div className="container ft__bar-inner">
          <span>© {year} Cuba Yo · Porter, TX</span>
          <span className="ft__flag" aria-hidden="true" />
        </div>
      </div>
    </footer>
  )
}

function Fb() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.97 10.13 11.85v-8.38H7.08v-3.47h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.47h-2.8v8.38C19.61 23.04 24 18.07 24 12.07Z"/></svg>
  )
}
function Ig() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  )
}
function Tk() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82a4.28 4.28 0 0 1-1.01-2.82h-3.1v12.43a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1-2.59-2.59 2.59 2.59 0 0 1 3.3-2.49V9.66a5.66 5.66 0 0 0-6.4 5.62 5.66 5.66 0 0 0 5.7 5.62 5.66 5.66 0 0 0 5.68-5.62V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.3-1.48Z"/></svg>
  )
}

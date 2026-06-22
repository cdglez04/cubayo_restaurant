import { PROMISES } from '../config/business'
import './Promises.css'

const ICONS = {
  cafe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
    </svg>
  ),
  pizza: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 11h.01" /><path d="M11 15h.01" /><path d="M16 16h.01" />
      <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" /><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
    </svg>
  ),
  familia: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
}

export default function Promises() {
  return (
    <section className="promises">
      <div className="container">
        <div className="promises__head">
          <span className="eyebrow">Lo que te espera</span>
          <h2 className="promises__title">Ven a disfrutar de…</h2>
        </div>

        <div className="promises__grid">
          {PROMISES.map((p) => (
            <article key={p.key} className="promise">
              <span className="promise__icon">{ICONS[p.key]}</span>
              <h3 className="promise__name">{p.title}</h3>
              <p className="promise__text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

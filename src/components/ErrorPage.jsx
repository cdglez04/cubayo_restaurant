import { Link } from 'react-router-dom'
import { BUSINESS } from '../config/business'
import heart from '../assets/heart.png'
import './ErrorPage.css'

export default function ErrorPage() {
  return (
    <section className="error azulejo">
      <div className="container error__inner">
        <img src={heart} alt="" className="error__heart" />

        <span className="eyebrow">Página no encontrada</span>
        <h1 className="error__code">
          4<span className="error__code-accent">0</span>4
        </h1>
        <h2 className="error__title">Esta página se perdió camino a Cuba</h2>
        <p className="error__text">
          El enlace que seguiste no existe o cambió de lugar. Mientras tanto,
          el café sigue caliente en la página de inicio.
        </p>

        <div className="error__actions">
          <Link className="btn btn-primary" to="/">
            Volver al inicio
          </Link>
          <a className="btn btn-ghost" href={`tel:${BUSINESS.phone}`}>
            Llamar {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}

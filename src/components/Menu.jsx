import { MENU } from '../config/business'
import './Menu.css'

import cafe from '../assets/prod-cafe.jpg'
import pizza from '../assets/prod-pizza.jpg'
import sandwich from '../assets/prod-sandwich.jpg'
import lechon from '../assets/prod-lechon.jpg'
import croquetas from '../assets/prod-croquetas.jpg'
import guarapo from '../assets/prod-guarapo.jpg'

const IMAGES = { cafe, pizza, sandwich, lechon, croquetas, guarapo }

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="menu__head">
          <span className="eyebrow">Nuestro menú</span>
          <h2 className="menu__title">
            Recién hecho,
            <span className="menu__title-accent"> como en casa</span>
          </h2>
          <p className="menu__sub">
            Una muestra de lo que vas a encontrar. Y, como dicen por aquí: y
            mucho más.
          </p>
        </div>

        <div className="menu__grid">
          {MENU.map((item, i) => (
            <article
              key={item.key}
              className={`dish ${i === 0 ? 'dish--feature' : ''}`}
            >
              <div className="dish__photo">
                <img src={IMAGES[item.img]} alt={item.name} loading="lazy" />
                <span className="dish__cat">{item.cat}</span>
              </div>
              <div className="dish__body">
                <h3 className="dish__name">{item.name}</h3>
                <p className="dish__desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

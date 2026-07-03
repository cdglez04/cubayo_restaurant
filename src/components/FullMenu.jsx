import { MENU_FULL, PIZZA_ADDONS, PROMOS } from '../config/business'
import './FullMenu.css'

export default function FullMenu() {
  return (
    <section className="fmenu azulejo" id="carta">
      <div className="container">
        <div className="fmenu__head">
          <span className="eyebrow">La carta completa</span>
          <h2 className="fmenu__title">
            Todo nuestro menú,
            <span className="fmenu__title-accent"> con precios</span>
          </h2>
          <p className="fmenu__sub">
            Sabor que te transporta a Cuba. Estos son todos nuestros platos y
            bebidas.
          </p>
        </div>

        {/* Categorías con precios */}
        <div className="fmenu__cats">
          {MENU_FULL.map((cat) => (
            <div key={cat.key} className="fcat">
              <h3 className="fcat__title">{cat.title}</h3>
              <ul className="fcat__list">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className={`fitem ${item.featured ? 'fitem--featured' : ''}`}
                  >
                    <div className="fitem__main">
                      <span className="fitem__name">
                        {item.name}
                        {item.featured && (
                          <span className="fitem__badge">Especial</span>
                        )}
                      </span>
                      <span className="fitem__dots" aria-hidden="true" />
                      <span className="fitem__price">${item.price}</span>
                    </div>
                    {item.desc && <p className="fitem__desc">{item.desc}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Agregados a la pizza */}
        <div className="faddons">
          <div className="faddons__head">
            <h3 className="faddons__title">{PIZZA_ADDONS.label}</h3>
            <span className="faddons__price">
              ${PIZZA_ADDONS.price}{' '}
              <span className="faddons__unit">{PIZZA_ADDONS.unit}</span>
            </span>
          </div>
          <p className="faddons__note">{PIZZA_ADDONS.note}</p>
          <ul className="faddons__list">
            {PIZZA_ADDONS.items.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
        </div>

        {/* Promociones de apertura */}
        <div className="fpromos">
          <div className="fpromos__label">🎉 {PROMOS.title}</div>
          <div className="fpromos__grid">
            {PROMOS.items.map((p) => (
              <div key={p.name} className="fpromo">
                <span className="fpromo__name">{p.name}</span>
                <span className="fpromo__price">${p.price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="fmenu__note">
          Precios en dólares. Sujetos a cambio sin previo aviso.
        </p>
      </div>
    </section>
  )
}

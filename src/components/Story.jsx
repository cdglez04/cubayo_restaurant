import heart from '../assets/heart.png'
import croquetas from '../assets/prod-croquetas.jpg'
import guarapo from '../assets/prod-guarapo.jpg'
import './Story.css'

export default function Story() {
  return (
    <section className="story" id="historia">
      <div className="container story__grid">
        <div className="story__media">
          <img src={croquetas} alt="Croquetas cubanas recién fritas" className="story__img story__img--1" />
          <img src={guarapo} alt="Vaso de guarapo, jugo de caña natural" className="story__img story__img--2" />
          <img src={heart} alt="" className="story__heart" />
        </div>

        <div className="story__copy">
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="story__title">
            Un pedacito de Cuba
            <br />en Porter, Texas
          </h2>
          <p className="story__text">
            Cuba Yo nace de las ganas de traer a Texas el sabor de allá: el
            café fuerte de la mañana, las croquetas que se comparten, el
            guarapo bien frío y la pizza que se hornea sin prisa.
          </p>
          <p className="story__text">
            No es comida rápida. Es comida hecha con tiempo, para que cada
            bocado te haga sentir en casa.
          </p>

          <ul className="story__points">
            <li><Check /> Recetas cubanas de verdad</li>
            <li><Check /> Café cubano colado al momento</li>
            <li><Check /> Ambiente familiar y cercano</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

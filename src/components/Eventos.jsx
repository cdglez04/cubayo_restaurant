import { useEffect, useState } from 'react'
import { EVENTS } from '../config/business'
import './Eventos.css'

import inauguracion1 from '../assets/evento-inauguracion-1.jpg'
import inauguracion2 from '../assets/evento-inauguracion-2.jpg'
import inauguracion3 from '../assets/evento-inauguracion-3.jpg'
import inauguracion4 from '../assets/evento-inauguracion-4.jpg'
import inauguracion5 from '../assets/evento-inauguracion-5.jpg'
import inauguracion6 from '../assets/evento-inauguracion-6.jpg'

const IMAGES = {
  'evento-inauguracion-1': inauguracion1,
  'evento-inauguracion-2': inauguracion2,
  'evento-inauguracion-3': inauguracion3,
  'evento-inauguracion-4': inauguracion4,
  'evento-inauguracion-5': inauguracion5,
  'evento-inauguracion-6': inauguracion6,
}

export default function Events() {
  const [lightbox, setLightbox] = useState(null) // { src, alt } | null

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section className="eventos" id="eventos">
      <div className="container">
        <div className="eventos__head">
          <span className="eyebrow">Eventos</span>
          <h2 className="eventos__title">
            Momentos para
            <span className="eventos__title-accent"> celebrar juntos</span>
          </h2>
        </div>

        {EVENTS.map((event) => (
          <article key={event.key} className="event">
            <div className="event__info">
              <h3 className="event__name">{event.title}</h3>
              <p className="event__meta">
                {event.dateDisplay} · {event.location}
              </p>
              <p className="event__summary">{event.summary}</p>
            </div>

            <div className="event__gallery">
              {event.photos.map((photo) => (
                <button
                  key={photo.img}
                  type="button"
                  className={`event__item ${photo.featured ? 'event__item--feature' : ''}`}
                  onClick={() => setLightbox({ src: IMAGES[photo.img], alt: photo.alt })}
                  aria-label={photo.alt}
                >
                  <img src={IMAGES[photo.img]} alt={photo.alt} loading="lazy" />
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox__close"
            type="button"
            aria-label="Cerrar"
            onClick={() => setLightbox(null)}
          >
            &times;
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

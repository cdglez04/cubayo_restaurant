import { useEffect, useState } from 'react'
import { BUSINESS } from '../config/business'
import logo from '../assets/logo-cubayo.png'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#menu', label: 'Menú' },
    { href: '#historia', label: 'Nosotros' },
    { href: '#ubicacion', label: 'Ubicación' },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" aria-label="Cuba Yo, inicio">
          <img src={logo} alt="" className="nav__logo" />
          <span className="nav__name">
            Cuba<span>Yo</span>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary nav__cta" href={`tel:${BUSINESS.phone}`}>
            Llamar {BUSINESS.phoneDisplay}
          </a>
        </nav>

        <button
          className="nav__burger"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

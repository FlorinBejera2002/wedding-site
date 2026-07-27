import './Hero.css'
import { WEDDING_CONFIG } from '../config'

export default function Hero() {
  const d = new Date(WEDDING_CONFIG.date)
  const day = d.getDate()
  const month = d.toLocaleDateString('ro-RO', { month: 'long' })
  const year = d.getFullYear()

  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__drape hero__drape--left" />
        <div className="hero__drape hero__drape--right" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Vă invităm să sărbătoriți alături de noi</p>
        <h1 className="hero__names">
          <span className="hero__name hero__name--groom">{WEDDING_CONFIG.groomName}</span>
          <span className="hero__amp">&</span>
          <span className="hero__name hero__name--bride">{WEDDING_CONFIG.brideName}</span>
        </h1>

        <div className="hero__date">
          <div className="hero__date-line" />
          <div className="hero__date-main">{day} {month}</div>
          <div className="hero__date-year">{year}</div>
          <div className="hero__date-line" />
        </div>
        <a className="hero__scroll" href="#countdown" aria-label="Descoperă invitația">
          <span>Descoperă invitația</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

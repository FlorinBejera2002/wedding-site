import './Hero.css'
import FabricLayer from './FabricLayer'
import { WEDDING_CONFIG } from '../config'

export default function Hero() {
  const dateStr = new Date(WEDDING_CONFIG.date).toLocaleDateString('ro-RO', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  }).replace(/\//g, ' • ').replace(/\./g, ' • ')

  return (
    <section className="hero">
      <div className="hero__fabric">
        <FabricLayer index={0} />
        <FabricLayer index={1} />
        <FabricLayer index={2} />
        <FabricLayer index={3} />
      </div>
      <div className="hero__content">
        <p className="hero__subtitle">Vă invităm la nunta noastră</p>
        <h1 className="hero__names">
          {WEDDING_CONFIG.groomName}
          <span className="hero__ampersand">&</span>
          {WEDDING_CONFIG.brideName}
        </h1>
        <div className="hero__date">{dateStr}</div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  )
}

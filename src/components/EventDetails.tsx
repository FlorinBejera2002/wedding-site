import './EventDetails.css'
import { WEDDING_CONFIG } from '../config'
import ScrollReveal from './ScrollReveal'

const ChurchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--blue-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4v8M20 8h8M8 44V24l16-8 16 8v20M8 44h32M18 44v-10a6 6 0 0 1 12 0v10M14 28v4M34 28v4"/>
  </svg>
)

const CelebrationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="var(--blue-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 44V20h20v24M10 20h28M18 20l6-16 6 16M22 32h4M18 26h12"/>
  </svg>
)

export default function EventDetails() {
  const { ceremony, reception } = WEDDING_CONFIG

  return (
    <section className="events section">
      <ScrollReveal>
        <h2>Detalii eveniment</h2>
      </ScrollReveal>
      <div className="events__grid">
        <ScrollReveal delay={0.1}>
          <div className="glass-card events__card">
            <span className="events__number">01</span>
            <div className="events__icon"><ChurchIcon /></div>
            <h3 className="events__name">Cununia religioasă</h3>
            <p className="events__venue">{ceremony.name}</p>
            <div className="events__details">
              <p className="events__detail">
                <span className="events__detail-label">Ora</span> {ceremony.time}
              </p>
              <p className="events__detail">
                <span className="events__detail-label">Loc</span> {ceremony.address}
              </p>
            </div>
            <a href={ceremony.mapsUrl} target="_blank" rel="noopener noreferrer" className="events__link">
              Vezi pe hartă <span aria-hidden="true">↗</span>
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="glass-card events__card">
            <span className="events__number">02</span>
            <div className="events__icon"><CelebrationIcon /></div>
            <h3 className="events__name">Recepția</h3>
            <p className="events__venue">{reception.name}</p>
            <div className="events__details">
              <p className="events__detail">
                <span className="events__detail-label">Ora</span> {reception.time}
              </p>
              <p className="events__detail">
                <span className="events__detail-label">Loc</span> {reception.address}
              </p>
            </div>
            <a href={reception.mapsUrl} target="_blank" rel="noopener noreferrer" className="events__link">
              Vezi pe hartă <span aria-hidden="true">↗</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

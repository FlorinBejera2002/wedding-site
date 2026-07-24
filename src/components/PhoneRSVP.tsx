import './PhoneRSVP.css'
import { WEDDING_CONFIG } from '../config'
import ScrollReveal from './ScrollReveal'

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

export default function PhoneRSVP() {
  return (
    <section className="rsvp section">
      <ScrollReveal>
        <h2>Confirmă prezența</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="rsvp__message">
          Vă rugăm să confirmați prezența telefonic.<br/>
          Abia așteptăm să fiți alături de noi!
        </p>
      </ScrollReveal>
      <div className="rsvp__buttons">
        <ScrollReveal delay={0.2}>
          <a
            href={`tel:${WEDDING_CONFIG.phone.groom}`}
            className="rsvp__button"
            aria-label={`Sună-l pe Florin la ${WEDDING_CONFIG.phone.groom}`}
          >
            <PhoneIcon />
            Sună-l pe {WEDDING_CONFIG.groomName}
          </a>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <a
            href={`tel:${WEDDING_CONFIG.phone.bride}`}
            className="rsvp__button"
            aria-label={`Sun-o pe Eva la ${WEDDING_CONFIG.phone.bride}`}
          >
            <PhoneIcon />
            Sun-o pe {WEDDING_CONFIG.brideName}
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}

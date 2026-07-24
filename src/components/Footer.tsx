import './Footer.css'
import ScrollReveal from './ScrollReveal'
import { WEDDING_CONFIG } from '../config'

const HeartIcon = () => (
  <svg className="footer__heart" width="32" height="32" viewBox="0 0 24 24" fill="url(#heart-gradient)">
    <defs>
      <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d4a0b0" />
        <stop offset="100%" stopColor="#6b7db3" />
      </linearGradient>
    </defs>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
)

export default function Footer() {
  const year = new Date(WEDDING_CONFIG.date).getFullYear()

  return (
    <footer className="footer section">
      <ScrollReveal>
        <HeartIcon />
        <p className="footer__message">
          Abia așteptăm să sărbătorim împreună cu voi!
        </p>
        <p className="footer__secondary">
          {WEDDING_CONFIG.groomName} & {WEDDING_CONFIG.brideName} • {year}
        </p>
      </ScrollReveal>
    </footer>
  )
}

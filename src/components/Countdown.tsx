import './Countdown.css'
import { useCountdown } from '../hooks/useCountdown'
import { WEDDING_CONFIG } from '../config'
import ScrollReveal from './ScrollReveal'

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(WEDDING_CONFIG.date)

  if (isExpired) {
    return (
      <section className="countdown section">
        <ScrollReveal>
          <div className="countdown__expired">
            <span className="countdown__heart">❤</span>
            <h2>Ne-am căsătorit!</h2>
          </div>
        </ScrollReveal>
      </section>
    )
  }

  const units = [
    { value: String(days).padStart(2, '0'), label: 'Zile' },
    { value: String(hours).padStart(2, '0'), label: 'Ore' },
    { value: String(minutes).padStart(2, '0'), label: 'Minute' },
    { value: String(seconds).padStart(2, '0'), label: 'Secunde' },
  ]

  return (
    <section className="countdown section">
      <ScrollReveal>
        <h2>Numărătoare inversă</h2>
      </ScrollReveal>
      <div className="countdown__grid" role="timer" aria-live="polite">
        {units.map((unit, i) => (
          <ScrollReveal key={unit.label} delay={i * 0.1}>
            <div className="glass-card countdown__card">
              <span className="countdown__number">{unit.value}</span>
              <span className="countdown__label">{unit.label}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

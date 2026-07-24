import './WaveDivider.css'

interface Props {
  flip?: boolean
}

export default function WaveDivider({ flip }: Props) {
  return (
    <div className={`wave-divider ${flip ? 'wave-divider--flip' : ''}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className="wave-path"
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill="rgba(255,255,255,0.3)"
        />
        <path
          className="wave-path"
          d="M0,80 C300,20 600,100 900,50 C1200,0 1350,80 1440,40 L1440,120 L0,120 Z"
          fill="rgba(176,196,222,0.15)"
          style={{ animationDelay: '-5s' }}
        />
      </svg>
    </div>
  )
}

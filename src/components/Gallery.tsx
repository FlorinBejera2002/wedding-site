import './Gallery.css'
import ScrollReveal from './ScrollReveal'

const CameraIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-body)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
)

const galleryItems: Array<{ type: 'photo'; src: string; alt: string } | { type: 'placeholder' }> = [
  { type: 'photo', src: '/photos/couple-1.jpeg', alt: 'Florin și Eva' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
  { type: 'placeholder' },
]

export default function Gallery() {
  return (
    <section className="gallery section">
      <ScrollReveal><h2>Povestea noastră</h2></ScrollReveal>
      <div className="gallery__grid">
        {galleryItems.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            {item.type === 'photo' ? (
              <figure className="gallery__item gallery__item--photo">
                <img src={item.src} alt={item.alt} />
                <figcaption>Florin & Eva</figcaption>
              </figure>
            ) : (
              <div className="gallery__item gallery__item--placeholder" role="img" aria-label="Fotografie placeholder">
                <CameraIcon />
                <span>În curând</span>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

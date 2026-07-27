import './FloralFrame.css'

export default function FloralFrame() {
  return (
    <div className="floral-frame" aria-hidden="true">
      <img className="floral-frame__corner floral-frame__corner--tl" src="/corner-flower.svg" alt="" draggable={false} />
      <img className="floral-frame__corner floral-frame__corner--tr" src="/corner-flower.svg" alt="" draggable={false} />
      <img className="floral-frame__corner floral-frame__corner--bl" src="/corner-flower.svg" alt="" draggable={false} />
      <img className="floral-frame__corner floral-frame__corner--br" src="/corner-flower.svg" alt="" draggable={false} />
    </div>
  )
}

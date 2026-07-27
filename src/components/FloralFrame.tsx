import './FloralFrame.css'

export default function FloralFrame() {
  const corners = ['tl', 'tr', 'bl', 'br']

  return (
    <div className="floral-frame" aria-hidden="true">
      {corners.map((corner) => (
        <span key={corner} className={`floral-frame__corner floral-frame__corner--${corner}`}>
          <img className="floral-frame__flower floral-frame__flower--mask" src="/corner-flower.svg" alt="" draggable={false} />
          <img className="floral-frame__flower" src="/corner-flower.svg" alt="" draggable={false} />
        </span>
      ))}
    </div>
  )
}

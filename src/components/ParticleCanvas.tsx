import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  phase: number
  drift: number
  type: 'petal' | 'dot' | 'sparkle'
  rotation: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 25 : 50

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = Array.from({ length: count }, () =>
      createParticle(canvas.width, canvas.height, false)
    )
    let raf: number
    let time = 0

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01
      for (const p of particles) {
        p.x += Math.sin(time * p.speed + p.phase) * 0.5
        p.y -= p.drift
        if (p.y < -p.size) {
          Object.assign(p, createParticle(canvas.width, canvas.height, true))
        }
        ctx.globalAlpha = p.opacity
        if (p.type === 'petal') drawPetal(ctx, p)
        else if (p.type === 'dot') drawDot(ctx, p)
        else drawSparkle(ctx, p)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

function createParticle(w: number, h: number, fromBottom: boolean): Particle {
  const types: Particle['type'][] = ['petal', 'dot', 'sparkle']
  return {
    x: Math.random() * w,
    y: fromBottom ? h + 20 : Math.random() * h,
    size: 3 + Math.random() * 5,
    opacity: 0.2 + Math.random() * 0.4,
    speed: 0.3 + Math.random() * 0.7,
    phase: Math.random() * Math.PI * 2,
    drift: 0.15 + Math.random() * 0.35,
    type: types[Math.floor(Math.random() * types.length)],
    rotation: Math.random() * Math.PI * 2,
  }
}

function drawPetal(ctx: CanvasRenderingContext2D, p: Particle) {
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rotation)
  ctx.beginPath()
  ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(212,160,176,0.6)'
  ctx.fill()
  ctx.restore()
}

function drawDot(ctx: CanvasRenderingContext2D, p: Particle) {
  ctx.beginPath()
  ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(176,196,222,0.5)'
  ctx.fill()
}

function drawSparkle(ctx: CanvasRenderingContext2D, p: Particle) {
  const s = p.size * 0.5
  ctx.save()
  ctx.translate(p.x, p.y)
  ctx.rotate(p.rotation)
  ctx.beginPath()
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2
    ctx.lineTo(Math.cos(angle) * s, Math.sin(angle) * s)
    ctx.lineTo(
      Math.cos(angle + Math.PI / 4) * s * 0.3,
      Math.sin(angle + Math.PI / 4) * s * 0.3
    )
  }
  ctx.closePath()
  ctx.fillStyle = 'rgba(255,255,255,0.7)'
  ctx.fill()
  ctx.restore()
}

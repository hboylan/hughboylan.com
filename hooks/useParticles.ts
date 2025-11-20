'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  baseX: number
  baseY: number
  density: number
}

interface UseParticlesOptions {
  particleCount?: number
  colors?: string[]
  maxDistance?: number
  bufferRadius?: number
}

export function useParticles(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  options: UseParticlesOptions = {}
) {
  const {
    particleCount = 100,
    colors = ['#0ea5e9', '#d946ef'], // primary-500 and accent-500
    maxDistance = 300,
    bufferRadius = 50,
  } = options

  const mouseRef = useRef({ x: 0, y: 0 })
  const isMouseInRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          baseX: x,
          baseY: y,
          density: Math.random() * 10 + 2,
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Normal movement
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Mouse interaction
        if (isMouseInRef.current) {
          const dx = mouseRef.current.x - particle.x
          const dy = mouseRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance

          if (distance < maxDistance) {
            // If outside buffer, attract
            if (distance > bufferRadius) {
              const force = (maxDistance - distance) / maxDistance
              const directionX = forceDirectionX * force * particle.density
              const directionY = forceDirectionY * force * particle.density
              particle.x += directionX
              particle.y += directionY
            } else {
              // If inside buffer, gently push away or drift
              const force = (bufferRadius - distance) / bufferRadius
              const directionX = -forceDirectionX * force * (particle.density * 0.5)
              const directionY = -forceDirectionY * force * (particle.density * 0.5)
              particle.x += directionX
              particle.y += directionY
            }
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.6
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      mouseRef.current = { x, y }
      isMouseInRef.current =
        x >= 0 && x <= rect.width &&
        y >= 0 && y <= rect.height
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [canvasRef, particleCount, colors, maxDistance, bufferRadius])
}

'use client'

import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  separator?: boolean
  startDelay?: number
}

export default function AnimatedCounter({ 
  target, 
  prefix = '', 
  suffix = '', 
  duration = 2000,
  className = '',
  separator = false,
  startDelay = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Start animation after delay
          setTimeout(() => {
            const startTime = Date.now()
            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function (ease-out)
              const easeOut = 1 - Math.pow(1 - progress, 3)
              const currentCount = Math.floor(easeOut * target)
              
              setCount(currentCount)
              
              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }
            
            requestAnimationFrame(animate)
          }, startDelay)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [target, duration, hasAnimated, startDelay])

  const formatNumber = (num: number) => {
    if (separator && num >= 1000) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}
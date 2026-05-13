'use client'
import { useEffect, useRef } from 'react'

const START = 240   // 4:00
const END   = 384   // 6:24

export default function HeroVideo() {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return

    const onReady = () => { v.currentTime = START }
    const onTimeUpdate = () => { if (v.currentTime >= END) v.currentTime = START }

    v.addEventListener('loadedmetadata', onReady)
    v.addEventListener('timeupdate', onTimeUpdate)
    return () => {
      v.removeEventListener('loadedmetadata', onReady)
      v.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 0.55 }}
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  )
}

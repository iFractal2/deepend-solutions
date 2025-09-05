import React, { useEffect, useRef, useState } from 'react'

const exts = ['jpg','jpeg','png','webp']
async function discover(prefix, maxN = 50) {
  const out = []
  for (let i = 1; i <= maxN; i++) {
    let found = null
    for (const ext of exts) {
      const url = `/images/${prefix}_${i}.${ext}`
      // eslint-disable-next-line no-await-in-loop
      const ok = await new Promise(res => {
        const img = new Image()
        img.onload = () => res(true)
        img.onerror = () => res(false)
        img.src = url
      })
      if (ok) { found = url; break }
    }
    if (found) out.push(found)
  }
  return out
}

export default function Hero() {
  const rotRef = useRef(null)
  const [headers, setHeaders] = useState([])
  const [overlays, setOverlays] = useState([])

  useEffect(() => {
    (async () => {
      setHeaders(await discover('header'))
      setOverlays(await discover('overlay'))
    })()
  }, [])

  useEffect(() => {
    if (!rotRef.current || headers.length === 0) return
    let idx = 0
    const int = setInterval(() => {
      const imgs = rotRef.current.querySelectorAll('img')
      imgs.forEach((im, k) => im.classList.toggle('active', k === idx))
      idx = (idx + 1) % imgs.length
    }, 4000)
    return () => clearInterval(int)
  }, [headers])

  return (
    <div className="hero-wrap">
      <div className="hero-media">
        <div className="hero-rotator" ref={rotRef}>
          {headers.length === 0 ? (
            <div style={{position:'absolute',inset:0,background:'linear-gradient(120deg,#0d1d33,#0a0f17)'}} />
          ) : headers.map((src, i) => (
            <img key={src} src={src} alt={`Header ${i+1}`} className={i===0 ? 'active':''}/>
          ))}
        </div>
        <div className="hero-overlays">
          {overlays.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Overlay ${i+1}`}
              className="show"
              style={{ top: `${12 + i * 6}%`, left: `${10 + (i % 2) * 40}%` }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <h1>Deepend Pool Solutions</h1>
        <p className="tagline">Renovations • Repairs • Upgrades</p>
      </div>
      <div className="scroll-indicator">Scroll</div>
    </div>
  )
}

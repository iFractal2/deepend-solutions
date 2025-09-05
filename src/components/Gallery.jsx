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

export default function Gallery() {
  const [slides, setSlides] = useState([])
  const trackRef = useRef(null)
  const vpRef = useRef(null)
  const idxRef = useRef(0)
  const lockRef = useRef(false)

  useEffect(() => {
    (async () => {
      const imgs = await discover('gallery')
      setSlides(imgs.length ? imgs : ['/images/gallery_1.jpg'])
    })()
  }, [])

  useEffect(() => {
    const track = trackRef.current
    const vp = vpRef.current
    if (!track || !vp) return

    function go(n){
      const total = track.children.length
      idxRef.current = (n + total) % total
      const x = -idxRef.current * vp.clientWidth
      track.style.transform = `translate3d(${x}px,0,0)`
    }
    function onResize(){
      const w = vp.clientWidth
      Array.from(track.children).forEach(li => li.style.minWidth = `${w}px`)
      go(idxRef.current)
    }
    window.addEventListener('resize', onResize)
    onResize()

    const timer = setInterval(() => go(idxRef.current + 1), 4000)
    return () => { window.removeEventListener('resize', onResize); clearInterval(timer) }
  }, [slides])

  const click = (dir) => {
    if (lockRef.current) return
    lockRef.current = true
    const track = trackRef.current
    const vp = vpRef.current
    const total = track.children.length
    let n = idxRef.current + (dir === 'next' ? 1 : -1)
    n = (n + total) % total
    const x = -n * vp.clientWidth
    track.style.transform = `translate3d(${x}px,0,0)`
    idxRef.current = n
    setTimeout(() => { lockRef.current = false }, 350)
  }

  return (
    <div className="gallery">
      <button className="arrow left" aria-label="Previous" onClick={()=>click('prev')}>&#10094;</button>
      <div className="viewport" ref={vpRef}>
        <ul className="track" ref={trackRef}>
          {slides.map((src, i) => {
            const base = src.split('/').pop().split('.')[0]
            const caption = base.replace(/^gallery_?/i,'').replace(/[_-]+/g,' ').trim() || `Project ${i+1}`
            return (
              <li key={src} className="slide">
                <img src={src} alt={`Gallery ${i+1}`} />
                <div className="caption">{caption}</div>
              </li>
            )
          })}
        </ul>
      </div>
      <button className="arrow right" aria-label="Next" onClick={()=>click('next')}>&#10095;</button>
    </div>
  )
}

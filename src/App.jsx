import React, { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Gallery from './components/Gallery.jsx'

export default function App() {
  // IntersectionObserver for fade-on-view
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible') })
    }, { threshold: 0.15 })
    document.querySelectorAll('.fade-on-view').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header id="hero" className="section fade-on-view">
        <Hero />
      </header>

      <main id="contentWrapper" className="page-flow">
        <section id="services" className="section fade-on-view">
          <article className="article-card">
            <h2>What we do:</h2>
            <Services />
          </article>
        </section>

        <section id="gallery" className="section fade-on-view">
          <article className="article-card">
            <h2>Recent Projects</h2>
            <Gallery />
          </article>
        </section>

        <footer className="section fade-on-view">
          <div className="footer-inner">
            <p>&copy; <span>{new Date().getFullYear()}</span> Deepend Pool Solutions. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  )
}

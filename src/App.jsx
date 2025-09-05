import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

export default function App() {
  // Fade-on-view observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-on-view").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ---- Services ----
  const services = [
    { key: "remodeling", title: "Remodeling", prefix: "remodel" },
    { key: "tile", title: "Tile", prefix: "tile" },
    { key: "features", title: "Water Features", prefix: "waterfeatures" },
    { key: "rails", title: "Handrails / Fences", prefix: "rails" },
    { key: "turf", title: "Turf", prefix: "turf" },
    { key: "covers", title: "Pool Covers", prefix: "covers" }, // renamed
  ];

  // Palette-inspired themes for cards (gradient colors)
  const themes = {
    remodeling:  { start: "#2d7a78", end: "#4bb4b0" },
    tile:        { start: "#67cae9", end: "#92e9f6" },
    features:    { start: "#42e9c0", end: "#79f2d4" },
    rails:       { start: "#378aa3", end: "#61c6c0" },
    turf:        { start: "#1f6d7f", end: "#49aca2" },
    covers:      { start: "#aef3ef", end: "#d6fcfb" },
  };

  // Summaries
  const summaries = useMemo(
    () => ({
      remodeling:
        "Full-scope pool remodeling: resurfacing, tile/coping refresh, structure repair, equipment upgrades, and finish application with balanced startup.",
      tile:
        "Waterline and accent tile replacement/repair using chemical-resistant materials, precise substrate prep, and expansion control.",
      features:
        "Sheer descents, scuppers, bubblers, deck jets, grottos, rockwork, and lighting—designed for correct flow, noise profile, and longevity.",
      rails:
        "Core-drilled stainless rails and compliant fencing. Epoxy anchors and code-aware placement for safe, elegant access.",
      turf:
        "Low-maintenance turf with drainage base, cool-touch options, clean edging, and resilient seams around the deck.",
      covers:
        "Automatic and manual pool covers sized to your basin. Energy savings, debris control, safety-first hardware, and service for tracks, reels, and fabrics.",
    }),
    []
  );

  // Expand state + FLIP source rect
  const [expandedKey, setExpandedKey] = useState(null);
  const [fromRect, setFromRect] = useState(null);
  const cardRefs = useRef({}); // key -> element

  const handleOpen = (key) => {
    const el = cardRefs.current[key];
    if (!el) return;
    const r = el.getBoundingClientRect();
    setFromRect({ x: r.x, y: r.y, w: r.width, h: r.height });
    setExpandedKey(key);
  };
  const handleClose = () => setExpandedKey(null);

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#1a2b3c", margin: 0 }}>
      <style>{css}</style>

      {/* HERO */}
      <header className="hero fade-on-view">
        <img className="hero-img" src="/images/topimage.png" alt="Deep End Pool Solutions" />
        <div className="hero-strip" aria-hidden="true" />
      </header>

      {/* WHAT WE DO (looping background video) */}
      <section className="section section--video fade-on-view">
        <div className="video-bg" aria-hidden="true">
          <video
            className="video-bg__media"
            src="/videos/whatwedo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="video-bg__scrim" />
        </div>

        <div className="container">
          <h2 className="section__title" style={{ textAlign: "center" }}>What we do</h2>

        <div className={`grid ${expandedKey ? "grid--collapsed" : ""}`}>
            {services.map((s) => (
              <ServiceCard
                key={s.key}
                data={s}
                theme={themes[s.key]}
                refFn={(el) => (cardRefs.current[s.key] = el)}
                hidden={!!expandedKey && expandedKey !== s.key}
                onOpen={() => handleOpen(s.key)}
              />
            ))}
          </div>

          {expandedKey && (
            <ExpandedFLIP
              service={services.find((x) => x.key === expandedKey)}
              theme={themes[expandedKey]}
              summary={summaries[expandedKey]}
              fromRect={fromRect}
              onClose={handleClose}
            />
          )}
        </div>
      </section>

      {/* CONTACT — single centered card */}
      <section className="contact-section fade-on-view" id="contact">
        <div className="container">
          <header className="contact-head">
            <h2>Contact us</h2>
            <p>We’re happy to answer questions, provide quotes, and help you plan your project.</p>
          </header>

          <div className="contact-single">
            <div className="contact-card">
              <div className="contact-card__header">
                <h3>Get in touch</h3>
              </div>
              <div className="contact-card__body">
                <div className="detail">
                  <div className="label">Phone</div>
                  <a className="value link" href="tel:+18175643400">817 564 3400</a>
                </div>
                <div className="divider" />
                <div className="detail">
                  <div className="label">Email</div>
                  <a className="value link" href="mailto:deepend.service@deependpoolsolutions.com">
                    deepend.service@deependpoolsolutions.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <footer className="contact-foot">
            <p>Prefer a callback? Mention a good time in your message and we’ll reach out.</p>
          </footer>
        </div>
      </section>
    </div>
  );
}

/* ------------------- GRID CARD (gradient on card, white stroke) ------------------- */
function ServiceCard({ data, theme, refFn, hidden, onOpen }) {
  const [preview, setPreview] = useState(null);

  // Load per-card preview once (_1 preferred; else first found)
  useEffect(() => {
    let alive = true;
    (async () => {
      const first = await discoverFirst(data.prefix || data.key);
      if (alive) setPreview(first);
    })();
    return () => { alive = false; };
  }, [data.prefix, data.key]);

  // Gradient on the whole card; thin white stroke; image sits beneath the label
  const styleCard = {
    background: `linear-gradient(160deg, ${theme.start} 0%, ${theme.end} 100%)`,
    border: "2px solid #ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <a
      className={`service ${hidden ? "service--hidden" : ""}`}
      href="#"
      ref={refFn}
      onClick={(e) => { e.preventDefault(); onOpen(); }}
      aria-label={`Open ${data.title}`}
      style={styleCard}
    >
      <div className="service__thumb">
        {preview && (
          <img
            src={preview}
            alt={`${data.title} preview`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        )}
      </div>
      <div
        className="service__title"
        style={{
          position: "relative",
          zIndex: 1,
          padding: "12px 14px",
          fontWeight: 800,
          color: "#fff",
          textShadow: "0 1px 2px rgba(0,0,0,.4)",
          background: "rgba(0,0,0,.25)",
          backdropFilter: "blur(4px)",
        }}
      >
        {data.title}
      </div>
    </a>
  );
}

/* --------------- EXPANDED FLIP OVERLAY --------------- */
function ExpandedFLIP({ service, theme, summary, fromRect, onClose }) {
  const wrapRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [idx, setIdx] = useState(0);
  const rotRef = useRef(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      const urls = await discover(service.prefix);
      if (alive) setSlides(urls.length ? urls : [`/images/${service.prefix}_1.jpg`]);
    })();
    return () => (alive = false);
  }, [service.prefix]);

  useEffect(() => {
    if (!slides.length) return;
    rotRef.current = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(rotRef.current);
  }, [slides]);

  // NOTE: We intentionally DO NOT lock body scroll now.
  // This allows the page behind the overlay to continue scrolling.

  // FLIP animation using WAAPI
  useLayoutEffect(() => {
    const node = wrapRef.current;
    if (!node || !fromRect) return;

    const to = node.getBoundingClientRect();
    const from = { x: fromRect.x, y: fromRect.y, w: fromRect.w, h: fromRect.h };

    const sx = from.w / to.width;
    const sy = from.h / to.height;
    const dx = from.x - to.x;
    const dy = from.y - to.y;

    const canAnimate = "animate" in node && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (canAnimate) {
      node.animate(
        [{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(6px)" }],
        { duration: 320, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }
      );
      node.style.transformOrigin = "top left";
      node.animate(
        [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: "translate(0, 0) scale(1, 1)" }],
        { duration: 360, easing: "cubic-bezier(.18,.84,.26,1)", fill: "both" }
      );
      const content = node.querySelector(".expanded");
      if (content) {
        content.animate(
          [{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "translateY(0)" }],
          { duration: 260, delay: 90, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }
        );
      }
    } else {
      node.classList.add("flip-fallback-in");
      requestAnimationFrame(() => node.classList.add("flip-fallback-in--play"));
    }
  }, [fromRect]);

  const handleClose = () => {
    const node = wrapRef.current;
    if (!node || !fromRect) return onClose();

    const to = node.getBoundingClientRect();
    const from = { x: fromRect.x, y: fromRect.y, w: fromRect.w, h: fromRect.h };
    const sx = from.w / to.width;
    const sy = from.h / to.height;
    const dx = from.x - to.x;
    const dy = from.y - to.y;

    const canAnimate = "animate" in node && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (canAnimate) {
      node.animate(
        [{ opacity: 1, backdropFilter: "blur(6px)" }, { opacity: 0, backdropFilter: "blur(0px)" }],
        { duration: 240, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
      );
      node.style.transformOrigin = "top left";
      node.animate(
        [{ transform: "translate(0,0) scale(1,1)" }, { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }],
        { duration: 260, easing: "cubic-bezier(.18,.84,.26,1)", fill: "forwards" }
      ).finished.finally(onClose).catch(onClose);
    } else {
      node.classList.remove("flip-fallback-in--play");
      setTimeout(onClose, 220);
    }
  };

  return (
    <div ref={wrapRef} className="expanded-overlay">
      <div
        className="expanded"
        style={{
          background: `linear-gradient(160deg, ${theme.start} 0%, ${theme.end} 100%)`,
          color: "#fff",
        }}
      >
        <button className="close" aria-label="Close" onClick={handleClose}>×</button>

        <div className="expanded__header">
          <h3 style={{ color: "#fff", textShadow: "0 1px 2px rgba(0,0,0,.35)" }}>{service.title}</h3>
        </div>

        <div className="expanded__content">
          {/* Slider */}
          <div className="slider">
            <ul className="slider__track" style={{ transform: `translate3d(${-idx * 100}%,0,0)` }}>
              {slides.map((src, i) => (
                <li className="slider__slide" key={src}>
                  <img src={src} alt={`${service.title} ${i + 1}`} />
                </li>
              ))}
            </ul>
            <button className="nav prev" aria-label="Previous" onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}>&#10094;</button>
            <button className="nav next" aria-label="Next" onClick={() => setIdx((i) => (i + 1) % slides.length)}>&#10095;</button>
          </div>

          {/* Scrollable text (white background) */}
          <div className="expanded__text" style={{ background: "#fff", color: "#1a2b3c" }}>
            <p>{summary}</p>
            <p style={{ color: "#607185" }}>
              Add project details, typical timelines, material options, warranties, and care tips here. This panel scrolls if content is long.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------- HELPERS ------------------- */
async function discoverFirst(prefix) {
  const exts = ["jpg", "jpeg", "png", "webp"];
  for (const ext of exts) {
    const url = `/images/${prefix}_1.${ext}`;
    // eslint-disable-next-line no-await-in-loop
    const ok = await new Promise((res) => {
      const img = new Image();
      img.onload = () => res(true);
      img.onerror = () => res(false);
      img.src = url;
    });
    if (ok) return url;
  }
  for (let i = 2; i <= 40; i++) {
    for (const ext of exts) {
      const url = `/images/${prefix}_${i}.${ext}`;
      // eslint-disable-next-line no-await-in-loop
      const ok = await new Promise((res) => {
        const img = new Image();
        img.onload = () => res(true);
        img.onerror = () => res(false);
        img.src = url;
      });
      if (ok) return url;
    }
  }
  return null;
}
async function discover(prefix, maxN = 40) {
  const exts = ["jpg", "jpeg", "png", "webp"];
  const urls = [];
  for (let i = 1; i <= maxN; i++) {
    let found = null;
    for (const ext of exts) {
      const url = `/images/${prefix}_${i}.${ext}`;
      // eslint-disable-next-line no-await-in-loop
      const ok = await new Promise((res) => {
        const img = new Image();
        img.onload = () => res(true);
        img.onerror = () => res(false);
        img.src = url;
      });
      if (ok) { found = url; break; }
    }
    if (found) urls.push(found);
  }
  return urls;
}

/* ------------------- INLINE CSS ------------------- */
const css = `
:root{
  --container: 1180px;
  --border: rgba(0,0,0,.10);

  --bg: #ffffff;
  --fg: #1a2b3c;

  --strip: #e6d87a;
  --strip-border: #1c5aa3;

  --hero-bg: #f3f4f6;
  --hero-max-w: 500px;

  --expanded-border: rgba(0,0,0,.12);
  --expanded-shadow: 0 18px 40px rgba(0,0,0,.18);
}

*{box-sizing:border-box}
html,body,#root{height:100%}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--fg)}

.container{ max-width: var(--container); margin:0 auto; padding:0 20px }

/* HERO */
.hero{ margin:0; padding:20px 0 0; background: var(--hero-bg); text-align:center }
.hero-img{ width:100%; max-width: var(--hero-max-w); height:auto; display:inline-block; margin:0 auto }
.hero-strip{ height:44px; background: var(--strip); border-top:4px solid var(--strip-border); width:100% }

/* Sections */
.section{ position:relative; padding: clamp(22px, 5vw, 56px) 0 }
.section__title{ margin:0 0 22px; font-size: clamp(22px, 3.2vw, 32px) }

/* Section video bg */
.section--video{ overflow:clip }
.video-bg{ position:absolute; inset:0; z-index:0 }
.video-bg__media{
  position:absolute; inset:0;
  width:100%; height:100%; object-fit:cover;
  filter: brightness(.95) saturate(1.05);
}
.video-bg__scrim{
  position:absolute; inset:0;
  background: linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.88) 60%, rgba(255,255,255,1));
}
.section--video > .container{ position:relative; z-index:1 }

/* Fade-in */
.fade-on-view{ opacity:0; transform:translateY(8px); transition: opacity .45s ease, transform .45s ease }
.fade-on-view.is-visible{ opacity:1; transform:translateY(0) }

/* GRID */
.grid{ display:grid; gap:16px; grid-template-columns: repeat(3, 1fr); transition: opacity .25s ease }
@media(max-width:1050px){ .grid{ grid-template-columns: repeat(2, 1fr) } }
@media(max-width:560px){ .grid{ grid-template-columns: 1fr } }
.grid--collapsed{ opacity:.04; pointer-events:none }

/* Cards (gradient on card body; thin white stroke) */
.service{
  display:flex; flex-direction:column; text-decoration:none; color:inherit;
  transition: transform .14s ease, box-shadow .14s ease, opacity .2s;
  box-shadow: 0 2px 10px rgba(0,0,0,.06);
}
.service:hover{ transform: translateY(-2px); box-shadow:0 8px 18px rgba(0,0,0,.12) }
.service--hidden{ opacity:0; pointer-events:none }

.service__thumb{ position:relative; width:100%; aspect-ratio:16/9 }
.service__thumb img{ width:100%; height:100%; object-fit:cover }

/* Title band sits on top of gradient & image */
.service__title{ padding:12px 14px; font-weight:800; color:#fff }

/* ----------- FLIP Overlay ----------- */
.expanded-overlay{
  position: fixed; inset: 0;
  display: grid; align-items: start; justify-items: center;
  padding: clamp(10px, 4vh, 24px) 12px;  /* smaller on phones */
  background: rgba(0,0,0,.28);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  z-index: 50; will-change: transform, opacity;

  /* Allow scrolling the page underneath when clicking/scrolling outside the modal */
  pointer-events: none;
}
.expanded{
  width: min(1100px, 96vw);
  border: 1px solid var(--expanded-border);
  border-radius: 12px;
  box-shadow: var(--expanded-shadow);
  overflow: clip; position: relative; will-change: transform, opacity;

  /* Re-enable interactions on the modal itself */
  pointer-events: auto;
}
@media (max-width: 560px){
  .expanded{
    width: 100%;
    border-radius: 10px;
  }
}

.close{
  position:absolute; top:10px; right:12px;
  width:40px; height:40px; border:none; border-radius:10px; cursor:pointer;
  background:#eef1f6; color:#111; font-size:26px; line-height:40px; text-align:center;
  transition: background .18s ease, transform .18s ease;
  touch-action: manipulation;
}
.close:hover{ background:#e5e9f1; transform: translateY(-1px) }

.expanded__header{ padding: 14px 14px 8px }
.expanded__header h3{ margin:0; font-size: clamp(18px, 2.6vw, 26px) }

.expanded__content{
  display:grid; grid-template-columns: 1.25fr 1fr;
  gap: 14px; padding: 8px 14px 14px;
}
@media(max-width:900px){ .expanded__content{ grid-template-columns: 1fr } }

/* Slider */
.slider{ position:relative; overflow:hidden; border:1px solid var(--border); border-radius:8px; background:#0b111c10 }
.slider__track{ display:flex; margin:0; padding:0; list-style:none; transition: transform .35s ease }
.slider__slide{ min-width:100%; aspect-ratio:16/9; background:#f1f5fb; position:relative }
.slider__slide img{ width:100%; height:100%; object-fit:cover; display:block }
.nav{
  position:absolute; top:50%; transform:translateY(-50%);
  background:rgba(0,0,0,.45); color:#fff; border:none; width:36px; height:36px; border-radius:50%; cursor:pointer;
  touch-action: manipulation;
}
.nav:hover{ background:rgba(0,0,0,.65) }
.prev{ left:8px } .next{ right:8px }

/* Scrollable text (white background) */
.expanded__text{
  border:1px solid var(--border); border-radius:8px; padding:12px;
  max-height: 360px; overflow:auto; background:#fff;
}
@media (max-width: 560px){
  .expanded__text{ max-height: 320px; }
}
.expanded__text p{ margin:0 0 10px; line-height:1.55 }

/* ------------------- CONTACT SECTION (single centered card) ------------------- */
.contact-section{
  background: var(--strip);
  border-top: 4px solid var(--strip-border);
  padding: clamp(36px, 6vw, 72px) 0;
}
.contact-head{
  text-align:center;
  margin: 0 auto clamp(20px, 4vw, 36px);
  max-width: 760px;
}
.contact-head h2{
  margin:0 0 6px;
  font-size: clamp(24px,3.2vw,34px);
  color:#0f2732;
}
.contact-head p{
  margin:0;
  color:#2f4750;
}
.contact-single{ display:grid; place-items:center; }
.contact-card{
  width: min(720px, 100%);
  background: #ffffff;
  border: 1px solid rgba(0,0,0,.10);
  border-radius: 14px;
  box-shadow: 0 14px 30px rgba(0,0,0,.14);
  overflow: hidden;
  display:flex;
  flex-direction:column;
}
.contact-card__header{ padding: 16px 18px 10px; border-bottom: 1px solid rgba(0,0,0,.06) }
.contact-card__header h3{ margin:0; font-size: clamp(18px,2.2vw,22px); color:#0f2732 }
.contact-card__body{ padding: 14px 18px 18px; display:flex; flex-direction:column; gap: 12px }
.detail{ display:grid; grid-template-columns: 120px 1fr; align-items:center; gap: 10px }
.label{ color:#3a5560; font-weight:700 }
.value{ color:#0f2732; font-weight:800 }
.link{ text-decoration:none; border-bottom: 1px dashed rgba(15,39,50,.25) }
.link:hover{ border-bottom-color: rgba(15,39,50,.55) }
.divider{ height:1px; width:100%; background: linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,.10), rgba(0,0,0,0)) }

.contact-foot{ text-align:center; margin-top: clamp(18px, 4vw, 28px); color:#2f4750 }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
`;

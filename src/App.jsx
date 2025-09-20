import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

/* ------------------- BUILD-TIME IMAGE MAP (no 404s) ------------------- */
const imageModules = import.meta.glob(
  "/src/assets/images/*.{jpg,jpeg,png,webp}",
  { eager: true, as: "url" }
);

// Build prefix -> [urls] (sorted by numeric suffix)
const imageMap = Object.entries(imageModules).reduce((acc, [path, url]) => {
  const file = path.split("/").pop() || "";
  const base = file.replace(/\.[^.]+$/, "");
  const prefix = (base.split("_")[0] || base).toLowerCase();
  (acc[prefix] ??= []).push(url);
  return acc;
}, {});

// Helper: extract trailing _### before extension
function extractNum(u) {
  const m = u.match(/_(\d+)(?:\.[a-z]+)?$/i);
  return m ? parseInt(m[1], 10) : 0;
}
for (const k in imageMap) {
  imageMap[k].sort((a, b) => extractNum(a) - extractNum(b));
}

function slidesFor(prefix) {
  return imageMap[prefix?.toLowerCase()] ?? [];
}
function firstSlideFor(prefix) {
  const arr = slidesFor(prefix);
  return arr.length ? arr[0] : null;
}

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
    { key: "covers", title: "Pool Covers", prefix: "covers" },
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
        "We handle every aspect of pool remodeling, from surface to structure. Our resurfacing and replastering services include standard plaster, quartz, and premium pebble finishes that bring fresh beauty and long-lasting durability to your pool. We also refresh or replace tile and coping, and repair expansion joint mastic to keep your pool deck safe and protected. If your pool has deeper issues, we offer full restructuring to address cracks, leaks, and other structural concerns. We can also upgrade your equipment—pumps, filters, heaters, automation, and lighting—to make your system more efficient and easier to manage. Every remodel is finished with a careful water-balance startup, ensuring your new surface is protected from day one. For a personal touch, we install custom additions such as tanning ledges, water features, and diving boards. These features can transform your pool into a space that’s not just restored, but completely reimagined.",
      tile:
        "We specialize in waterline and accent tile replacement or repair, using chemical-resistant materials designed to withstand the harsh pool environment. Every job starts with precise substrate preparation and proper expansion control, ensuring a flawless installation that lasts. Whether you’re restoring worn or damaged tile or upgrading to a fresh new look, we provide a wide selection of styles to match your design. We also create custom tile layouts and accents, giving you the freedom to add a unique, personalized touch to your pool. Our attention to detail means your tile isn’t just repaired—it’s transformed into a feature that enhances the beauty and durability of your pool for years to come.",
      features:
        "We install custom water and lighting features that bring movement, sound, and atmosphere to your pool. Options include sheer descents, scuppers, bubblers, deck jets, grottos, rockwork, and accent lighting—all designed with proper flow, balanced noise levels, and long-term durability in mind. These features don’t just add beauty; they create a resort-style experience right in your backyard.",
      rails:
        "We provide core-drilled stainless steel rails and safety fencing to enhance both accessibility and protection around your pool. Every installation uses heavy-duty epoxy anchors and precise, code-compliant placement, ensuring safe, secure, and elegant access that lasts for years.",
      turf:
        "We install premium low-maintenance turf systems that transform the space around your pool into a clean, green, and usable surface all year long. Every installation is built on a proper drainage base to prevent standing water and maintain long-term performance. For comfort, we offer cool-touch turf options that stay softer and cooler under the sun, even on the hottest days. To ensure a polished look, we finish with precise edging and resilient seams that hold up against foot traffic, weather, and poolside activity.",
      covers:
        "We offer both automatic and manual pool covers custom-sized to fit your pool perfectly. Covers not only keep debris out but also provide measurable energy savings by reducing heat loss and evaporation. Our systems are built with safety-first hardware to give you peace of mind while protecting your investment.",
    }),
    []
  );

  // Expand state + FLIP source rect
  const [expandedKey, setExpandedKey] = useState(null);
  const [fromRect, setFromRect] = useState(null);
  const cardRefs = useRef({}); // key -> element
  const whatRef = useRef(null); // "What we do" section anchor

  // Scroll to "What we do" first, then open (helps phones)
  const handleOpen = (key) => {
    const openNow = () => {
      const el = cardRefs.current[key];
      if (!el) { setExpandedKey(key); return; }
      const r = el.getBoundingClientRect();
      setFromRect({ x: r.x, y: r.y, w: r.width, h: r.height });
      setExpandedKey(key);
    };

    if (whatRef.current) {
      try {
        whatRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(openNow, 350);
      } catch {
        openNow();
      }
    } else {
      openNow();
    }
  };

  const handleClose = () => setExpandedKey(null);

  return (
    <div style={{ fontFamily: "Oswald, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#1a2b3c", margin: 0 }}>
      <style>{css}</style>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__text">
            Take a listen to The Deep End Pool Podcast!
          </div>
          <a
            className="topbar__btn"
            href="https://thedeependpoolpodcast.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check out our podcast"
          >
            Check out our podcast
          </a>
        </div>
      </div>

      {/* HERO */}
      <header className="hero fade-on-view">
        <img className="hero-img" src="/images/topimage.png" alt="Deep End Pool Solutions" />
        <div className="hero-subtitle">Serving the Dallas/Fort Worth Market</div>

        {/* Yellow strip with financing line ABOVE the title */}
        <div className="hero-strip">
          <div className="container">
            <div className="strip-subtitle">
              Financing possible through Lyon Financial<br />
              <a
                href="https://www.lyonfinancial.net/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply today with Lyon Financial"
              >
                Apply today!
              </a>
            </div>
            <div className="strip-title">Here’s what we do…</div>
          </div>
        </div>
      </header>

      {/* WHAT WE DO (looping background video) */}
      <section ref={whatRef} className="section section--video fade-on-view">
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

      {/* Divider ABOVE Additional Resources */}
      <div className="section-divider" role="separator" aria-hidden="true"></div>

      {/* ======= ADDITIONAL RESOURCES (above Contact) ======= */}
      <section className="section section--resources fade-on-view" id="resources">
        {/* Background video */}
        <div className="resources-video-bg" aria-hidden="true">
          <video
            className="resources-video-bg__media"
            src="/videos/bubbles.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="resources-video-bg__scrim" />
        </div>

        {/* Foreground content */}
        <div className="container">
          <AdditionalResources />
        </div>
      </section>

      {/* Divider between resources and contact */}
      <div className="section-divider" role="separator" aria-hidden="true"></div>

      {/* CONTACT — plain centered lines */}
      <section className="contact-section fade-on-view" id="contact">
        <div className="container">
          <h2 className="contact-title">Contact us</h2>

          <div className="contact-lines">
            <div className="contact-block">
              <div className="contact-label">E-mail:</div>
              <a className="contact-value" href="mailto:deepend.service@deependpoolsolutions.com">
                deepend.service@deependpoolsolutions.com
              </a>
            </div>

            <div className="contact-block">
              <div className="contact-label">Phone:</div>
              <a className="contact-value" href="tel:+18175643400">
                817&nbsp;564&nbsp;3400
              </a>
            </div>

            <p className="contact-note">
              Contact us with your inquiry and we'll help you on your project journey!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------- GRID CARD (gradient on card, white stroke) ------------------- */
function ServiceCard({ data, theme, refFn, hidden, onOpen }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setPreview(firstSlideFor(data.prefix || data.key));
  }, [data.prefix, data.key]);

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
              top: 0, left: 0, right: 0, bottom: 0,
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

/* ------------------- Resources Cards (fixed-size; sliding cover only) ------------------- */
function ResourceCard({ title, body, prefix, tint = ["#0b63c8", "#13909e"], active, setActive }) {
  const [img, setImg] = useState(null);
  useEffect(() => setImg(firstSlideFor(prefix)), [prefix]);

  const isOpen = active === prefix;
  const toggle = () => setActive((k) => (k === prefix ? null : prefix));
  const keyToggle = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <article
      className={`rcard ${isOpen ? "rcard--open" : ""}`}
      onClick={toggle}
      onKeyDown={keyToggle}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-label={`${title} details`}
    >
      {/* Full-card image */}
      <div className="rcard__media" aria-hidden="true">
        {img ? <img src={img} alt="" /> : <div className="rcard__ph">Image coming soon</div>}
        <div className="rcard__tint" style={{ background: `linear-gradient(135deg, ${tint[0]}, ${tint[1]})` }} />
      </div>

      {/* Sliding black cover with angled flair (pseudo-element draws the angle) */}
      <div className="rcard__cover">
        <h4 className="rcard__title">{title}</h4>
        <p className="rcard__text">{body}</p>
      </div>
    </article>
  );
}

function AdditionalResources() {
  const [active, setActive] = useState(null);

  const items = [
    {
      title: "Repair",
      key: "repair",
      text:
        "Trouble with your pool equipment? No problem! Our expert repair team specializes in all types of pool equipment — from pumps, filters, and heaters to automation systems and more. Whether it’s a small fix or a major breakdown, we’ll diagnose the issue quickly and get your pool running smoothly again so you can enjoy a hassle-free swim season.",
      tint: ["#0b63c8", "#13909e"], // blue → teal
    },
    {
      title: "Retail",
      key: "retail",
      text:
        "If you're looking for chemicals, parts, or pool toys, we’ve got you covered! Our retail department is fully stocked with top-quality products to keep your pool crystal clear, safe, and fun. We offer free water testing every day. Visit us at any of our four convenient locations in North Richland Hills, Roanoke, Lantana, or Flower Mound to experience the difference in person.",
      tint: ["#13909e", "#22c1d6"], // teal → aqua
    },
    {
      title: "Maintenance",
      key: "maintenance",
      text:
        "Keeping your pool healthy and inviting takes consistent care, and that’s where our maintenance team shines. From routine cleanings to full green-to-clean treatments, we make sure your pool is always ready to enjoy. Ask about our weekly service options for reliable, flexible upkeep.",
      tint: ["#0a1040", "#0b63c8"], // deep navy → blue
    },
  ];

  // poolwerx_logo.* should be in /src/assets/images/, prefix becomes "poolwerx"
  const pwLogo = firstSlideFor("poolwerx");

  return (
    <div className="resources">
      <h3 className="resources-title">You've reached The Deep End...</h3>

      <div className="resources-cards">
        {items.map((it) => (
          <ResourceCard
            key={it.key}
            title={it.title}
            body={it.text}
            prefix={it.key}
            tint={it.tint}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>

      <p className="resources-cta">
        For more information regarding your Retail/Repair/Maintenance needs:<br />
        <a
          className="resources-cta-link"
          href="https://www.poolwerx.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Click here for more information regarding Retail, Repair, and Maintenance"
        >
          poolwerx.com
        </a>
        <br />
         <span className="resources-cta-sub">972-962-9119</span>
         <br />
         <span className="resources-cta-sub">deepend@poolwerx.com</span>
      </p>

      {/* Powered by Poolwerx (centered, with local frosted chip to improve visibility) */}
      <div className="poweredby">
        <div className="poweredby__text">Powered by:</div>
        {pwLogo ? (
          <div className="poweredby__chip">
            <img className="poweredby__logo" src={pwLogo} alt="Poolwerx" />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* --------------- EXPANDED FLIP OVERLAY --------------- */
function ExpandedFLIP({ service, theme, summary, fromRect, onClose }) {
  const wrapRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [idx, setIdx] = useState(0);
  const rotRef = useRef(null);

  useEffect(() => {
    const urls = slidesFor(service.prefix);
    setSlides(urls.length ? urls : []);
  }, [service.prefix]);

  useEffect(() => {
    if (!slides.length) return;
    rotRef.current = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3500);
    return () => { if (rotRef.current) clearInterval(rotRef.current); };
  }, [slides]);

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

    const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canAnimate = "animate" in node && !prefersReduce;

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

    const prefersReduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canAnimate = "animate" in node && !prefersReduce;

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
          {slides.length > 0 ? (
            <div className="slider">
              <ul className="slider__track" style={{ transform: `translate3d(${-idx * 100}%,0,0)` }}>
                {slides.map((src, i) => (
                  <li className="slider__slide" key={`${src}-${i}`}>
                    <img src={src} alt={`${service.title} ${i + 1}`} />
                  </li>
                ))}
              </ul>
              <button className="nav prev" aria-label="Previous" onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)}>&#10094;</button>
              <button className="nav next" aria-label="Next" onClick={() => setIdx((i) => (i + 1) % slides.length)}>&#10095;</button>
            </div>
          ) : (
            <div className="slider" style={{ display: "grid", placeItems: "center", padding: 16 }}>
              <div className="slider__slide" style={{ width: "100%" }}>
                <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", aspectRatio: "16/9", background: "#eef3f8", color: "#4a5b6a" }}>
                  No images available
                </div>
              </div>
            </div>
          )}

          {/* Scrollable text (white background) */}
          <div className="expanded__text" style={{ background: "#fff", color: "#1a2b3c" }}>
            <p>{summary}</p>
            <p style={{ color: "#607185" }}>
              Images show examples of our work; your project may vary. Please contact us with an inquiry. We accommodate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------- INLINE CSS ------------------- */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300..700&display=swap');

:root{
  --container: 1180px;
  --border: rgba(0,0,0,.10);

  --bg: #ffffff;
  --fg: #1a2b3c;

  --strip: #e6d87a;           /* yellow bar */
  --strip-border: #1c5aa3;

  --hero-bg: #f3f4f6;
  --hero-max-w: 500px;

  --expanded-border: rgba(0,0,0,.12);
  --expanded-shadow: 0 18px 40px rgba(0,0,0,.18);

  --topbar-bg-1: #0c1550;
  --topbar-bg-2: #0a1040;
  --brand-blue: #0b63c8;
  --brand-deep: #091728;
  --brand-navy: #0a1040;
  --brand-teal: #13909e;

  --cover-closed: clamp(56px, 7.2vw, 74px); /* just big enough for title */
  --cover-open: 78%;

  --cover-bg: linear-gradient(180deg, rgba(9,23,40,.92), rgba(9,23,40,.96));
  --text-soft: #d8e6f3;
}

*{box-sizing:border-box}
html,body,#root{height:100%}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:var(--bg);
  color:var(--fg);
  font-family: 'Oswald', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

.container{ max-width: var(--container); margin:0 auto; padding:0 20px }

/* =============== TOPBAR =============== */
.topbar{
  background: linear-gradient(180deg, var(--topbar-bg-1), var(--topbar-bg-2));
  color:#e8efff;
  font-size: 14px;
  letter-spacing: .02em;
  border-bottom: 1px solid rgba(255,255,255,.08);
}
.topbar__inner{ position: relative; padding: 6px 0; min-height: 36px; }
.topbar__text{
  width: 100%; text-align: center; font-weight: 600; line-height: 1.2;
  padding: 6px 80px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.topbar__btn{
  position: absolute; right: 0; top: 50%; transform: translateY(-50%);
  text-decoration: none; color:#e8efff; border: 2px solid #ffffff;
  padding: 6px 10px; border-radius: 8px; font-weight: 700;
  transition: transform .12s ease, background-color .12s ease, color .12s ease, border-color .12s ease;
  background: transparent; white-space: nowrap;
}
.topbar__btn:hover{ transform: translateY(calc(-50% - 1px)); background: rgba(255,255,255,.06); border-color:#fff; }
@media (max-width: 560px){
  .topbar__inner{ padding: 8px 0 44px; }
  .topbar__text{ padding: 6px 10px; }
  .topbar__btn{ right: 10px; left: 10px; top: auto; bottom: 6px; transform: none; text-align:center; }
}

/* HERO */
.hero{ margin:0; padding:20px 0 0; background: var(--hero-bg); text-align:center }
.hero-img{ width:100%; max-width: var(--hero-max-w); height:auto; display:inline-block; margin:0 auto }
.hero-subtitle { text-align:center; margin:12px 0 16px; font-size: clamp(18px, 2.8vw, 24px); font-weight:600; color:#067796; }

/* Yellow strip with financing line ABOVE the title */
.hero-strip{ position: relative; background: var(--strip); border-top:4px solid var(--strip-border); }
.hero-strip > .container{ display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 10px 20px 12px; gap: 6px; }
.strip-title{ font-size: clamp(18px, 2.6vw, 22px); font-weight: 800; color: var(--brand-teal); }
.strip-subtitle{ text-align:center; font-size: clamp(14px, 2.2vw, 18px); font-weight: 600; color: #0f2732; line-height: 1.2; }
.strip-subtitle a{ color:#c1121f; text-decoration: underline; font-style: italic; font-weight: 700; }

/* Sections */
.section{ position:relative; padding: clamp(22px, 5vw, 56px) 0 }

/* Section video bg */
.section--video{ overflow:hidden }
.video-bg{ position:absolute; inset:0; z-index:0 }
.video-bg__media{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter: brightness(.95) saturate(1.05); }
.video-bg__scrim{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.88) 60%, rgba(255,255,255,1)); }
.section--video > .container{ position:relative; z-index:1 }

/* Divider */
.section-divider{ border-top: 4px solid var(--brand-blue); width: 100%; margin: 0; }

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
.service__title{ padding:12px 14px; font-weight:800; color:#fff }

/* ----------- FLIP Overlay ----------- */
.expanded-overlay{ position: fixed; inset:0; display:grid; align-items:start; justify-items:center; padding: clamp(10px, 4vh, 24px) 12px; background: rgba(0,0,0,.28); backdrop-filter: blur(6px); z-index: 50; pointer-events:none; }
.expanded{ width: min(1100px, 96vw); border:1px solid var(--expanded-border); border-radius:12px; box-shadow: var(--expanded-shadow); overflow:hidden; position:relative; pointer-events:auto; }
@media (max-width: 560px){ .expanded{ width:100%; border-radius:10px; } }
.close{ position:absolute; top:10px; right:12px; width:40px; height:40px; border:none; border-radius:10px; cursor:pointer; background:#eef1f6; color:#111; font-size:26px; line-height:40px; text-align:center; transition: background .18s ease, transform .18s ease; }
.close:hover{ background:#e5e9f1; transform: translateY(-1px) }
.expanded__header{ padding:14px 14px 8px }
.expanded__header h3{ margin:0; font-size: clamp(18px, 2.6vw, 26px) }
.expanded__content{ display:grid; grid-template-columns: 1.25fr 1fr; gap:14px; padding: 8px 14px 14px; }
@media(max-width:900px){ .expanded__content{ grid-template-columns: 1fr } }
.slider{ position:relative; overflow:hidden; border:1px solid var(--border); border-radius:8px; background:#0b111c10 }
.slider__track{ display:flex; margin:0; padding:0; list-style:none; transition: transform .35s ease }
.slider__slide{ min-width:100%; aspect-ratio:16/9; background:#f1f5fb; position:relative }
.slider__slide img{ width:100%; height:100%; object-fit:cover; display:block }
.nav{ position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,0,0,.45); color:#fff; border:none; width:36px; height:36px; border-radius:50%; cursor:pointer; }
.nav:hover{ background:rgba(0,0,0,.65) }
.prev{ left:8px } .next{ right:8px }
.expanded__text{ border:1px solid var(--border); border-radius:8px; padding:12px; max-height: 360px; overflow:auto; background:#fff; }
@media (max-width: 560px){ .expanded__text{ max-height: 320px; } }
.expanded__text p{ margin:0 0 10px; line-height:1.55 }

/* ------------------- CONTACT SECTION (plain centered) ------------------- */
.contact-section{ background: var(--strip); border-top: 4px solid var(--strip-border); padding: clamp(36px, 6vw, 72px) 0; }
.contact-title{ margin:0 0 14px; font-size: clamp(24px,3.2vw,34px); color:#0f2732; text-align:center; }
.contact-lines{ max-width: 720px; margin: 0 auto; text-align:center; padding: 0 8px; }
.contact-block{ margin: 10px auto 14px; }
.contact-label{ display:block; font-weight:700; color:#0f2732; margin-bottom:6px; font-size: clamp(18px, 2.6vw, 20px); }
.contact-value{ display:block; text-decoration:none; border-bottom: 1px dashed rgba(15,39,50,.25); color:#0f2732; font-weight:700; font-size: clamp(18px, 2.6vw, 22px); margin:0 auto; width:fit-content; }
.contact-value:hover{ border-bottom-color: rgba(15,39,50,.55) }
.contact-note{ margin-top:6px; color:#2f4750; font-size: clamp(14px, 2vw, 16px); }

/* -------- Additional Resources (CARD GRID) -------- */
.section--resources{ position:relative; overflow:hidden; }
.resources-video-bg{ position:absolute; inset:0; z-index:0; }
.resources-video-bg__media{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter: brightness(1) saturate(1.05); }
.resources-video-bg__scrim{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(255,255,255,.2), rgba(255,255,255,.38)); }
.section--resources > .container{ position:relative; z-index:1; }
@media (prefers-reduced-motion: reduce){ .resources-video-bg__media{ display:none; } }

.resources-title{ text-align:center; color:#0f2732; font-size: clamp(20px, 2.8vw, 26px); margin: 0 0 18px; font-weight:800; }

/* Card grid */
.resources-cards{ display:grid; gap: clamp(16px, 2.2vw, 24px); grid-template-columns: repeat(3, 1fr); }
@media (max-width: 1050px){ .resources-cards{ grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px){ .resources-cards{ grid-template-columns: 1fr; } }

/* Card (fixed size; only cover animates) */
.rcard{
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,.16);
  box-shadow: 0 12px 30px rgba(0,0,0,.18);
  background:#0f1118;
  color:#e6eef8;
  cursor:pointer;
  transition: transform .18s ease, box-shadow .18s ease;
  outline:none;
  height: clamp(260px, 38vw, 360px); /* fixed card height */
}
.rcard:hover{ transform: translateY(-3px); box-shadow: 0 16px 36px rgba(0,0,0,.22); }
.rcard:focus-visible{ box-shadow: 0 0 0 3px #7dd3fc, 0 12px 30px rgba(0,0,0,.22); }

/* Full image behind */
.rcard__media{ position:absolute; inset:0; z-index:0; overflow:hidden; }
.rcard__media img{ width:100%; height:100%; object-fit:cover; display:block; filter: contrast(1.05) saturate(1.08); }
.rcard__ph{ display:grid; place-items:center; height:100%; color:#9fb3c8; background:#1e2736; font-weight:700; }
.rcard__tint{ position:absolute; inset:0; opacity:.48; mix-blend-mode: screen; }

/* Sliding black cover (with angled flair drawn by ::before) */
.rcard__cover{
  position:absolute; left:0; right:0; bottom:0;
  height: var(--cover-closed);
  background: var(--cover-bg);
  border-top: 1px solid rgba(255,255,255,.08);
  padding: 14px 18px 16px;
  z-index:1;
  transition: height .28s ease;
  will-change: height;
}
.rcard__cover::before{
  content:"";
  position:absolute; left:0; right:0; top:-28px; height:32px;
  background: var(--cover-bg);
  border-top: 1px solid rgba(255,255,255,.08);
  clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%); /* angled flair */
}
.rcard:hover .rcard__cover,
.rcard--open .rcard__cover{ height: var(--cover-open); }

/* Title sits safely below the angled flair */
.rcard__title{
  margin: 2px 0 8px;
  font-size: clamp(18px, 2.4vw, 20px);
  font-weight: 800;
  letter-spacing: .2px;
  color:#fff;
  transition: transform .22s ease, color .22s ease;
}
.rcard:hover .rcard__title,
.rcard--open .rcard__title{
  transform: translateY(-2px);
  color:#ffffff;
}

/* Text reveal inside the cover (card doesn't resize) */
.rcard__text{
  margin:0;
  color: var(--text-soft);
  line-height:1.55;
  max-height:0;
  overflow:hidden;
  opacity:0;
  transition: max-height .28s ease, opacity .22s ease;
}
.rcard:hover .rcard__text,
.rcard--open .rcard__text{
  max-height: 220px;
  opacity:1;
}

/* CTA & Powered by */
.resources-cta{ margin-top: clamp(18px, 3vw, 26px); color:#0f2732; font-weight:700; text-align:center; font-size: clamp(16px, 2.4vw, 20px); }
.resources-cta-link{ color:#fff; text-decoration: underline; font-style: italic; font-weight:700; }

.poweredby{
  margin-top: 12px;
  text-align: center;
}
.poweredby__text{
  color:#0f2732;
  font-weight: 700;
  font-size: clamp(14px, 2.2vw, 16px);
  margin-bottom: 6px;
}
/* Frosted chip only around the logo for better readability (does NOT affect video gradients) */
.poweredby__chip{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: 10px 16px;
  border-radius: 12px;
  background: rgba(255,255,255,.10);
  backdrop-filter: blur(8px) saturate(1.15);
  -webkit-backdrop-filter: blur(8px) saturate(1.15);
  box-shadow: 0 8px 24px rgba(0,0,0,.18);
}
.poweredby__logo{
  display: block;
  width: clamp(80px, 24vw, 160px);
  height: auto;
  filter: drop-shadow(0 1px 0 rgba(255,255,255,.95)) drop-shadow(0 6px 16px rgba(0,0,0,.22));
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
}
`;

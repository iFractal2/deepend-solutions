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

/* NEW: get a specific file by its exact base name, regardless of extension */
function imageByBase(baseName) {
  const target = String(baseName || "").toLowerCase();
  for (const [path, url] of Object.entries(imageModules)) {
    const file = path.split("/").pop() || "";
    const base = file.replace(/\.[^.]+$/, "").toLowerCase();
    if (base === target) return url;
  }
  return null;
}

/* ------------------- MICRO-ROUTER (supports typo + hash/query) ------------------- */
function pathToPage(pathname, hash = window.location.hash, search = window.location.search) {
  const p = (pathname || "").toLowerCase();
  const h = (hash || "").toLowerCase();
  const q = (search || "").toLowerCase();
  const winterPaths = [
    "/understanding-winter-chemistry",
    "/understanding-winter-chemisty", // common typo
  ];
  const isWinter =
    winterPaths.some((s) => p.includes(s) || h.includes(s)) ||
    q.includes("page=winter") ||
    q.includes("winter");
  return isWinter ? "winter" : "home";
}
function pageToPath(page) {
  return page === "winter" ? "/understanding-winter-chemistry" : "/";
}

export default function App() {
  // Which page are we on?
  const [page, setPage] = useState(() => pathToPage(window.location.pathname));

  // Keep Back/Forward and hash-navigation working
  useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname));
    const onHash = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  // Optional programmatic nav (no visible buttons)
  const navigate = (to) => {
    const nextPath = pageToPath(to);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ page: to }, "", nextPath);
    }
    setPage(to);
  };

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
        "We handle every aspect of pool remodeling, from surface to structure. Our resurfacing and replastering services include standard plaster, quartz, and premium pebble finishes...",
      tile:
        "We specialize in waterline and accent tile replacement or repair, using chemical-resistant materials designed to withstand the harsh pool environment...",
      features:
        "We install custom water and lighting features that bring movement, sound, and atmosphere to your pool...",
      rails:
        "We provide core-drilled stainless steel rails and safety fencing to enhance both accessibility and protection around your pool...",
      turf:
        "We install premium low-maintenance turf systems that transform the space around your pool into a clean, green, and usable surface all year long...",
      covers:
        "We offer both automatic and manual pool covers custom-sized to fit your pool perfectly...",
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

  /* --------- PAGE SWITCH --------- */
  if (page === "winter") {
    return <WinterChemistryPage />;
  }

  /* --------- HOME PAGE (original content) --------- */
  return (
    <div style={{ fontFamily: "Oswald, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#1a2b3c", margin: 0 }}>
      <style>{css}</style>

      {/* TOPBAR */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__text">
            Take a listen to The Deep End Pool Podcast!
          </div>
          <div className="topbar__buttons">
            <a
              className="topbar__btn"
              href="https://thedeependpoolpodcast.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out our podcast"
            >
              Our Podcast
            </a>
            <a
              className="topbar__btn"
              href="https://www.youtube.com/@deependfrank/featured"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Check out our YouTube channel"
            >
              Our YouTube
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="hero fade-on-view">
        <img className="hero-img" src="/images/topimage.png" alt="Deep End Pool Solutions" />
        <div className="hero-subtitle">Serving the Dallas/Fort Worth Market</div>

        {/* Yellow strip with LSI calculator button ABOVE the title */}
        <div className="hero-strip">
          <div className="container">
            <a
              href="/LSIcalc.html"
              className="lsi-calc-button"
              aria-label="Calculate your pool's LSI"
            >
              Calculate Your Pool's LSI
            </a>
            <div className="strip-phone">
              <div className="strip-phone-text">Call us for a free estimate!</div>
              <a href="tel:+18175643400" className="strip-phone-number">
                817-564-3400
              </a>
            </div>
            <div className="strip-title">Here's what we do…</div>
          </div>
        </div>
      </header>

      {/* Divider below hero strip */}
      <div className="section-divider" role="separator" aria-hidden="true"></div>

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
        <AdditionalResources />
      </section>

      {/* Divider between resources and contact */}
      <div className="section-divider" role="separator" aria-hidden="true"></div>

      {/* CONTACT — plain centered lines */}
      <section className="contact-section fade-on-view" id="contact">
        <div className="container">
          <h2 className="contact-title">Contact us</h2>

          {/* Facebook Section */}
          <div className="facebook-section">
            <h3 className="facebook-title">Join Our Pool Community!</h3>
            <p className="facebook-description">
              Connect with other pool owners, get expert tips, and stay updated with the latest pool care advice.
            </p>
            <a
              href="https://www.facebook.com/groups/760287595187311/"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-button"
              aria-label="Join our Facebook group"
            >
              <svg className="facebook-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Join the DFW Pool Owners Group
            </a>
          </div>

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

/* ------------------- WINTER PAGE (top card + search hero) ------------------- */
function WinterChemistryPage() {
  const lsiBg = imageByBase("lsi_bg"); // supports any extension in /src/assets/images
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just open mail with the query prefilled. You can wire this to real search later.
    const subject = encodeURIComponent("Pool Issue: " + (query || "Help with winter chemistry"));
    const body = encodeURIComponent(
      `Describe your issue (photos welcome):\n\n${query}\n\nMy contact info:\n- Name:\n- Phone:\n- City:\n`
    );
    window.location.href = `mailto:deepend.service@deependpoolsolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ fontFamily: "Oswald, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#112434", background: "#ffffff" }}>
      <style>{css}</style>

      {/* Banner */}
      <section className="winter-hero">
        <div className="winter-hero__bg" />
        <div className="container winter-hero__inner">
          <h1 className="winter-hero__title">Deep End Support</h1>
          <p className="winter-hero__dek">
            Tell us what’s going on, and we’ll guide you to a fix.
          </p>
        </div>
      </section>

      {/* Lead visual — supports lsi_bg.* with a soft blur */}
      <div className="container winter-lead fade-on-view">
        <figure className="winter-lead__figure">
          <div className="winter-lead__img" role="img" aria-label="Winter chemistry visual">
            {lsiBg ? (
              <img className="winter-lead__photo" src={lsiBg} alt="LSI background" />
            ) : null}
            <div className="winter-lead__scrim" />
          </div>
          <figcaption className="winter-lead__cap">
            Recently had your water tested? Get a free comprehensive analysis right at home!
          </figcaption>
        </figure>
      </div>

      {/* NEW: Centered prompt + search bar */}
      <section className="container winter-search fade-on-view">
        <h2 className="winter-search__headline">What&apos;s your problem!?</h2>
        <p className="winter-search__sub">We can help...</p>

        <form className="winter-search__form" onSubmit={onSubmit} role="search" aria-label="Describe your pool issue">
          <div className="winter-search__field">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., pH keeps drifting up, heater scaling, plaster dust, metals, cloudy water..."
              aria-label="Describe your issue"
            />
            <button type="submit" aria-label="Send">
              Get help
            </button>
          </div>
          <div className="winter-search__chips" aria-hidden="true">
            <span onClick={() => setQuery("Low LSI / etching risk in cold water")}>LSI/etching</span>
            <span onClick={() => setQuery("White scale forming on tile line or heater")}>Scale</span>
            <span onClick={() => setQuery("SWG stopped producing chlorine in cold temps")}>SWG & cold</span>
            <span onClick={() => setQuery("How to set pH/TA/CH for winter balance")}>Target levels</span>
            <span onClick={() => setQuery("Stain or metal issues over the winter")}>Stains/Metals</span>
          </div>
        </form>
      </section>

      <footer className="winter-footer">
        <div className="container winter-footer__inner">
          <p className="winter-footer__txt">
            Prefer to chat? Email <a href="mailto:deepend.service@deependpoolsolutions.com">deepend.service@deependpoolsolutions.com</a> or call <a href="tel:+18175643400">817-564-3400</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ------------------- GRID CARD (gradient on card, white stroke) ------------------- */
function ServiceCard({ data, theme, refFn, hidden, onOpen }) {
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setPreview(firstSlideFor(data.prefix || data.key));
  }, [data.prefix, data.key]);

  return (
    <a
      className={`service ${hidden ? "service--hidden" : ""}`}
      href="#"
      ref={refFn}
      onClick={(e) => { e.preventDefault(); onOpen(); }}
      aria-label={`Open ${data.title}`}
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
        {/* Gradient overlay on image */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          background: `linear-gradient(to top, ${theme.end}f0 0%, ${theme.end}cc 30%, transparent 100%)`,
          zIndex: 1,
        }}></div>
      </div>
      <div
        className="service__title"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: "18px 20px",
          fontWeight: 800,
          color: "#fff",
          textShadow: "0 2px 8px rgba(0,0,0,.5), 0 1px 3px rgba(0,0,0,.3)",
          fontSize: "clamp(17px, 2.6vw, 22px)",
          background: "linear-gradient(to top, rgba(0,0,0,.4) 0%, rgba(0,0,0,.2) 100%)",
          backdropFilter: "blur(8px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>{data.title}</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity: 0.9,
            transition: "transform 0.3s ease",
          }}
          className="service__arrow"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
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

      {/* Sliding black cover with angled flair */}
      <div className="rcard__cover">
        <h4 className="rcard__title">{title}</h4>
        <p className="rcard__text">{body}</p>
      </div>
    </article>
  );
}

function AdditionalResources() {
  const [active, setActive] = useState(null);
  const bubbleContainerRef = useRef(null);
  const cursorBubblesRef = useRef([]);

  // ORDER: Retail, Repair, Maintenance
  const items = [
    {
      title: "Retail",
      key: "retail",
      text:
        "If you're looking for chemicals, parts, or pool toys, we've got you covered! Our retail department is fully stocked with top-quality products...",
      tint: ["#13909e", "#22c1d6"],
    },
    {
      title: "Repair",
      key: "repair",
      text:
        "Trouble with your pool equipment? No problem! Our expert repair team specializes in all types of pool equipment...",
      tint: ["#0b63c8", "#13909e"],
    },
    {
      title: "Maintenance",
      key: "maintenance",
      text:
        "Keeping your pool healthy and inviting takes consistent care, and that's where our maintenance team shines...",
      tint: ["#0a1040", "#0b63c8"],
    },
  ];

  // Ambient bubbles effect
  useEffect(() => {
    const container = bubbleContainerRef.current;
    if (!container) return;

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'ambient-bubble';

      // Random size between 30px and 80px (much larger)
      const size = Math.random() * 50 + 30;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random horizontal position
      const startX = Math.random() * 100;
      bubble.style.left = `${startX}%`;

      // Random horizontal drift
      const drift = (Math.random() - 0.5) * 80; // -40 to 40
      bubble.style.setProperty('--drift', `${drift}px`);

      // Random animation duration between 4-8 seconds
      const duration = Math.random() * 4 + 4;
      bubble.style.animationDuration = `${duration}s`;

      // Random opacity
      const opacity = Math.random() * 0.35 + 0.15;
      bubble.style.opacity = opacity;

      container.appendChild(bubble);

      // Remove bubble after animation completes
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.remove();
        }
      }, duration * 1000);
    };

    // Create initial bubbles with stagger (increased to 35)
    for (let i = 0; i < 35; i++) {
      setTimeout(() => createBubble(), i * 150);
    }

    // Continuously create new bubbles (very frequent - every 300ms)
    const interval = setInterval(createBubble, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Cursor trail bubbles
  useEffect(() => {
    const container = bubbleContainerRef.current;
    if (!container) return;

    let lastTime = 0;
    const throttleDelay = 40; // Create bubbles every 40ms (increased frequency)

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only create bubbles if cursor is within container
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      // Create 2-3 bubbles per mouse move for denser trail
      const bubblesCount = Math.floor(Math.random() * 2) + 2; // 2 or 3 bubbles

      for (let i = 0; i < bubblesCount; i++) {
        // Create small cursor bubble
        const bubble = document.createElement('div');
        bubble.className = 'cursor-bubble';

        const size = Math.random() * 6 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        // Slight offset from cursor position for variety
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        bubble.style.left = `${x + offsetX}px`;
        bubble.style.top = `${y + offsetY}px`;

        // Random drift for each bubble
        const randomX = Math.random();
        const randomY = Math.random();
        bubble.style.setProperty('--random-x', randomX);
        bubble.style.setProperty('--random-y', randomY);

        container.appendChild(bubble);
        cursorBubblesRef.current.push(bubble);

        // Remove after animation (1.5s)
        setTimeout(() => {
          if (bubble.parentNode) {
            bubble.remove();
          }
          cursorBubblesRef.current = cursorBubblesRef.current.filter(b => b !== bubble);
        }, 1500);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      cursorBubblesRef.current.forEach(b => {
        if (b.parentNode) b.remove();
      });
      cursorBubblesRef.current = [];
    };
  }, []);

  // poolwerx_logo.* should be in /src/assets/images/, prefix becomes "poolwerx"
  const pwLogo = firstSlideFor("poolwerx");

  return (
    <div className="resources" ref={bubbleContainerRef}>
      <div className="container">
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
           <a href="tel:+19729629119" className="resources-cta-sub" style={{ textDecoration: 'none', color: 'inherit' }}>972-962-9119</a>
           <br />
           <a href="mailto:deepend@poolwerx.com" className="resources-cta-sub" style={{ textDecoration: 'none', color: 'inherit' }}>deepend@poolwerx.com</a>
        </p>

        {/* Visit Our Locations */}
        <div className="locations-section">
          <h3 className="locations-title">Come visit one of our locations!</h3>
          <div className="locations-buttons">
            <a
              href="https://share.google/xGXV4dUcI8H6hXbDe"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              North Richland Hills
            </a>
            <a
              href="https://share.google/qS8aTDJFJ1t4ETdpn"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              Roanoke
            </a>
            <a
              href="https://share.google/56BInjZxxwXl6ow54"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              Lantana
            </a>
            <a
              href="https://share.google/95HyIZKhxfc67PTFt"
              target="_blank"
              rel="noopener noreferrer"
              className="location-btn"
            >
              Flower Mound
            </a>
          </div>
        </div>

        {/* Powered by Poolwerx */}
        <div className="poweredby">
          <div className="poweredby__text">Powered by:</div>
          {pwLogo ? (
            <div className="poweredby__chip">
              <img className="poweredby__logo" src={pwLogo} alt="Poolwerx" />
            </div>
          ) : null}
        </div>
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const urls = slidesFor(service.prefix);
    setSlides(urls.length ? urls : []);
  }, [service.prefix]);

  useEffect(() => {
    if (!slides.length) return;
    rotRef.current = setInterval(() => setIdx((i) => (i + 1) % slides.length), 3500);
    return () => { if (rotRef.current) clearInterval(rotRef.current); };
  }, [slides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setIdx((i) => (i - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setIdx((i) => (i + 1) % slides.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, onClose]);

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
      // Backdrop fade-in with blur
      node.animate(
        [
          { opacity: 0, backdropFilter: "blur(0px)" },
          { opacity: 1, backdropFilter: "blur(10px)" }
        ],
        { duration: 400, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" }
      );

      // FLIP transform animation
      node.style.transformOrigin = "top left";
      const cardNode = node.querySelector('.expanded');
      if (cardNode) {
        cardNode.animate(
          [
            {
              transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
              opacity: 0.8,
              borderRadius: '16px'
            },
            {
              transform: "translate(0, 0) scale(1, 1)",
              opacity: 1,
              borderRadius: '16px'
            }
          ],
          { duration: 450, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" }
        );
      } else {
        node.animate(
          [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: "translate(0, 0) scale(1, 1)" }],
          { duration: 450, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "both" }
        );
      }
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
      // Backdrop fade-out with blur
      node.animate(
        [
          { opacity: 1, backdropFilter: "blur(10px)" },
          { opacity: 0, backdropFilter: "blur(0px)" }
        ],
        { duration: 300, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "forwards" }
      );

      // Card zoom-out and fade
      const cardNode = node.querySelector('.expanded');
      if (cardNode) {
        cardNode.animate(
          [
            { transform: "scale(1)", opacity: 1 },
            { transform: "scale(0.95)", opacity: 0 }
          ],
          { duration: 300, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "forwards" }
        ).finished.finally(onClose).catch(onClose);
      } else {
        node.style.transformOrigin = "top left";
        node.animate(
          [{ transform: "translate(0,0) scale(1,1)" }, { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }],
          { duration: 300, easing: "cubic-bezier(0.4, 0, 1, 1)", fill: "forwards" }
        ).finished.finally(onClose).catch(onClose);
      }
    } else {
      node.classList.remove("flip-fallback-in--play");
      setTimeout(onClose, 220);
    }
  };

  return (
    <div
      ref={wrapRef}
      className="expanded-overlay"
      onClick={(e) => {
        // Close if clicking on the overlay background
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        className="expanded"
        style={{
          background: `linear-gradient(160deg, ${theme.start} 0%, ${theme.end} 100%)`,
          color: "#fff",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" aria-label="Close" onClick={handleClose}>×</button>

        <div className="expanded__header">
          <h3>{service.title}</h3>
        </div>

        <div className="expanded__content">
          {/* Slider */}
          {slides.length > 0 ? (
            <div
              className="slider"
              data-count={`${idx + 1} / ${slides.length}`}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
              }}
              onTouchMove={(e) => {
                touchEndX.current = e.touches[0].clientX;
              }}
              onTouchEnd={() => {
                const diff = touchStartX.current - touchEndX.current;
                const threshold = 50;
                if (Math.abs(diff) > threshold) {
                  if (diff > 0) {
                    // Swipe left - next
                    setIdx((i) => (i + 1) % slides.length);
                  } else {
                    // Swipe right - previous
                    setIdx((i) => (i - 1 + slides.length) % slides.length);
                  }
                }
                touchStartX.current = 0;
                touchEndX.current = 0;
              }}
            >
              <ul className="slider__track" style={{ transform: `translate3d(${-idx * 100}%,0,0)` }}>
                {slides.map((src, i) => (
                  <li className="slider__slide" key={`${src}-${i}`}>
                    <img src={src} alt={`${service.title} ${i + 1}`} draggable="false" />
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

          {/* Scrollable text */}
          <div className="expanded__text">
            <p>{summary}</p>
            <p style={{ color: "#607185", fontSize: "clamp(13px, 1.8vw, 15px)", fontStyle: "italic" }}>
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

  --strip: #d4e8f7;
  --strip-border: #1c5aa3;

  --hero-bg: #ffffff;
  --hero-max-w: 500px;

  --expanded-border: rgba(0,0,0,.12);
  --expanded-shadow: 0 18px 40px rgba(0,0,0,.18);

  --topbar-bg-1: #0c1550;
  --topbar-bg-2: #0a1040;
  --brand-blue: #0b63c8;
  --brand-deep: #091728;
  --brand-navy: #0a1040;
  --brand-teal: #13909e;

  --cover-closed: clamp(56px, 7.2vw, 74px);
  --cover-open: 78%;

  --cover-bg: linear-gradient(180deg, rgba(9,23,40,.92), rgba(9,23,40,.96));
  --text-soft: #d8e6f3;
}

*{box-sizing:border-box}
html,body,#root{height:100%}
html{scroll-behavior:smooth}
body{
  margin:0;
  background:
    radial-gradient(1200px 700px at 15% -10%, rgba(28, 90, 163, 0.08) 0%, transparent 65%),
    radial-gradient(900px 500px at 85% 5%, rgba(19, 144, 158, 0.06) 0%, transparent 60%),
    linear-gradient(180deg, #ffffff 0%, #f8fbfd 100%);
  color:var(--fg);
  font-family: 'Oswald', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container{ max-width: var(--container); margin:0 auto; padding:0 20px }

/* =============== TOPBAR =============== */
.topbar{
  background: linear-gradient(135deg, var(--topbar-bg-1) 0%, var(--topbar-bg-2) 100%);
  color:#e8efff;
  font-size: 14px;
  letter-spacing: .02em;
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 100;
}
.topbar__inner{ position: relative; padding: 6px 0; min-height: 36px; }
.topbar__text{
  width: 100%; text-align: center; font-weight: 600; line-height: 1.2;
  padding: 6px 160px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.topbar__buttons{
  position: absolute; right: 0; top: 50%; transform: translateY(-50%);
  display: flex; gap: 8px;
}
.topbar__btn{
  text-decoration: none; color:#e8efff; border: 2px solid #ffffff;
  padding: 6px 10px; border-radius: 8px; font-weight: 700;
  transition: all .12s ease;
  background: transparent; white-space: nowrap;
}
.topbar__btn:hover{ background: rgba(255,255,255,.06); border-color:#fff; transform: translateY(-1px); }
@media (max-width: 560px){
  .topbar__inner{ padding: 8px 0 52px; }
  .topbar__text{ padding: 6px 10px; }
  .topbar__buttons{ right: 10px; left: 10px; top: auto; bottom: 6px; transform: none; justify-content: center; }
  .topbar__btn{ flex: 1; text-align:center; }
}

/* HERO */
.hero{
  margin:0;
  padding:20px 0 0;
  background: var(--hero-bg);
  text-align:center;
}
.hero-img{
  width:100%;
  max-width: var(--hero-max-w);
  height:auto;
  display:inline-block;
  margin:0 auto;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.08));
  transition: transform 0.3s ease;
}
.hero-img:hover{
  transform: scale(1.02);
}
.hero-subtitle {
  text-align:center;
  margin:12px 0 16px;
  font-size: clamp(18px, 2.8vw, 24px);
  font-weight:600;
  color:#067796;
  opacity: 0;
  animation: fadeInUp 0.6s ease 0.2s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Blue strip section */
.hero-strip{
  position: relative;
  background: linear-gradient(180deg, var(--strip) 0%, rgba(212, 232, 247, 0.7) 100%);
  border-top:4px solid var(--strip-border);
  box-shadow: 0 4px 16px rgba(28, 90, 163, 0.12);
}
.hero-strip > .container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding: 16px 20px 18px;
  gap: 8px;
}
.strip-title{
  font-size: clamp(18px, 2.6vw, 22px);
  font-weight: 800;
  color: var(--brand-teal);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}
.strip-subtitle{ text-align:center; font-size: clamp(14px, 2.2vw, 18px); font-weight: 600; color: #0f2732; line-height: 1.2; }
.strip-subtitle a{ color:#c1121f; text-decoration: underline; font-style: italic; font-weight: 700; }

/* LSI Calculator Button */
.lsi-calc-button {
  display: inline-block;
  padding: 14px 36px;
  font-size: clamp(15px, 2.2vw, 18px);
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border: none;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(30, 60, 114, 0.35), 0 2px 6px rgba(30, 60, 114, 0.2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.lsi-calc-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.lsi-calc-button:hover::before {
  left: 100%;
}

.lsi-calc-button:hover {
  background: linear-gradient(135deg, #2a5298 0%, #3a62b8 100%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 20px rgba(30, 60, 114, 0.45), 0 4px 10px rgba(30, 60, 114, 0.25);
}

.lsi-calc-button:active {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 4px 12px rgba(30, 60, 114, 0.35);
}

/* Phone Number in Strip */
.strip-phone {
  text-align: center;
  margin: 12px 0 8px;
}

.strip-phone-text {
  font-size: clamp(15px, 2.3vw, 19px);
  font-weight: 700;
  color: #c1121f;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.strip-phone-number {
  display: inline-block;
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 800;
  color: #c1121f;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 2px 8px;
  border-radius: 4px;
}

.strip-phone-number:hover {
  background: rgba(193, 18, 31, 0.1);
  transform: scale(1.05);
}

/* Sections */
.section{ position:relative; padding: clamp(22px, 5vw, 56px) 0 }

/* Section video bg */
.section--video{ overflow:hidden }
.video-bg{ position:absolute; inset:0; z-index:0 }
.video-bg__media{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter: brightness(.95) saturate(1.05); }
.video-bg__scrim{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(255,255,255,.15), rgba(255,255,255,.45) 60%, rgba(255,255,255,.7)); }
.section--video > .container{ position:relative; z-index:1 }

/* Divider */
.section-divider{
  position: relative;
  width: 100%;
  height: 6px;
  margin: 0;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--brand-blue) 20%,
    var(--brand-blue) 80%,
    transparent 100%
  );
  box-shadow: 0 2px 8px rgba(11, 99, 200, 0.25);
  overflow: hidden;
}

.section-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Fade-in */
.fade-on-view{
  opacity:0;
  transform:translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-on-view.is-visible{
  opacity:1;
  transform:translateY(0);
}

/* GRID */
.grid{
  display:grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  transition: opacity .25s ease;
}
@media(max-width:1050px){ .grid{ grid-template-columns: repeat(2, 1fr); gap: 20px; } }
@media(max-width:560px){ .grid{ grid-template-columns: 1fr; gap: 18px; } }
.grid--collapsed{ opacity:.04; pointer-events:none }

/* Modern Service Cards */
.service{
  display: block;
  text-decoration: none;
  color: inherit;
  position: relative;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 16px rgba(0,0,0,.08),
    0 2px 8px rgba(0,0,0,.04),
    0 1px 3px rgba(0,0,0,.02);
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
}

.service::before{
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(28, 90, 163, 0.04) 0%, rgba(19, 144, 158, 0.03) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  pointer-events: none;
}

.service::after{
  content: 'View Details';
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.95);
  color: #1a2b3c;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 700;
  opacity: 0;
  transform: translateY(-8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  pointer-events: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  letter-spacing: 0.3px;
}

.service:hover::before{
  opacity: 1;
}

.service:hover::after{
  opacity: 1;
  transform: translateY(0);
}

.service:hover{
  transform: translateY(-10px);
  box-shadow:
    0 20px 40px rgba(0,0,0,.12),
    0 8px 20px rgba(0,0,0,.08),
    0 4px 10px rgba(0,0,0,.04);
}

.service:active{
  transform: translateY(-8px);
  transition: all 0.15s ease;
}

.service--hidden{
  opacity:0;
  pointer-events:none;
}

.service__thumb{
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
}

.service__thumb img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(1) saturate(1.05);
}

.service:hover .service__thumb img{
  transform: scale(1.12);
  filter: brightness(1.05) saturate(1.1);
}

.service__title{
  position: relative;
  transition: all 0.3s ease;
  letter-spacing: -0.3px;
  line-height: 1.3;
}

.service:hover .service__arrow{
  transform: translateX(4px);
}

.service:hover .service__title{
  background: linear-gradient(to top, rgba(0,0,0,.5) 0%, rgba(0,0,0,.3) 100%);
}

/* Mobile optimizations for cards */
@media (max-width: 560px) {
  .service{
    border-radius: 14px;
  }

  .service::after{
    font-size: 12px;
    padding: 6px 12px;
    top: 12px;
    right: 12px;
  }

  .service__title{
    font-size: 18px !important;
  }

  .service__arrow{
    width: 20px;
    height: 20px;
  }
}

@media (hover: none) {
  /* On touch devices, show the "View Details" badge always */
  .service::after{
    opacity: 0.9;
    transform: translateY(0);
  }
}

/* ----------- FLIP Overlay ----------- */
.expanded-overlay{
  position: fixed;
  inset:0;
  display:grid;
  align-items:start;
  justify-items:center;
  padding: clamp(10px, 4vh, 24px) 12px;
  background: rgba(0,0,0,.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 50;
  pointer-events:none;
  animation: overlayFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes overlayFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
}

.expanded{
  pointer-events: auto;
  width: min(1100px, 96vw);
  border:1px solid var(--expanded-border);
  border-radius:16px;
  box-shadow: 0 20px 60px rgba(0,0,0,.25), 0 8px 24px rgba(0,0,0,.15);
  overflow:hidden;
  position:relative;
  pointer-events:auto;
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.94);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Smooth content reveal */
.expanded__header,
.expanded__content {
  animation: contentFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s backwards;
}

@keyframes contentFadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 560px){
  .expanded{
    width:100%;
    border-radius:12px;
    max-height: 90vh;
    overflow-y: auto;
  }
  .expanded__header{
    padding: 20px 20px 14px;
  }
  .expanded__content{
    padding: 20px;
    gap: 16px;
  }
}
.close{
  position: absolute;
  top: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.95);
  color: #1a2b3c;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  font-weight: 300;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.close:hover{
  background: #ffffff;
  transform: rotate(90deg) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25), 0 3px 12px rgba(0, 0, 0, 0.18);
  color: #c1121f;
}

.close:active{
  transform: rotate(90deg) scale(1.05);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
}

@media (max-width: 560px){
  .close{
    width: 44px;
    height: 44px;
    font-size: 26px;
    line-height: 44px;
    top: 12px;
    right: 12px;
  }
}
.expanded__header{
  padding: 28px 28px 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 251, 252, 0.95) 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.expanded__header h3{
  margin:0;
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 800;
  color: #1a2b3c;
  letter-spacing: -0.5px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  line-height: 1.2;
}
.expanded__content{
  display:grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 24px;
  padding: 24px;
  background: #ffffff;
}
@media(max-width:900px){
  .expanded__content{
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
.slider{
  position:relative;
  overflow:hidden;
  border:none;
  border-radius:12px;
  background:#f8f9fb;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.06);
}

/* Image counter badge */
.slider::after{
  content: attr(data-count);
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  backdrop-filter: blur(8px);
  z-index: 5;
  pointer-events: none;
}
.slider__track{
  display:flex;
  margin:0;
  padding:0;
  list-style:none;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slider__slide{
  min-width:100%;
  aspect-ratio:16/9;
  background:#f1f5fb;
  position:relative;
}
.slider__slide img{
  width:100%;
  height:100%;
  object-fit:cover;
  display:block;
  transition: transform 0.3s ease;
  user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}
@media (hover: hover) {
  .slider__slide:hover img{
    transform: scale(1.02);
  }
}
.nav{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  background:rgba(255, 255, 255, 0.95);
  color:#1a2b3c;
  border:none;
  width:48px;
  height:48px;
  border-radius:50%;
  cursor:pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0,0,0,.15), 0 2px 6px rgba(0,0,0,.1);
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  z-index: 10;
}
.nav:hover{
  background:#ffffff;
  transform: translateY(-50%) scale(1.15);
  box-shadow: 0 6px 20px rgba(0,0,0,.25), 0 3px 10px rgba(0,0,0,.15);
  color: var(--brand-blue);
}
.nav:active{
  transform: translateY(-50%) scale(1.05);
}
.prev{ left:12px }
.next{ right:12px }

@media (max-width: 560px) {
  .nav{
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
  .prev{ left:8px }
  .next{ right:8px }
}

.expanded__text{
  border:none;
  border-radius:12px;
  padding: 20px;
  max-height: 400px;
  overflow:auto;
  background: linear-gradient(135deg, #f8f9fb 0%, #ffffff 100%);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.04);
  line-height: 1.7;
}
@media (max-width: 900px){
  .expanded__text{
    max-height: 300px;
  }
}
@media (max-width: 560px){
  .expanded__text{
    max-height: 280px;
    padding: 16px;
  }
}
.expanded__text p{
  margin:0 0 14px;
  line-height:1.7;
  color: #2d3748;
  font-size: clamp(14px, 2vw, 16px);
}
.expanded__text p:last-child{
  margin-bottom: 0;
}

/* Smooth scrollbar for modal text */
.expanded__text::-webkit-scrollbar{
  width: 8px;
}
.expanded__text::-webkit-scrollbar-track{
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
}
.expanded__text::-webkit-scrollbar-thumb{
  background: rgba(28, 90, 163, 0.3);
  border-radius: 8px;
  transition: background 0.2s ease;
}
.expanded__text::-webkit-scrollbar-thumb:hover{
  background: rgba(28, 90, 163, 0.5);
}

/* ------------------- CONTACT SECTION ------------------- */
.contact-section{
  background: linear-gradient(180deg, var(--strip) 0%, rgba(212, 232, 247, 0.6) 100%);
  border-top: 4px solid var(--strip-border);
  padding: clamp(36px, 6vw, 72px) 0;
  box-shadow: inset 0 4px 12px rgba(28, 90, 163, 0.08);
}
.contact-title{
  margin:0 0 14px;
  font-size: clamp(24px,3.2vw,34px);
  color:#0f2732;
  text-align:center;
  font-weight: 800;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Facebook Section */
.facebook-section{
  text-align: center;
  margin: 32px auto 40px;
  padding: 36px 28px;
  max-width: 680px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
  border-radius: 20px;
  border: 3px solid rgba(24, 119, 242, 0.25);
  box-shadow: 0 8px 28px rgba(24, 119, 242, 0.12);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.facebook-section:hover{
  transform: translateY(-2px);
  box-shadow: 0 12px 36px rgba(24, 119, 242, 0.18);
  border-color: rgba(24, 119, 242, 0.35);
}

.facebook-title{
  margin: 0 0 12px;
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #1877f2;
  letter-spacing: -0.3px;
}

.facebook-description{
  margin: 0 0 24px;
  font-size: clamp(15px, 2.2vw, 17px);
  line-height: 1.6;
  color: #2f4750;
  font-weight: 500;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.facebook-button{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 40px;
  font-size: clamp(16px, 2.3vw, 19px);
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #1877f2 0%, #0c62d6 100%);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(24, 119, 242, 0.35);
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
}

.facebook-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  transition: left 0.6s ease;
}

.facebook-button:hover::before {
  left: 100%;
}

.facebook-button:hover{
  background: linear-gradient(135deg, #0c62d6 0%, #0a4fb8 100%);
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 32px rgba(24, 119, 242, 0.5);
}

.facebook-button:active{
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 18px rgba(24, 119, 242, 0.4);
}

.facebook-icon{
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.contact-lines{ max-width: 720px; margin: 0 auto; text-align:center; padding: 0 8px; }
.contact-block{ margin: 10px auto 14px; }
.contact-label{ display:block; font-weight:700; color:#0f2732; margin-bottom:6px; font-size: clamp(18px, 2.6vw, 20px); }
.contact-value{ display:block; text-decoration:none; border-bottom: 1px dashed rgba(15,39,50,.25); color:#0f2732; font-weight:700; font-size: clamp(18px, 2.6vw, 22px); margin:0 auto; width:fit-content; }
.contact-value:hover{ border-bottom-color: rgba(15,39,50,.55) }
.contact-note{ margin-top:6px; color:#2f4750; font-size: clamp(14px, 2vw, 16px); }

/* -------- Additional Resources (CARD GRID) -------- */
.section--resources{
  position:relative;
  overflow:hidden;
  background: linear-gradient(180deg,
    #0a1f3d 0%,
    #0d2847 50%,
    #0a1f3d 100%
  );
}
.section--resources > .container{ position:relative; z-index:1; }

/* Bubbles Animation */
.resources{
  position: relative;
  overflow: visible;
  width: 100%;
  padding: clamp(22px, 5vw, 56px) 0;
}

.ambient-bubble{
  position: absolute;
  bottom: -80px;
  background: radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.7), rgba(200, 230, 255, 0.3));
  border-radius: 50%;
  pointer-events: none;
  animation: floatUp linear forwards;
  box-shadow:
    inset 0 0 15px rgba(255, 255, 255, 0.4),
    inset -3px -3px 8px rgba(100, 150, 200, 0.2),
    0 4px 12px rgba(11, 99, 200, 0.15);
  z-index: 0;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

@keyframes floatUp {
  0% {
    transform: translateY(0) translateX(0) translateZ(0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    transform: translateY(-110vh) translateX(var(--drift, 0px)) translateZ(0);
    opacity: 0;
  }
}

.ambient-bubble::before{
  content: '';
  position: absolute;
  top: 12%;
  left: 18%;
  width: 35%;
  height: 35%;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.9), transparent 70%);
  border-radius: 50%;
  filter: blur(2px);
}

.cursor-bubble{
  position: absolute;
  background: radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.85), rgba(180, 220, 255, 0.4));
  border-radius: 50%;
  pointer-events: none;
  animation: cursorBubbleFloat 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  box-shadow:
    inset 0 0 8px rgba(255, 255, 255, 0.5),
    0 2px 8px rgba(11, 99, 200, 0.2);
  z-index: 0;
  will-change: transform, opacity;
  backface-visibility: hidden;
}

@keyframes cursorBubbleFloat {
  0% {
    transform: translate(0, 0) scale(0.4) translateZ(0);
    opacity: 0.9;
  }
  100% {
    transform:
      translate(
        calc((var(--random-x, 0.5) - 0.5) * 50px),
        calc(-90px - var(--random-y, 0.5) * 30px)
      )
      scale(1.3)
      translateZ(0);
    opacity: 0;
  }
}

.resources-title{ text-align:center; color:#ffffff; font-size: clamp(20px, 2.8vw, 26px); margin: 0 0 18px; font-weight:800; position: relative; z-index: 2; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); }

/* Card grid */
.resources-cards{ display:grid; gap: clamp(16px, 2.2vw, 24px); grid-template-columns: repeat(3, 1fr); position: relative; z-index: 2; }
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
  height: clamp(260px, 38vw, 360px);
}
.rcard:hover{ transform: translateY(-3px); box-shadow: 0 16px 36px rgba(0,0,0,.22); }
.rcard:focus-visible{ box-shadow: 0 0 0 3px #7dd3fc, 0 12px 30px rgba(0,0,0,.22); }

/* Full image behind */
.rcard__media{ position:absolute; inset:0; z-index:0; overflow:hidden; }
.rcard__media img{ width:100%; height:100%; object-fit:cover; display:block; filter: contrast(1.05) saturate(1.08); }
.rcard__ph{ display:grid; place-items:center; height:100%; color:#9fb3c8; background:#1e2736; font-weight:700; }
.rcard__tint{ position:absolute; inset:0; opacity:.48; mix-blend-mode: screen; }

/* Sliding black cover */
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
  position:absolute; left:0; right:0;
  top:-44px;
  height:44px;
  background: var(--cover-bg);
  border-top: none;
  clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
  pointer-events: none;
}
.rcard:hover .rcard__cover,
.rcard--open .rcard__cover{ height: var(--cover-open); }

.rcard__title{
  margin: 2px 0 8px;
  font-size: clamp(18px, 2.4vw, 20px);
  font-weight: 800;
  letter-spacing: .2px;
  color:#fff;
  transition: transform .22s ease, color .22s ease;
  position:relative; z-index:1;
}
.rcard:hover .rcard__title,
.rcard--open .rcard__title{
  transform: translateY(-2px);
  color:#ffffff;
}

/* Text reveal inside the cover */
.rcard__text{
  margin:0;
  color: var(--text-soft);
  line-height:1.55;
  max-height:0;
  overflow:hidden;
  opacity:0;
  transition: max-height .28s ease, opacity .22s ease;
  flex: 1 1 auto;
  min-height:0;
  position:relative; z-index:1;
}
.rcard:hover .rcard__text,
.rcard--open .rcard__text{
  max-height: none;
  overflow: hidden;
  opacity:1;
  -webkit-overflow-scrolling: touch;
}
@media (max-width: 640px){
  :root{ --cover-open: 92%; }
  .rcard__cover{ padding: 12px 14px 14px; }
  .rcard__title{ margin: 2px 0 6px; }
}

/* CTA & Powered by */
.resources-cta{ margin-top: clamp(18px, 3vw, 26px); color:#e8f2ff; font-weight:700; text-align:center; font-size: clamp(16px, 2.4vw, 20px); position: relative; z-index: 2; }
.resources-cta-link{ color:#6eb9ff; text-decoration: underline; font-style: italic; font-weight:700; transition: color 0.2s ease; }
.resources-cta-link:hover{ color:#8fc9ff; }
.resources-cta-sub{ color:#b8d9ff; transition: color 0.2s ease, transform 0.2s ease; display: inline-block; cursor: pointer; }
.resources-cta-sub:hover{ color:#ffffff; transform: translateY(-1px); }

/* Locations Section */
.locations-section{
  margin-top: clamp(32px, 5vw, 48px);
  text-align: center;
  padding: 28px 20px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  position: relative;
  z-index: 2;
}

.locations-title{
  margin: 0 0 24px;
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 800;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.3px;
}

.locations-buttons{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  max-width: 800px;
  margin: 0 auto;
}

.location-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 700;
  color: #1a2b3c;
  background: linear-gradient(135deg, #ffffff 0%, #f0f4f8 100%);
  border: 2px solid rgba(28, 90, 163, 0.2);
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 1.3;
}

.location-btn:hover{
  background: linear-gradient(135deg, #1c5aa3 0%, #0b63c8 100%);
  color: #ffffff;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(28, 90, 163, 0.35);
  border-color: #1c5aa3;
}

.location-btn:active{
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(28, 90, 163, 0.3);
}

@media (max-width: 560px){
  .locations-buttons{
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .location-btn{
    padding: 12px 16px;
    font-size: 14px;
  }
}

.poweredby{ margin-top: 24px; text-align: center; position: relative; z-index: 2; }
.poweredby__text{ color:#d8e8ff; font-weight: 700; font-size: clamp(14px, 2.2vw, 16px); margin-bottom: 6px; }
.poweredby__chip{
  display:inline-flex; align-items:center; justify-content:center;
  padding: 10px 16px; border-radius: 12px; background: rgba(255,255,255,.10);
  backdrop-filter: blur(8px) saturate(1.15); -webkit-backdrop-filter: blur(8px) saturate(1.15);
  box-shadow: 0 8px 24px rgba(0,0,0,.18);
}
.poweredby__logo{ display:block; width: clamp(80px, 24vw, 160px); height:auto;
  filter: drop-shadow(0 1px 0 rgba(255,255,255,.95)) drop-shadow(0 6px 16px rgba(0,0,0,.22)); }

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
  *, *::before, *::after{ animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important; }
  .ambient-bubble, .cursor-bubble{ display: none !important; }
}

/* ================= WINTER PAGE STYLES & FLAIR ================= */
.winter-hero{
  position: relative;
  background: linear-gradient(180deg, #071a2e, #0a1040);
  color: #e9f3ff;
  padding: clamp(36px, 7vw, 80px) 0 clamp(22px, 5vw, 36px);
  border-bottom: 4px solid var(--brand-blue);
  overflow:hidden;
}
.winter-hero__bg{
  position:absolute; inset:0;
  background:
    radial-gradient(1200px 400px at 30% 0%, rgba(19,144,158,.30), transparent 60%),
    radial-gradient(900px 360px at 75% 20%, rgba(11,99,200,.30), transparent 60%);
  opacity:.9; pointer-events:none;
  animation: bg-pan 24s ease-in-out infinite alternate;
}
.winter-hero__bg::before,
.winter-hero__bg::after{
  content:"";
  position:absolute; width:480px; height:480px; border-radius:50%;
  filter: blur(50px);
  background: radial-gradient(closest-side, rgba(19,144,158,.28), transparent 70%);
  top: -120px; left: -120px; pointer-events:none;
  animation: orb-float 26s ease-in-out infinite;
}
.winter-hero__bg::after{
  width:420px; height:420px; top: auto; bottom: -160px; left: auto; right: -120px;
  background: radial-gradient(closest-side, rgba(11,99,200,.28), transparent 70%);
  animation-duration: 30s;
}
@keyframes bg-pan {
  0% { background-position: 0% 0%, 100% 0%; }
  100% { background-position: 20% 10%, 80% 20%; }
}
@keyframes orb-float {
  0%,100% { transform: translateY(0) translateX(0) scale(1); }
  50% { transform: translateY(-15px) translateX(10px) scale(1.03); }
}

.winter-hero__inner{ position:relative; z-index:1; }
.winter-hero__title{
  margin:0 0 8px; font-size: clamp(26px, 4.2vw, 44px); font-weight:800; letter-spacing:.2px;
  text-shadow: 0 6px 20px rgba(0,0,0,.25);
}
.winter-hero__dek{
  margin: 0; max-width: 880px; font-size: clamp(16px, 2.2vw, 20px); line-height:1.4; color:#cfe5ff;
}

/* Lead visual */
.winter-lead{ padding: clamp(16px, 3vw, 28px) 0; }
.winter-lead__figure{ margin:0; border-radius:14px; overflow:hidden; border:1px solid rgba(0,0,0,.08); box-shadow: 0 14px 34px rgba(0,0,0,.16); }
.winter-lead__img{
  position:relative; width:100%; height: 220px; overflow:hidden;
  background: linear-gradient(135deg, #0a1040, #0b63c8 60%, #13909e);
}
.winter-lead__photo{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  filter: blur(2.5px) saturate(1.05) brightness(.98);
  transform: scale(1.03);
}
.winter-lead__scrim{
  position:absolute; inset:0;
  background: linear-gradient(0deg, rgba(0,0,0,.18), rgba(0,0,0,.06));
  pointer-events:none;
}
.winter-lead__cap{ margin:0; padding:12px 14px; font-size:14px; color:#2a3e4f; background:#f7fbff; border-top:1px solid rgba(0,0,0,.06); }

/* Search hero */
.winter-search{ text-align:center; padding: clamp(10px, 3.2vw, 20px) 0 clamp(24px, 4vw, 36px); }
.winter-search__headline{
  margin: 6px 0 2px; font-weight: 800; letter-spacing: .3px;
  font-size: clamp(22px, 4vw, 40px); color:#0a2b4c;
}
.winter-search__sub{
  margin: 0 0 14px; color:#4d6a7d; font-size: clamp(14px, 2vw, 18px);
}
.winter-search__form{ max-width: 860px; margin: 0 auto; }
.winter-search__field{
  display:flex; gap:10px; align-items:center; background:#ffffff;
  border:1px solid rgba(0,0,0,.10); border-radius: 999px; padding: 8px 8px 8px 14px;
  box-shadow: 0 8px 26px rgba(0,0,0,.08);
}
.winter-search__field input{
  flex:1; border:none; outline:none; font: inherit; font-size: clamp(14px, 2vw, 18px);
  padding: 10px 8px; color:#0f2732; background:transparent;
}
.winter-search__field button{
  border:none; outline:none; cursor:pointer; font-weight:800; letter-spacing:.2px;
  padding: 10px 16px; border-radius: 999px; background: linear-gradient(135deg, #0b63c8, #13909e);
  color:#fff; box-shadow: 0 8px 22px rgba(11,99,200,.28); transition: transform .15s ease, box-shadow .15s ease;
}
.winter-search__field button:hover{ transform: translateY(-1px); box-shadow: 0 12px 28px rgba(11,99,200,.34); }

.winter-search__chips{
  display:flex; flex-wrap:wrap; gap:8px; justify-content:center; margin-top:12px; user-select:none;
}
.winter-search__chips span{
  font-size: 13px; color:#0a2b4c; background:#eaf6ff; border:1px solid #cfe9ff;
  padding:6px 10px; border-radius:999px; cursor:pointer; transition: transform .12s ease, background .12s ease;
}
.winter-search__chips span:hover{ transform: translateY(-1px); background:#e2f2ff; }

/* Footer */
.winter-footer{
  background:#0a1040; color:#d8e6f3; border-top:4px solid var(--brand-blue);
  margin-top: clamp(22px, 4vw, 40px); padding: 18px 0;
}
.winter-footer__txt{ margin:0; text-align:center; font-weight:700; }

/* Animations used in hero bg */
@keyframes metric-pop {
  from { transform: translateY(6px); opacity: .0; }
  to   { transform: translateY(0); opacity: 1; }
}
`;

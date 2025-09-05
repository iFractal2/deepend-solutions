// -------- Utility: try to auto-discover sequential images --------
// Tries images/<prefix>_1.<ext>, _2..., up to maxN. Returns array of URLs that exist.
async function discoverImages(prefix, exts=['jpg','jpeg','png','webp'], maxN=50){
  const results = [];
  const checks = [];
  for(let i=1;i<=maxN;i++){
    for(const ext of exts){
      const url = `images/${prefix}_${i}.${ext}`;
      checks.push(new Promise((resolve)=>{
        const img = new Image();
        img.onload = ()=> resolve({ok:true,url});
        img.onerror = ()=> resolve({ok:false});
        img.src = url;
      }));
    }
    // Race all extensions for given index; pick first that exists
    // eslint-disable-next-line no-await-in-loop
    const outcome = await Promise.all(checks.splice(0, exts.length));
    const hit = outcome.find(o=>o.ok);
    if(hit){ results.push(hit.url); }
    else{
      // if none of the extensions exist at this index, continue to next index
    }
  }
  return results;
}

// -------- Fade-on-view using IntersectionObserver --------
const io = new IntersectionObserver((entries)=>{
  for(const e of entries){
    if(e.isIntersecting){
      e.target.classList.add('is-visible');
    }
  }
},{ threshold: 0.15 });
document.querySelectorAll('.fade-on-view').forEach(el=>io.observe(el));

// -------- Hero rotator & overlays --------
async function initHero(){
  const rotator = document.getElementById('heroRotator');
  const overlayHost = document.getElementById('heroOverlays');

  const headers = await discoverImages('header');
  const overlays = await discoverImages('overlay');

  if(headers.length === 0){
    // fallback to a gradient background color
    rotator.style.background = 'linear-gradient(120deg,#0d1d33,#0a0f17)';
  }else{
    headers.forEach((src,i)=>{
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Header ${i+1}`;
      if(i===0) img.classList.add('active');
      rotator.appendChild(img);
    });
    let idx = 0;
    setInterval(()=>{
      const imgs = rotator.querySelectorAll('img');
      imgs.forEach((im,k)=> im.classList.toggle('active', k===idx));
      idx = (idx+1) % imgs.length;
    }, 4000);
  }

  // overlays (optional)
  if(overlays.length){
    overlays.forEach((src,i)=>{
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Overlay ${i+1}`;
      // position overlays nicely (staggered)
      img.style.top = `${12 + i*6}%`;
      img.style.left = `${10 + (i%2)*40}%`;
      img.classList.add('show');
      overlayHost.appendChild(img);
    });
  }
}

// -------- Services grid --------
const services = [
  { key:'replaster', title:'Replaster/Resurface' },
  { key:'mastic', title:'Mastic' },
  { key:'coping', title:'Coping' },
  { key:'tile', title:'Tile' },
  { key:'decks', title:'Pool Decks' },
  { key:'features', title:'Water features' },
  { key:'rails', title:'Handrails/Fences' },
  { key:'turf', title:'Turf' },
  { key:'inspections', title:'Inspections/Leak Detections' }
];

function initServices(){
  const grid = document.getElementById('servicesGrid');
  services.forEach(s=>{
    const a = document.createElement('a');
    a.className = 'service-card';
    a.href = '#'; // TODO: set to actual pages/anchors
    a.setAttribute('data-service', s.key);

    const img = document.createElement('img');
    img.className = 'service-img';
    img.src = `images/service_${s.key}.jpg`;
    img.alt = s.title;
    img.onerror = () => { img.style.background = 'linear-gradient(180deg,#0a0f17,#0f1623)'; };

    const title = document.createElement('div');
    title.className = 'service-title';
    title.innerHTML = `${s.title} <span>Learn more →</span>`;

    a.appendChild(img);
    a.appendChild(title);
    grid.appendChild(a);
  });
}

// -------- Autoscroll Gallery --------
async function initGallery(){
  const track = document.getElementById('galleryTrack');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  const images = await discoverImages('gallery');
  const slides = images.length ? images : ['images/gallery_1.jpg']; // at least one slot

  slides.forEach((src, i)=>{
    const li = document.createElement('li');
    li.className = 'slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Gallery ${i+1}`;
    const cap = document.createElement('div');
    cap.className = 'caption';
    // Caption text from filename tail after underscore, if present
    const name = src.split('/').pop().split('.')[0];
    const footerTitle = name.replace(/^gallery_?/i,'').replace(/[_-]+/g,' ').trim() || `Project ${i+1}`;
    cap.textContent = footerTitle;
    li.appendChild(img); li.appendChild(cap);
    track.appendChild(li);
  });

  let idx = 0;
  let locked = false;
  function go(n){
    const total = track.children.length;
    idx = (n + total) % total;
    const x = -idx * track.parentElement.clientWidth;
    track.style.transform = `translate3d(${x}px,0,0)`;
  }

  // Resize handler to keep slides full width
  function onResize(){
    const w = track.parentElement.clientWidth;
    Array.from(track.children).forEach(li => li.style.minWidth = `${w}px`);
    go(idx);
  }
  window.addEventListener('resize', onResize);
  onResize();

  prev.addEventListener('click',()=>{ if(!locked){ locked=true; go(idx-1); setTimeout(()=>locked=false, 350);} });
  next.addEventListener('click',()=>{ if(!locked){ locked=true; go(idx+1); setTimeout(()=>locked=false, 350);} });

  // Autoplay
  setInterval(()=>{ go(idx+1); }, 4000);
}

// -------- Init --------
window.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  initHero();
  initServices();
  initGallery();
});

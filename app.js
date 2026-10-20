/* ============================================================
   MUHAMMAD TALHA IQBAL — PORTFOLIO  |  app.js
   Nav scroll-spy, card 3D tilt, projects filter + lightbox
   ============================================================ */

'use strict';

// ── Projects database ────────────────────────────────────────
const DB = [
  // 3D Booths & Kiosks
  { id: 'b1', title: 'Final Render — Exhibition Stall', cat: 'booths', src: '3D Kiosk Trade Show Booth/Final Render.png', desc: 'Custom wooden eco-friendly trade show booth modelled in 3D. Warm accent lighting with branded reception surfaces.' },
  { id: 'b2', title: 'Nike Elite Kiosk Concept', cat: 'booths', src: '3D Kiosk Trade Show Booth/Nike render.png', desc: 'Premium sports exhibition kiosk with dark metallic finishes and dynamic backlighting for athletic wear presentation.' },
  { id: 'b3', title: 'Summit Retail Display', cat: 'booths', src: '3D Kiosk Trade Show Booth/render.png', desc: 'Modern commercial display featuring glass-panel cabinets, corporate branding billboards and spotlight rigs.' },
  { id: 'b4', title: 'Redline Automotive Exhibition', cat: 'booths', src: '3D Kiosk Trade Show Booth/red trade show.jpg', desc: 'High-impact red exhibition stall for automotive product presentation with overhead banner frame grid.' },
  { id: 'b5', title: 'Modular Tech Stall Concept', cat: 'booths', src: '3D Kiosk Trade Show Booth/new.png', desc: 'Contemporary marketing pavilion with customer interaction desks and clean corporate digital banner layouts.' },
  { id: 'b6', title: 'Commercial Stall — Model A', cat: 'booths', src: '3D Kiosk Trade Show Booth/1.png', desc: 'Organic retail kiosk rendering with modular compartments and display shelves for mall setups.' },
  { id: 'b7', title: 'Commercial Stall — Model B', cat: 'booths', src: '3D Kiosk Trade Show Booth/2.png', desc: 'Trade show booth with wood-finish shader rendering and glass counter cabinets at scale.' },

  // Canopy Tents
  { id: 't1', title: 'Nike Custom Brand Canopy', cat: 'tents', src: 'Canopy Tent/final-nike.png', desc: 'Corporate outdoor promotion tent for sports sponsorships with custom roof overlays and valance side branding.' },
  { id: 't2', title: 'Artek Event Canopy Tent', cat: 'tents', src: 'Canopy Tent/Artek-tent-final.jpg', desc: 'Event shelter canopy designed to Artek branding specs — balanced corporate colors, high-contrast typography.' },
  { id: 't3', title: 'Furor Sportswear Pop-up', cat: 'tents', src: 'Canopy Tent/Furor-tent-final.png', desc: 'Marketing pop-up shelter tent with energetic sportswear branding and geometric banner overlays.' },
  { id: 't4', title: 'Summit Heavy Shelter — 1', cat: 'tents', src: 'Canopy Tent/up-tent-1.png', desc: 'High-fidelity corporate activation tent mockup featuring protective side skirts with safe graphic margins.' },
  { id: 't5', title: 'Summit Heavy Shelter — 2', cat: 'tents', src: 'Canopy Tent/up-tent-2.png', desc: 'Canopy render from alternate angle showing seam details and material wrinkles for production-ready output.' },

  // Products Showcase
  { id: 'p1', title: 'Zyn Solutions Corporate Pack', cat: 'products', src: 'Products Showcase/Products-01.png', desc: 'Luxury product studio setup — soft shadows, clean glass cylinder reflections and premium brand staging.' },
  { id: 'p2', title: 'Aromatique Perfume — 02', cat: 'products', src: 'Products Showcase/Products-02.png', desc: 'Frosted glass perfume packaging render with gold foil text stampings and professional studio lighting.' },
  { id: 'p3', title: 'Aromatique Perfume — 03', cat: 'products', src: 'Products Showcase/Products-03.png', desc: 'Cosmetic bottle presentation with smooth metallic pump and custom label in studio environment.' },
  { id: 'p4', title: 'Sentiment Luxury Package', cat: 'products', src: 'Products Showcase/Products-04.png', desc: 'Glow cosmetic bottle setup with black materials, micro-reflections and premium dark backdrop staging.' },
  { id: 'p5', title: 'Products Twitter Card — 01', cat: 'products', src: 'Products Showcase/Products Twitter-01.png', desc: 'Social media marketing post for waterproofing product — standard Twitter card ratio with product focus.' },
  { id: 'p6', title: 'Products Twitter Card — 02', cat: 'products', src: 'Products Showcase/Products Twitter-02.png', desc: 'Promotional Twitter graphic showing product can with water-resistance highlights and call-to-action.' },
  { id: 'p7', title: 'Products Twitter Card — 03', cat: 'products', src: 'Products Showcase/Products Twitter-03.png', desc: 'Winter defense product Twitter post featuring bold typography and dynamic product photography.' },

  // Banners & Backdrops
  { id: 'bd1', title: 'Nike Step-and-Repeat Backdrop', cat: 'banners', src: 'Backdop/Backdrop.png', desc: 'Large-scale conference media wall backdrop for red carpet events with balanced logo grid and bleed lines.' },
  { id: 'bd2', title: 'Corporate Expo Backdrop Panel', cat: 'banners', src: 'Backdop/28ae3c223296791.Y3JvcCw2MjkyLDQ5MjIsOTUwLDA.png', desc: 'Pop-up exhibition backdrop displaying company services and tech icons in a clean column layout.' },
  { id: 'bd3', title: 'Trade Expo Rollup Banner', cat: 'banners', src: 'Roll Up Banner/FINAL-5.png', desc: 'Print-ready marketing standee rollup banner with correct CMYK color modes and safe margin calibration.' },
  { id: 'bd4', title: 'Tech Conference Stand Banner', cat: 'banners', src: 'Roll Up Banner/FINAL2.png', desc: 'Creative business rollup banner highlighting digital consulting statistics and contact information.' },
  { id: 'bd5', title: 'Product Promotional Standee', cat: 'banners', src: 'Roll Up Banner/FINAL3.png', desc: 'Marketing rollup standee displaying discount offer highlights and brand core values.' },

  // Carousel Posts
  { id: 'c1', title: 'Waterproofing Guide — Slide 01', cat: 'carousels', src: 'carousel post/Waterproofing-01.png', desc: 'Instagram carousel cover slide for waterproofing solutions brand. Key problem highlights and visual hierarchy.' },
  { id: 'c2', title: 'Waterproofing Guide — Slide 02', cat: 'carousels', src: 'carousel post/Waterproofing-02.png', desc: 'Second carousel slide explaining wall seepage causes with illustrated visual indicators.' },
  { id: 'c3', title: 'Waterproofing Guide — Slide 03', cat: 'carousels', src: 'carousel post/Waterproofing-03.png', desc: 'Third slide recommending chemical sealant solutions with branded colour palette and iconography.' },
  { id: 'c4', title: 'Waterproofing Guide — Slide 07', cat: 'carousels', src: 'carousel post/Waterproofing-07.png', desc: 'Step-by-step application process infographic slide with arrows and numbered visual flow.' },
];

function catLabel(c) {
  return { booths: '3D Booths & Kiosks', tents: 'Canopy Tents', products: 'Products Showcase', banners: 'Banners & Backdrops', carousels: 'Carousel Posts' }[c] || 'Design';
}

// ── State ────────────────────────────────────────────────────
let filtered = [...DB];
let lbIdx = 0;

// ── DOM refs ─────────────────────────────────────────────────
const grid = document.getElementById('projGrid');
const filterBar = document.getElementById('filterBar');
const navLinks = document.querySelectorAll('.nl');
const hamburger = document.getElementById('hamburger');
const navEl = document.getElementById('navLinks');
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbSpin = document.getElementById('lbSpin');
const lbCat = document.getElementById('lbCat');
const lbTitle = document.getElementById('lbTitle');
const lbDesc = document.getElementById('lbDesc');
const lbIdx2 = document.getElementById('lbIdx');
const lbLink = document.getElementById('lbLink');
const cfForm = document.getElementById('contactForm');
const cfStatus = document.getElementById('cfStatus');

// ── Hamburger ────────────────────────────────────────────────
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navEl.classList.toggle('open');
});
navEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => { hamburger.classList.remove('open'); navEl.classList.remove('open'); });
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(s => {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + s.id));
    }
  });
}, { passive: true });

// ── Card 3D tilt ─────────────────────────────────────────────
document.querySelectorAll('.pcard').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const rotX = -(dy / (r.height / 2)) * 10;
    const rotY = (dx / (r.width / 2)) * 10;
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-10px) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.setProperty('--mx', '50%');
    card.style.setProperty('--my', '50%');
  });
});

// ── IntersectionObserver for true lazy loading ───────────────
// Images start with src='' (no network request). When card
// enters the viewport the observer swaps in the real src.
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    const real = img.dataset.src;
    if (real && img.src !== real) {
      img.src = real;
    }
    imgObserver.unobserve(img);
  });
}, { rootMargin: '200px 0px' }); // start loading 200px before visible

// ── Pagination state ─────────────────────────────────────────
const PAGE_SIZE = 9;
let currentPage = 0;

// ── Render projects grid (paginated + true lazy) ─────────────
function renderGrid(list) {
  grid.innerHTML = '';
  currentPage = 0;
  // Remove any old load-more button
  const old = document.getElementById('loadMoreBtn');
  if (old) old.remove();
  if (!list.length) {
    grid.innerHTML = '<p style="color:var(--text3);grid-column:1/-1">No projects found.</p>';
    return;
  }
  appendPage(list);
}

function appendPage(list) {
  const start = currentPage * PAGE_SIZE;
  const slice = list.slice(start, start + PAGE_SIZE);

  slice.forEach((p, localIdx) => {
    const i = start + localIdx; // real index into filtered[]
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.dataset.i = i;
    card.innerHTML = `
      <div class="proj-img-wrap">
        <div class="proj-skeleton" id="sk-${p.id}"></div>
        <img class="proj-img"
             src=""
             data-src="${p.src}"
             alt="${p.title}"
             decoding="async"
             width="600" height="220">
        <div class="proj-overlay">
          <div class="proj-eye">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
        </div>
      </div>
      <div class="proj-foot">
        <div class="proj-foot-l">
          <span class="proj-name">${p.title}</span>
          <span class="proj-tag">${catLabel(p.cat)}</span>
        </div>
        <button class="proj-btn" aria-label="View">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
        </button>
      </div>`;

    const img = card.querySelector('.proj-img');
    // Remove skeleton once real image loaded
    img.addEventListener('load', () => {
      const sk = document.getElementById('sk-' + p.id);
      if (sk) { sk.style.opacity = '0'; setTimeout(() => sk.remove(), 300); }
    });
    // Observe for lazy src swap
    imgObserver.observe(img);
    card.addEventListener('click', () => openLB(i));
    grid.appendChild(card);
  });

  currentPage++;

  // Remove any old load-more button before possibly re-adding
  const old = document.getElementById('loadMoreBtn');
  if (old) old.remove();

  // Add Load More button if more remain
  if (currentPage * PAGE_SIZE < list.length) {
    const remaining = list.length - currentPage * PAGE_SIZE;
    const btn = document.createElement('button');
    btn.id = 'loadMoreBtn';
    btn.className = 'load-more-btn';
    btn.textContent = `Load More (${remaining} remaining)`;
    btn.addEventListener('click', () => appendPage(list));
    // Insert after the grid
    grid.insertAdjacentElement('afterend', btn);
  }
}

// ── Filter tabs ──────────────────────────────────────────────
filterBar.querySelectorAll('.filt').forEach(btn => {
  btn.addEventListener('click', () => {
    filterBar.querySelectorAll('.filt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.f;
    filtered = f === 'all' ? [...DB] : DB.filter(p => p.cat === f);
    renderGrid(filtered);
  });
});

// ── Lightbox ─────────────────────────────────────────────────
function openLB(i) {
  lbIdx = i;
  updateLB();
  lb.classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeLB() {
  lb.classList.remove('on');
  lbImg.classList.remove('ready');
  document.body.style.overflow = '';
}
function updateLB() {
  const p = filtered[lbIdx];
  if (!p) return;
  lbImg.classList.remove('ready');
  lbSpin.style.display = 'block';
  lbImg.src = p.src;
  lbImg.alt = p.title;
  lbCat.textContent = catLabel(p.cat);
  lbTitle.textContent = p.title;
  lbDesc.textContent = p.desc;
  lbIdx2.textContent = `${lbIdx + 1} / ${filtered.length}`;
  lbLink.href = p.src;
  lbImg.onload = () => { lbSpin.style.display = 'none'; lbImg.classList.add('ready'); };
}
document.getElementById('lbClose').addEventListener('click', closeLB);
document.getElementById('lbNext').addEventListener('click', () => { lbIdx = (lbIdx + 1) % filtered.length; updateLB(); });
document.getElementById('lbPrev').addEventListener('click', () => { lbIdx = (lbIdx - 1 + filtered.length) % filtered.length; updateLB(); });
lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('on')) return;
  if (e.key === 'Escape') closeLB();
  if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % filtered.length; updateLB(); }
  if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + filtered.length) % filtered.length; updateLB(); }
});

// ── Skill bar animation on scroll ────────────────────────────
const skillsSection = document.getElementById('skills');
let barsAnimated = false;
const io = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !barsAnimated) {
    barsAnimated = true;
    document.querySelectorAll('.sk-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }
}, { threshold: .3 });
if (skillsSection) io.observe(skillsSection);

// ── Contact form ─────────────────────────────────────────────
if (cfForm) {
  cfForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = cfForm.querySelector('.btn-submit');
    btn.disabled = true;
    btn.textContent = 'Sending…';
    cfStatus.className = 'cf-status';
    cfStatus.textContent = '';
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send Message <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      cfForm.reset();
      cfStatus.className = 'cf-status ok';
      cfStatus.textContent = '✓ Message sent! I will get back to you shortly.';
      setTimeout(() => { cfStatus.textContent = ''; }, 6000);
    }, 1300);
  });
}


// ── Featured card → filter products ──────────────────────────
const featCard = document.querySelector('.pc-featured');
if (featCard) {
  featCard.addEventListener('click', e => {
    e.preventDefault();
    const btn = filterBar.querySelector('[data-f="products"]');
    if (btn) btn.click();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });
}

// ── Init ─────────────────────────────────────────────────────
renderGrid(filtered);

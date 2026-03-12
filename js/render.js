/**
 * ============================================================
 *  RENDERER — tabo-site
 * ============================================================
 *  Reads SITE and PROJECTS data and builds the page.
 *  You should NOT need to edit this file unless you want
 *  to change the layout or add a new section type.
 * ============================================================
 */

// ── HELPERS ──────────────────────────────────────────────────

function esc(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/** Convert **bold**, *italic*, and newlines to HTML */
function md(text) {
  return (text || '')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');
}

function photoOrPlaceholder(src, caption, cls = 'modal-img-placeholder', portrait = false) {
  const extraCls = portrait ? ' portrait-photo' : '';
  if (src) {
    return `<figure class="${cls}${extraCls}">
      <img src="${esc(src)}" alt="${esc(caption)}" loading="lazy">
      ${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}
    </figure>`;
  }
  return `<div class="${cls} is-placeholder">
    <span class="placeholder-label-dark">📷 ${esc(caption || 'Photo')}</span>
  </div>`;
}


// ── HERO ─────────────────────────────────────────────────────

function buildHero() {
  const h = SITE.hero;
  const [word1, word2, word3] = h.heading;
  const countries = h.countries.map(c => `<span class="country-tag">${esc(c)}</span>`).join('');
  const heroImg = h.photo
    ? `<img src="${esc(h.photo)}" alt="Field photo" style="width:100%;height:100%;object-fit:cover;">`
    : `<div class="hero-image-placeholder"><span class="placeholder-label">📷 Hero Photo</span></div>`;

  document.getElementById('hero').innerHTML = `
    <div class="hero-text">
      <p class="hero-tag">${esc(h.tagline || SITE.tagline)}</p>
      <h1 class="hero-heading">
        ${esc(word1)}<br>
        <em>${esc(word2)}</em><br>
        ${esc(word3)}
      </h1>
      <p class="hero-sub">${esc(h.sub)}</p>
      <p class="hero-affiliation">Working under the guidance of <strong>RockinSoils</strong></p>
      <div class="hero-actions">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="#about" class="btn-secondary">About me</a>
      </div>
    </div>
    <div class="hero-image-col">
      ${heroImg}
      <div class="hero-countries">${countries}</div>
    </div>`;
}


// ── ABOUT ────────────────────────────────────────────────────

function buildAbout() {
  const a = SITE.about;
  const portrait = a.portrait
    ? `<img src="${esc(a.portrait)}" alt="Portrait of ${esc(SITE.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
    : `<span class="placeholder-label">📷 Portrait Photo</span>`;

  const paragraphs = a.paragraphs.map(p => `<p>${md(p)}</p>`).join('');

  const affiliationHtml = a.affiliation ? `
    <div class="about-affiliation">
      ${a.affiliation.logo ? `<img class="about-affiliation-logo" src="${esc(a.affiliation.logo)}" alt="${esc(a.affiliation.name)}">` : ''}
      <div class="about-affiliation-text">
        <span class="about-affiliation-label">${esc(a.affiliation.label)}</span>
        <span class="about-affiliation-detail">${md(a.affiliation.detail)}</span>
      </div>
    </div>` : '';

  document.getElementById('about').innerHTML = `
    <div class="about-left">
      <div class="about-photo">${portrait}</div>
      <div class="about-name">${esc(SITE.name)}</div>
      <div class="about-title">${esc(a.credential_education)}</div>
    </div>
    <div class="about-right">
      <p class="section-label">About</p>
      <p class="lead">${md(a.lead)}</p>
      ${paragraphs}
      ${affiliationHtml}
      <div class="credentials">
        <div class="credential">
          <span class="credential-label">Education</span>
          <span class="credential-value">${esc(a.credential_education)}</span>
        </div>
        <div class="credential">
          <span class="credential-label">Based in</span>
          <span class="credential-value">${esc(a.credential_location)}</span>
        </div>
        <div class="credential">
          <span class="credential-label">Languages</span>
          <span class="credential-value">${esc(a.credential_languages)}</span>
        </div>
        <div class="credential">
          <span class="credential-label">Focus regions</span>
          <span class="credential-value">${esc(a.credential_regions)}</span>
        </div>
      </div>
    </div>`;
}


// ── EXPERTISE ────────────────────────────────────────────────

function buildExpertise() {
  const cards = SITE.expertise.map(e => `
    <div class="expertise-card">
      <div class="expertise-num">${esc(e.num)}</div>
      <div class="expertise-title">${esc(e.title)}</div>
      <p class="expertise-desc">${md(e.desc)}</p>
      <div class="expertise-tags">
        ${e.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}
      </div>
    </div>`).join('');

  document.querySelector('.expertise-grid').innerHTML = cards;
}


// ── PROJECTS GRID ────────────────────────────────────────────

function buildProjectCard(p) {
  const c = p.card;
  const bullets = c.bullets.map(b => `<li>${esc(b)}</li>`).join('');
  const tags = c.tags.map(t => `<span class="project-tag">${esc(t)}</span>`).join('');
  const objPos = c.coverPosition ? `object-position:${c.coverPosition};` : '';
  const img = c.coverPhoto
    ? `<img src="${esc(c.coverPhoto)}" alt="${esc(c.title)}" style="width:100%;height:100%;object-fit:cover;${objPos}">`
    : `<span class="placeholder-label-dark">📷 ${esc(c.title)}</span>`;

  return `
    <div class="project-card${p.featured ? ' featured' : ''}"
         data-country="${esc(p.country)}"
         data-project="${esc(p.id)}"
         onclick="openProject('${esc(p.id)}')">
      <div class="project-image">${img}</div>
      <div class="project-content">
        <div class="project-meta">
          <span class="project-country">${esc(p.country)}</span>
          <span class="project-year">${esc(p.year)}</span>
        </div>
        <div class="project-title">${esc(c.title)}</div>
        <ul class="project-bullets">${bullets}</ul>
        <div class="project-footer">
          <div class="project-tags">${tags}</div>
          <span class="read-more-link">Read more →</span>
        </div>
      </div>
    </div>`;
}

function buildProjectsGrid() {
  document.querySelector('.projects-grid').innerHTML =
    PROJECTS.map(buildProjectCard).join('');
}


// ── PROJECT MODAL / FULL PAGE ─────────────────────────────────

function buildProjectModal(p) {
  const pg = p.page;

  // Hero image
  const hero = pg.heroPhoto
    ? `<img src="${esc(pg.heroPhoto)}" alt="${esc(pg.title)}" style="width:100%;height:100%;object-fit:cover;">`
    : `<span class="placeholder-label-dark">📷 ${esc(pg.title)}</span>`;

  // Sections
  const sections = (pg.sections || []).map(s => `
    <div class="modal-section">
      <h3 class="modal-section-title">${esc(s.heading)}</h3>
      <p>${md(s.text)}</p>
    </div>`).join('');

  // Photos grid (up to 4, in a 2×2 grid)
  const photos = (pg.photos || []).filter(ph => ph.src || ph.caption);
  let photosHtml = '';
  if (photos.length > 0) {
    const items = photos.map(ph => photoOrPlaceholder(ph.src, ph.caption, 'modal-img-placeholder', ph.portrait)).join('');
    photosHtml = `<div class="modal-image-row">${items}</div>`;
  }

  // Video embed (YouTube/Vimeo) or local video showcase link
  let videoHtml = '';
  if (pg.video) {
    videoHtml = `
      <div class="modal-video">
        <iframe src="${esc(pg.video)}" frameborder="0" allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
      </div>`;
  }
  if (pg.videoShowcase) {
    videoHtml += `<a class="modal-video-link" onclick="openVideoShowcase()">\u25B6 Watch field videos</a>`;
  }

  // Tags
  const tags = (pg.tags || []).map(t => `<span class="project-tag">${esc(t)}</span>`).join('');

  return `
    <div class="modal-overlay" id="modal-${esc(p.id)}">
      <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(pg.title)}">
        <button class="modal-close" onclick="closeProject('${esc(p.id)}')" aria-label="Close">✕</button>
        <div class="modal-hero-image">${hero}</div>
        <div class="modal-body">
          <div class="modal-meta">
            <span class="project-country">${esc(p.country)}</span>
            <span class="project-year">${esc(p.year)}</span>
          </div>
          <h2 class="modal-title">${esc(pg.title)}</h2>
          <p class="modal-lead">${md(pg.lead)}</p>
          ${sections}
          ${photosHtml}
          ${videoHtml}
          <div class="modal-tags">${tags}</div>
        </div>
      </div>
    </div>`;
}

function buildModals() {
  const container = document.getElementById('modals-container');
  container.innerHTML = PROJECTS.map(buildProjectModal).join('');
}


// ── PARTNERS ─────────────────────────────────────────────────

function buildPartners() {
  const row = document.querySelector('.partners-row');
  if (!row) return;
  row.innerHTML = SITE.partners.map(p => {
    if (p.src) {
      return `<img class="partner-logo" src="${esc(p.src)}" alt="${esc(p.name)}" title="${esc(p.name)}">`;
    }
    return `<div class="partner-placeholder"><span>${esc(p.name)}</span></div>`;
  }).join('');
}


// ── CONTACT ──────────────────────────────────────────────────

function buildContact() {
  const c = SITE.contact;
  document.getElementById('contact-email').href = `mailto:${esc(c.email)}`;
  document.getElementById('contact-email').textContent = c.email;
  document.getElementById('contact-linkedin').href = `https://${c.linkedin.replace(/^https?:\/\//,'')}`;
  document.getElementById('contact-linkedin').textContent = c.linkedin;
  document.getElementById('contact-location').textContent = c.location;
}


// ── FOOTER ───────────────────────────────────────────────────

function buildFooter() {
  const el = document.getElementById('footer-copy');
  if (el) el.textContent = `© ${new Date().getFullYear()} ${SITE.name} | Bio-Inspired Agriculture Consultant`;
}


// ── MODAL OPEN / CLOSE ───────────────────────────────────────

function openProject(id) {
  const overlay = document.getElementById('modal-' + id);
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Close on background click
  overlay.onclick = (e) => { if (e.target === overlay) closeProject(id); };
}

function closeProject(id) {
  const overlay = document.getElementById('modal-' + id);
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(el => {
      el.classList.remove('open');
      // Pause any playing videos
      el.querySelectorAll('video').forEach(v => v.pause());
    });
    document.body.style.overflow = '';
  }
});


// ── FILTER BUTTONS ───────────────────────────────────────────

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const show = filter === 'all' || card.dataset.country === filter;
        card.style.display = show ? '' : 'none';
      });
      const featured = document.querySelector('.project-card.featured');
      if (featured) {
        featured.style.gridColumn = (filter === 'all' || filter === PROJECTS.find(p=>p.featured)?.country) ? 'span 2' : '';
      }
    });
  });
}


// ── SCROLL REVEAL ────────────────────────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.expertise-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}


// ── VIDEO SHOWCASE MODAL ────────────────────────────────────

function buildVideoShowcase() {
  const html = `
    <div class="modal-overlay" id="video-showcase-modal">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Project Videos">
        <button class="modal-close" onclick="closeVideoShowcase()" aria-label="Close">\u2715</button>
        <div class="modal-body">
          <div class="modal-meta">
            <span class="project-country">Tanzania</span>
          </div>
          <h2 class="modal-title">Behind the Scenes</h2>
          <div class="video-showcase-grid">
            <div class="video-showcase-item">
              <h3 class="modal-section-title">Project recap</h3>
              <video controls preload="metadata">
                <source src="assets/projects/coffee/TABO.mp4" type="video/mp4">
              </video>
            </div>
            <div class="video-showcase-item">
              <h3 class="modal-section-title">A day in the field</h3>
              <video controls preload="metadata">
                <source src="assets/projects/coffee/TABO_V2.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  document.getElementById('modals-container').insertAdjacentHTML('beforeend', html);
}

function openVideoShowcase() {
  document.querySelectorAll('.modal-overlay.open').forEach(el => {
    el.classList.remove('open');
  });
  const overlay = document.getElementById('video-showcase-modal');
  if (!overlay) return;
  overlay.classList.add('open');
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  overlay.onclick = (e) => { if (e.target === overlay) closeVideoShowcase(); };
}

function closeVideoShowcase() {
  const overlay = document.getElementById('video-showcase-modal');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  overlay.querySelectorAll('video').forEach(v => v.pause());
}


// ── VIDEO TOAST (speech bubble near logo) ───────────────────

function initVideoToast() {
  const toast = document.createElement('div');
  toast.className = 'video-toast';
  toast.id = 'video-toast';
  toast.innerHTML = `
    <button class="video-toast-close" onclick="dismissVideoToast()" aria-label="Dismiss">\u2715</button>
    <p class="video-toast-text">Curious what fieldwork looks like?</p>
    <a class="video-toast-link" onclick="openVideoShowcase(); dismissVideoToast();">Watch videos \u2192</a>
    <div class="video-toast-arrow"></div>`;
  document.body.appendChild(toast);

  let dismissed = false;
  const projects = document.getElementById('projects');
  if (!projects) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (dismissed) return;
      if (entry.isIntersecting) {
        toast.classList.add('visible');
      } else {
        toast.classList.remove('visible');
      }
    });
  }, { threshold: 0.02 });

  observer.observe(projects);

  // Allow manual dismiss (hides for this page session)
  window._dismissVideoToast = () => {
    dismissed = true;
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  };
}

function dismissVideoToast() {
  if (window._dismissVideoToast) window._dismissVideoToast();
}


// ── BOOT ─────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  buildHero();
  buildAbout();
  buildExpertise();
  buildProjectsGrid();
  buildModals();
  buildVideoShowcase();
  buildPartners();
  buildContact();
  buildFooter();
  initFilters();
  initScrollReveal();
  initVideoToast();
});

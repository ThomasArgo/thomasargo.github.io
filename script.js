/* Shared portfolio shell: update this one list to keep every static page in sync. */
const PORTFOLIO_NAV = [
  ['index.html', 'Home'],
  ['projects.html', 'Projects'],
  ['commissions.html', 'Commissions'],
  ['contact.html', 'Contact']
];

const currentPage = location.pathname.split('/').pop() || 'index.html';
const nav = document.querySelector('.site-nav');
if (nav) {
  nav.innerHTML = PORTFOLIO_NAV.map(([href, label]) =>
    `<a href="${href}"${href === currentPage ? ' aria-current="page"' : ''}>${label}</a>`
  ).join('');
}

const toggle = document.querySelector('.menu-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('[data-year]').forEach(element => element.textContent = new Date().getFullYear());
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.13 });
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'));
}

const progress = document.querySelector('.progress i');
if (progress && !reducedMotion) addEventListener('scroll', () => {
  const distance = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${distance ? scrollY / distance : 0})`;
}, { passive: true });

/* The existing TopView.gif is the requested planetary-gear animation. */
const heroMachine = document.querySelector('.hero--maker .hero-machine');
if (heroMachine) {
  heroMachine.classList.add('hero-gear');
  heroMachine.removeAttribute('aria-hidden');
  heroMachine.innerHTML = `<div class="machine-grid" aria-hidden="true"></div><img src="TopView.gif" alt="Animated planetary gear assembly demonstrating mechanical motion"><p><span>Motion study / 01</span>Planetary gear assembly</p>`;
}

// Keep the homepage's fabrication pathway inside the unified portfolio shell.
document.querySelectorAll('.process-rail a').forEach(link => {
  if (link.querySelector('strong')?.textContent.trim() === 'Make') link.href = 'fabrication.html';
});

// Project photography is primary page content, not a deferred thumbnail.
document.querySelectorAll('.gallery--natural img').forEach(image => image.removeAttribute('loading'));

const sharedEnhancements = document.createElement('style');
sharedEnhancements.textContent = `
  .hero-gear { background:#10272e; box-shadow:var(--shadow); }
  .hero-gear img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:.96; mix-blend-mode:screen; }
  .hero-gear .machine-grid { z-index:1; background-image:linear-gradient(rgba(141,218,203,.13) 1px,transparent 1px),linear-gradient(90deg,rgba(141,218,203,.13) 1px,transparent 1px); }
  .hero-gear > p { z-index:2; left:auto; right:1rem; bottom:1rem; padding:.6rem .7rem; border:1px solid rgba(174,229,220,.35); border-radius:.45rem; color:#e6f8f3; background:rgba(9,33,38,.72); backdrop-filter:blur(8px); font-size:.78rem; }
  .hero-gear > p span { display:block; margin-bottom:.2rem; color:#91d7cc; font:500 .65rem 'DM Mono',monospace; letter-spacing:.06em; text-transform:uppercase; }
  .gallery--natural img { aspect-ratio:auto; object-fit:contain; background:#fff; }
  @media (max-width:720px) { .hero--maker { padding:2.8rem 0 3.3rem; } .hero-gear { min-height:16rem; max-width:34rem; } .hero-gear > p { right:.75rem; bottom:.75rem; } }
`;
document.head.append(sharedEnhancements);

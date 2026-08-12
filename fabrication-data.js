/*
  PHYSICAL_PRINTS is the only list you need to edit when adding a real print.
  1. Put your photo in this repository.
  2. Add one object below with its details and category: functional, art, or prototype.
  3. Optional: link cadUrl to the matching CAD/model project.
  Do not add placeholder work here—an empty gallery is shown until real prints are added.
*/
const PHYSICAL_PRINTS = [];

const gallery = document.querySelector('#print-gallery');
const dialog = document.querySelector('#print-dialog');
const detail = document.querySelector('#print-detail');
let activeFilter = 'all';
const categoryLabel = { functional: 'Functional / Engineering', art: 'Art / Models', prototype: 'Prototype' };

function renderPrints() {
  const prints = PHYSICAL_PRINTS.filter(print => activeFilter === 'all' || print.category === activeFilter);
  gallery.innerHTML = prints.length ? prints.map((print, index) => `<article class="print-card" data-print="${index}"><img src="${print.image}" alt="${print.alt || print.title}" loading="lazy"><div><span>${categoryLabel[print.category]}</span><h3>${print.title}</h3><p>${print.description}</p><button>View project ↗</button></div></article>`).join('') : `<div class="print-empty"><p class="section-label">Archive in progress</p><h3>Real physical prints will appear here.</h3><p>Add your first entry in <code>fabrication-data.js</code> with a photo, category, and project details. The gallery and filters update automatically.</p></div>`;
  gallery.querySelectorAll('[data-print]').forEach(card => card.onclick = () => showPrint(prints[Number(card.dataset.print)]));
}
function showPrint(print) {
  detail.innerHTML = `<img src="${print.image}" alt="${print.alt || print.title}"><div><p class="section-label">${categoryLabel[print.category]}</p><h2>${print.title}</h2><p>${print.description}</p><dl>${print.material ? `<div><dt>Material</dt><dd>${print.material}</dd></div>` : ''}${print.printTime ? `<div><dt>Print time</dt><dd>${print.printTime}</dd></div>` : ''}${print.filament ? `<div><dt>Filament</dt><dd>${print.filament}</dd></div>` : ''}</dl>${print.cadUrl ? `<a class="btn" href="${print.cadUrl}">View digital project ↗</a>` : ''}</div>`;
  dialog.showModal();
}
document.querySelectorAll('[data-filter]').forEach(button => button.onclick = () => { activeFilter = button.dataset.filter; document.querySelectorAll('[data-filter]').forEach(x => x.classList.toggle('active', x === button)); renderPrints(); });
document.querySelector('.dialog-close').onclick = () => dialog.close();
renderPrints();

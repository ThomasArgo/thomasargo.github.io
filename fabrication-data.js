/*
  Add future physical prints here. Keep image paths lowercase and place assets in /prints.
  Set featured: true only for a Functional / Engineering case study. Art / Models entries
  must not claim original model authorship unless originalDesign is explicitly true.
*/
const PHYSICAL_PRINTS = [
  {
    id: 'prosthetic-pylon-cover', category: 'functional', featured: true, originalDesign: true,
    title: 'Custom Prosthetic Pylon Cover',
    shortDescription: 'A custom cosmetic cover built from scan-informed geometry and produced as fitted FDM-printed components.',
    description: 'Custom cosmetic pylon cover designed in Blender around a 3D scan of an existing below-knee prosthesis. The cover was designed to surround the exposed pylon and restore the visual profile of a natural lower leg beneath clothing. The project involved working from scanned geometry, designing around existing prosthetic hardware, creating separate fitted components, and producing the final parts through FDM 3D printing.',
    workflow: 'Real-world object → 3D scan → Blender design → FDM print',
    tags: ['Scan-informed design', 'Blender', 'Fitted components', 'FDM printing'],
    images: [
      { src: 'prints/prosthetic-pylon-cover-installed.png', alt: 'Custom black prosthetic pylon cover installed around a below-knee prosthesis' },
      { src: 'prints/prosthetic-pylon-cover-parts.png', alt: 'Two separate black 3D-printed prosthetic pylon cover components' }
    ]
  },
  //Lego Skeleton
  {
    id: 'giant-lego-skeleton', category: 'art', title: 'Giant LEGO Skeleton',
    shortDescription: 'Large-format, multipart FDM printing and assembly in a finished display piece.',
    description: 'A large-format, multipart FDM print assembled into a full display figure.',
    tags: ['Large-format print', 'Multipart assembly'],
    images: [{ src: 'prints/giant-lego-skeleton.png', alt: 'Large white LEGO skeleton 3D print' }]
  },
  //Lego Batman
  {
    id: 'giant-lego-batman', category: 'art', title: 'Giant LEGO Batman',
    shortDescription: 'A large-scale FDM character print with separate parts brought together as a finished figure.',
    description: 'A large-scale FDM print showcasing separate parts and a finished assembled figure.',
    tags: ['Large-format print', 'Assembly'],
    images: [{ src: 'prints/giant-lego-batman.png', alt: 'Large gray and black LEGO Batman 3D print holding a bat-shaped accessory' }]
  },
  //Cyclops
  {
    id: 'cyclops', category: 'art', title: 'Cyclops',
    shortDescription: 'A finished multicolor FDM character print with clearly separated color areas.',
    description: 'A multicolor FDM print prepared and finished as a character display piece.',
    tags: ['Multicolor printing', 'Print preparation'],
    images: [{ src: 'prints/cyclops.png', alt: 'Blue and yellow Cyclops character 3D print' }]
  },
  //Dr Doom
  {
    id: 'dr-doom', category: 'art', title: 'Dr. Doom',
    shortDescription: 'A polished mutlicolor FDM print with impeccable quality.',
    description: 'An FDM character display print with fine details and acrylic painted parts.',
    tags: ['Multicolor printing', 'Finishing'],
    images: [{ src: 'prints/dr-doom.png', alt: 'Green and Metallic Dr. Doom character 3D print' }]
  },
  //Venom Spiderman
  {
    id: 'venom-spiderman', category: 'art', title: 'Venom Spider-Man',
    shortDescription: 'A finished character display print that preserves fine surface and costume details.',
    description: 'An FDM character display print with careful attention to surface-detail reproduction.',
    tags: ['Surface detail', 'Finishing'],
    images: [{ src: 'prints/venom-spiderman.png', alt: 'Black Venom Spider-Man crouching character 3D print' }]
  },
  //Darth Vader Bust
  {
    id: 'darth-vader-bust', category: 'art', title: 'Darth Vader Bust',
    shortDescription: 'A detailed FDM bust print focused on clean silhouette and surface-detail reproduction.',
    description: 'A detailed FDM bust print focused on surface-detail reproduction.',
    tags: ['Surface detail', 'Long-duration print'],
    images: [{ src: 'prints/darth-vader-bust.png', alt: 'Black Darth Vader bust 3D print on a base' }]
  },
  //Mandalorian Bust
  {
    id: 'mandalorian-bust', category: 'art', title: 'Mandalorian Bust',
    shortDescription: 'A detailed FDM bust print that showcases layered armor and costume details.',
    description: 'A detailed FDM bust print prepared as a finished display piece.',
    tags: ['Surface detail', 'Print preparation'],
    images: [{ src: 'prints/mandalorian-bust.png', alt: 'Gray Mandalorian bust 3D print on a round base' }]
  },
  //AT-AT
  {
    id: 'at-at', category: 'art', title: 'AT-AT',
    shortDescription: 'An FDM display print with small mechanical features and a multipart construction.',
    description: 'An FDM print focused on small mechanical details and careful print preparation.',
    tags: ['Mechanical detail', 'Print preparation'],
    images: [{ src: 'prints/at-at.png', alt: 'Dark gray AT-AT walker 3D print' }]
  },
  //Venom Bust
  {
    id: 'venom-bust', category: 'art', title: 'Venom Bust',
    shortDescription: 'A finished FDM bust print with high-contrast character details.',
    description: 'An FDM bust print prepared and finished as a display piece.',
    tags: ['Surface detail', 'Finishing'],
    images: [{ src: 'prints/venom-bust.png', alt: 'Black Venom bust 3D print with white chest emblem' }]
  }
];

const featuredTarget = document.querySelector('#featured-print');
const gallery = document.querySelector('#print-gallery');
const dialog = document.querySelector('#print-dialog');
const detail = document.querySelector('#print-detail');
const categoryLabel = { functional: 'Functional / Engineering', art: 'Art / Models' };

function imageMarkup(image, eager = false) {
  return `<img src="${image.src}" alt="${image.alt}"${eager ? '' : ' loading="lazy"'}>`;
}

function tagMarkup(tags) {
  return `<ul class="print-tags">${tags.map(tag => `<li>${tag}</li>`).join('')}</ul>`;
}

function renderFeatured() {
  const print = PHYSICAL_PRINTS.find(item => item.featured);
  if (!print || !featuredTarget) return;
  featuredTarget.innerHTML = `<article class="print-case-study"><div class="print-case-images">${print.images.map((image, index) => `<button class="print-image-button" type="button" data-open="${print.id}" aria-label="View ${print.title} photo ${index + 1}">${imageMarkup(image, index === 0)}</button>`).join('')}</div><div class="print-case-copy"><p class="section-label">Original design — modeled in Blender &amp; 3D printed</p><h3>${print.title}</h3><p>${print.description}</p><p class="print-workflow">${print.workflow}</p>${tagMarkup(print.tags)}<button class="text-link" type="button" data-open="${print.id}">Inspect case study <span aria-hidden="true">↗</span></button></div></article>`;
}

function renderPrints() {
  const prints = PHYSICAL_PRINTS.filter(print => !print.featured);
  gallery.innerHTML = prints.map(print => `<article class="print-card"><button class="print-image-button" type="button" data-open="${print.id}" aria-label="View ${print.title}">${imageMarkup(print.images[0])}</button><div><p class="card-kicker">FDM print / fabrication</p><h3>${print.title}</h3><p>${print.shortDescription}</p>${tagMarkup(print.tags)}<button class="text-link" type="button" data-open="${print.id}">View print <span aria-hidden="true">↗</span></button></div></article>`).join('');
}

function showPrint(id) {
  const print = PHYSICAL_PRINTS.find(item => item.id === id);
  if (!print) return;
  detail.innerHTML = `<div class="dialog-print-images">${print.images.map(image => imageMarkup(image, true)).join('')}</div><div class="dialog-print-copy"><p class="section-label">${categoryLabel[print.category]}</p><h2>${print.title}</h2><p>${print.description}</p><p class="dialog-authorship">${print.originalDesign ? 'Original design — modeled in Blender and physically 3D printed.' : 'Fabricated from an existing model file; original model authorship is not claimed.'}</p>${print.workflow ? `<p class="print-workflow">${print.workflow}</p>` : ''}${tagMarkup(print.tags)}</div>`;
  dialog.showModal();
}

document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-open]');
  if (trigger) showPrint(trigger.dataset.open);
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

renderFeatured();
renderPrints();

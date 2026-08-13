// Replace this single value if the published Google Form URL ever changes.
const COMMISSION_FORM_URL = 'https://forms.gle/bzg3b7iMU9ZqogFy5';

document.querySelectorAll('[data-commission-link]').forEach(link => {
  link.href = COMMISSION_FORM_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

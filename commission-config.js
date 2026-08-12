// Replace this single value with your published Google Form URL.
const COMMISSION_FORM_URL = 'YOUR_GOOGLE_FORM_URL_HERE';

document.querySelectorAll('[data-commission-link]').forEach(link => {
  link.href = COMMISSION_FORM_URL;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  if (COMMISSION_FORM_URL === 'YOUR_GOOGLE_FORM_URL_HERE') {
    link.addEventListener('click', event => {
      event.preventDefault();
      alert('Add your Google Form URL in commission-config.js before accepting requests.');
    });
  }
});

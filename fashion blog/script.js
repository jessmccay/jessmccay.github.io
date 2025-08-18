// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Sticky nav shadow on scroll
const header = document.querySelector('.site-header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY || window.pageYOffset;
  if (y > 8 && y > lastY){ header.classList.add('sticky-shadow'); }
  if (y <= 8){ header.classList.remove('sticky-shadow'); }
  lastY = y;
});

// Lookbook filters
const chips = document.querySelectorAll('.chip');
const looks = document.querySelectorAll('.look');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.classList.remove('is-active'));
  chip.classList.add('is-active');
  const tag = chip.dataset.filter;
  looks.forEach(look => {
    const show = tag === 'all' || (look.dataset.tags || '').includes(tag);
    look.style.display = show ? '' : 'none';
  });
}));

// Newsletter form (demo)
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const msg = document.getElementById('formMsg');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = (email?.value || '').trim();
    const isValid = /[^@\s]+@[^@\s]+\.[^@\s]+/.test(value);
    if (!isValid){ msg.textContent = 'Please enter a valid email.'; msg.style.color = '#b00020'; return; }
    msg.textContent = 'Thanks! You\'re on the list.'; msg.style.color = 'green';
    form.reset();
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl){ yearEl.textContent = new Date().getFullYear(); }

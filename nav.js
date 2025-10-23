// js/nav.js

// hamburger toggle
const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
toggleBtn?.addEventListener('click', () => {
  const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('open');
});

// highlight current page
const currentFile = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a[href]').forEach(a => {
  if (a.getAttribute('href') === currentFile) {
    a.setAttribute('aria-current', 'page');
  }
});

// dropdown toggle
document.querySelectorAll('.dropdown').forEach(drop => {
  const btn = drop.querySelector('.dropbtn');
  const menu = drop.querySelector('.dropdown-menu');
  btn.addEventListener('click', e => {
    e.preventDefault();
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open');
  });
});

// language switcher
document.querySelectorAll('.lang-switch a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const lang = a.dataset.lang;
    const file = currentFile.replace(/(_de)?\.html$/, lang === 'de' ? '_de.html' : '.html');
    location.href = file;
  });
});

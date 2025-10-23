const navPlaceholder = document.getElementById('nav-placeholder');
if (navPlaceholder) {
  fetch('nav.html')
    .then(res => res.text())
    .then(html => {
      navPlaceholder.innerHTML = html;
      const temp = document.createElement('div');
      temp.innerHTML = html;
      temp.querySelectorAll('script').forEach(scr => {
        const s = document.createElement('script');
        if (scr.src) s.src = scr.src;
        else s.textContent = scr.textContent;
        document.body.appendChild(s);
      });
    });
}

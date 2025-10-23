const navPlaceholder = document.getElementById('nav-placeholder');
if (navPlaceholder) {
  fetch('nav.html')
    .then(res => res.text())
    .then(html => {
      navPlaceholder.innerHTML = html;

      // nav.html içindeki <script> etiketlerini çalıştır
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      tempDiv.querySelectorAll('script').forEach(scr => {
        const s = document.createElement('script');
        if (scr.src) s.src = scr.src;
        else s.textContent = scr.textContent;
        document.body.appendChild(s);
      });
    })
    .catch(err => console.error('Navigation load error:', err));
}


// navLoader.js
const navPlaceholder = document.getElementById('nav-placeholder');
if (navPlaceholder) {
  fetch('nav.html')
    .then(res => res.text())
    .then(html => {
      // nav.html içeriğini yerleştir
      navPlaceholder.innerHTML = html;

      // Eklenen içeriğin içindeki <script> etiketlerini çalıştır
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      const scripts = tempDiv.querySelectorAll('script');

      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        if (oldScript.src) {
          newScript.src = oldScript.src; // harici script varsa
        } else {
          newScript.textContent = oldScript.textContent; // inline script
        }
        document.body.appendChild(newScript);
      });
    })
    .catch(err => console.error('Navigation load error:', err));
}

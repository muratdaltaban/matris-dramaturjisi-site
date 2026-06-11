// Her sayfada çağrılan ortak DOM ekleyici
(function(){
  var current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if(!current.endsWith('.html')) current = 'index.html';

  var links = [
    { href: 'index.html', label: 'Manifesto' },
    { href: 'kurallar.html', label: 'Sekiz Kural' },
    { href: 'model.html', label: 'Model' },
    { href: 'karsilastirma.html', label: 'Karşılaştırma' },
    { href: 'kitap.html', label: 'Kitap' },
    { href: 'uygulama.html', label: 'Uygulama' },
    { href: 'kilavuz.html', label: 'Kılavuz' },
    { href: 'iletisim.html', label: 'İletişim' }
  ];

  // Logo
  var logo = document.createElement('a');
  logo.className = 'dot-logo';
  logo.href = 'index.html';
  logo.setAttribute('aria-label', 'DOT Theatre');
  logo.innerHTML = '<img src="assets/dot.gif" alt="DOT">';
  document.body.appendChild(logo);

  // Nav
  var nav = document.createElement('nav');
  nav.className = 'nav';
  var html = '';
  links.forEach(function(l){
    var active = (l.href === current) ? ' class="active"' : '';
    html += '<a href="' + l.href + '"' + active + '>' + l.label + '</a>';
  });
  nav.innerHTML = html;
  document.body.appendChild(nav);

  // Murat etiketi
  var tag = document.createElement('div');
  tag.className = 'murat-tag';
  tag.textContent = 'by Murat Daltaban';
  document.body.appendChild(tag);

  // Arkaplan motif
  var bg = document.createElement('div');
  bg.className = 'bg-marks';
  document.body.appendChild(bg);
})();

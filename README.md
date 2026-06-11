# Matris Dramaturjisi — Web Sitesi

Murat Daltaban'ın DOT Theatre için geliştirdiği matris dramaturjisi çerçevesinin web sitesi. Statik, tek klasör. Netlify, Vercel, GitHub Pages veya herhangi bir statik host'ta çalışır.

## Yapı

```
site/
├── index.html              # Manifesto (anasayfa)
├── kurallar.html           # Sekiz Temel Kural
├── model.html              # Spiraller, kesişimler, eşikler
├── karsilastirma.html      # Üç klasik modelle karşılaştırma
├── kitap.html              # Kitap tanıtım sayfası (indirme + bölüm listesi)
├── kitap-oku.html          # Kitabın kendisi — tarayıcıda okunur (v1.0)
├── uygulama.html           # Uygulama (iframe içinde)
├── kilavuz.html            # Kullanım kılavuzu (indirme + gömülü PDF)
├── iletisim.html           # İletişim
├── uygulama-iframe.html    # Asıl uygulama dosyası (gömülü)
├── style.css               # Ortak stil
├── site.js                 # Ortak nav + logo + Murat etiketi
├── netlify.toml            # Netlify yapılandırması (+/kitap, /oku, /paket kısa URL'leri)
├── robots.txt              # SEO
└── assets/
    ├── dot.gif
    ├── Matris-Dramaturjisi-Kullanim-Kilavuzu.pdf   # güncel kılavuz
    ├── Matris-Dramaturjisi-Kullanim-Kilavuzu.docx
    └── matris-dramaturjisi-kitap-paketi.zip        # kitap + uygulama + kılavuz paketi
```

## Netlify'a Yükleme

### Drag & Drop ile
1. Bu klasörü zip'leyin (`site.zip`)
2. https://app.netlify.com/drop adresine gidin
3. ZIP'i sürükleyin
4. Site otomatik yayınlanır

### Git ile
1. Bu klasörü bir Git deposuna (GitHub, GitLab, vs.) commit edin
2. Netlify'da "Add new site" → "Import an existing project"
3. Deponuzu seçin
4. Build settings: yok, publish directory: `.`
5. Deploy

### Komut satırından
```bash
npm install -g netlify-cli
cd site
netlify deploy --prod
```

## Domain Bağlama

Netlify dashboard → Site settings → Domain management → Add custom domain.

Önerilen: `matrisdramaturjisi.com` veya benzeri.

## Geliştirme

Lokal olarak çalıştırmak için (basit Python sunucusu):

```bash
cd site
python3 -m http.server 8000
# tarayıcıda: http://localhost:8000
```

## Notlar

- Uygulama (`uygulama-iframe.html`) iframe içinde çalışır. Claude API'ye doğrudan tarayıcıdan erişim gerektirir; kullanıcı kendi API anahtarını girer.
- Veriler kullanıcının tarayıcısında kalır (localStorage). Sunucuya hiçbir veri gönderilmez.
- Logo (assets/dot.gif) DOT Theatre'a aittir.

// Scroll lin la secțiuni când apeși pe butoanele din meniu
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 64; // înălțimea meniului
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Meniu mobil (hamburger)
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Când dai click pe un link din meniu pe mobil, închidem meniul
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
    });
  });
}


// Lightbox pentru poze din galerie
const galerieImagini = document.querySelectorAll('.galerie-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

galerieImagini.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

// Închide lightbox la X sau click pe fundal
if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightbox.classList.add('hidden');
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
    }
  });
}

// Setează automat anul curent în footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Butonul "Trimite mesaj" doar afișează un mesaj de confirmare local
const contactButton = document.querySelector('.contact-form button');
if (contactButton) {
  contactButton.addEventListener('click', () => {
    alert('Mulțumesc pentru mesaj! Pentru trimitere reală, va trebui ulterior configurat un backend sau un serviciu de email.');
  });
}

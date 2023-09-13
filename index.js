const nav_container = document.querySelector('.nav-container');
const nav = document.querySelector('.nav');
const menu_Btn = document.querySelector('#menu-btn');
const menu_Btn_Dash = document.querySelectorAll('#menu-btn .menu-dash');
// const nav_Links = document.querySelectorAll('nav li');
const faq = document.querySelectorAll('.faqs .faq');
const hero_section = document.getElementById('hero');
const footer_section = document.getElementById('footer');
const contact_section = document.getElementById('contact');
const social_links = document.getElementById('socials');
const gallery = document.getElementById('gallery');
const gallery_section = document.getElementById('gallery-container');
const gallery_closebtn = document.getElementById('gallery-close');
const gallery_btns = document.getElementById('gallery-btns');
const gallery_imgs = document.getElementById('gallery-imgs');
const icon = document.getElementById('logo');
const body = document.querySelector('body');

// Sticky Menu
window.addEventListener('scroll', () => {
  if (window.scrollY > hero_section.offsetTop) {
    nav_container.classList.add('sticky');
    body.classList.add('sticky');
    nav.classList.add('sticky');
  } else {
    nav_container.classList.remove('sticky');
    nav.classList.remove('sticky');
    body.classList.remove('sticky');
  }
});

window.addEventListener('scroll', () => {
  if (contact_section) {
    if (
      window.scrollY <= hero_section.offsetTop + 80 ||
      // window.scrollY >= footer_section.offsetTop - 145
      window.scrollY > contact_section.offsetTop + 340
    ) {
      social_links.classList.remove('sticky');
    } else {
      social_links.classList.add('sticky');
    }
  }
});

// Menu Button
window.addEventListener('click', (e) => {
  if (e.target === icon) {
    window.location = '/index.html';
  }
  if (e.target.classList.contains('nav-li')) {
    return;
  }
  if (e.target === menu_Btn) {
    nav.classList.toggle('open');
    menu_Btn_Dash.forEach((dash) => {
      dash.classList.toggle('flip');
    });
  } else {
    nav.classList.remove('open');
    menu_Btn_Dash.forEach((dash) => {
      dash.classList.remove('flip');
    });
  }
});

// Fact Buttons
if (faq) {
  faq.forEach((faq) => {
    faq.addEventListener('click', () => {
      if (!faq.childNodes[5].classList.contains('open')) {
        closeFaqs();

        faq.childNodes[5].classList.toggle('open');
        faq.childNodes[1].classList.toggle('open');
      } else {
        faq.childNodes[5].classList.toggle('open');
        faq.childNodes[1].classList.toggle('open');
      }
    });
  });
  function closeFaqs() {
    faq.forEach((item) => {
      item.childNodes[5].classList.remove('open');
      item.childNodes[1].classList.remove('open');
    });
  }
}

const imageGallery_pics = [
  '/images/fortyshow.jpg',
  '/images/ford.jpg',
  '/images/lac.jpg',
  '/images/riviara.jpg',
  '/images/slamtruck.jpg',
  '/images/chevelle.jpg',
  '/images/belair.jpg',
  '/images/belairside.jpg',
];

// Render Gallery Pics
const renderGallery = function () {
  idx = 0;
  imageGallery_pics.map((image) => {
    gallerypic = document.createElement('img');
    gallerypic.src = imageGallery_pics[idx];
    gallerypic.classList.add('gallery-pic');
    idx++;
    gallery_imgs.appendChild(gallerypic);
  });
  document.querySelectorAll('.gallery-pic')[0].classList.add('active');
  galleryBtns();
};

// Navigate Gallery Pics
const galleryBtns = function () {
  idx = 0;
  imageGallery_pics.map((imagebtn) => {
    gallerybtn = document.createElement('div');
    gallerybtn.classList.add('img-btn');
    idx++;
    gallery_btns.appendChild(gallerybtn);
  });
  document.querySelectorAll('.img-btn')[0].classList.add('active');

  document.querySelectorAll('.img-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      stopGallery();
      index < document.querySelectorAll('.gallery-pic').length - 1
        ? (idx = index)
        : (idx = 0);
      startGallery();
      document.querySelectorAll('.gallery-pic').forEach((pic) => {
        pic.classList.remove('active');
      });
      document.querySelectorAll('.img-btn').forEach((btn) => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.gallery-pic')[index].classList.add('active');
      document.querySelectorAll('.img-btn')[index].classList.add('active');
    });
  });

  idx = 0;
  startGallery();
  function startGallery() {
    galleryInterval = setInterval(() => playGallery(), 3000);
  }
  function playGallery() {
    if (idx > document.querySelectorAll('.gallery-pic').length - 1) {
      idx = 0;
    }
    document.querySelectorAll('.gallery-pic').forEach((pic) => {
      pic.classList.remove('active');
    });
    document.querySelectorAll('.gallery-pic')[idx].classList.add('active');
    document.querySelectorAll('.img-btn').forEach((btn) => {
      btn.classList.remove('active');
    });
    document.querySelectorAll('.img-btn')[idx].classList.add('active');
    idx++;
  }
  function stopGallery() {
    clearInterval(galleryInterval);
  }

  window.addEventListener('click', (e) => {
    if (e.target == gallery_closebtn || e.target == gallery) {
      gallery.classList.toggle('active');
    }
  });
};
renderGallery();

const loadGallery = function () {
  gallery.classList.toggle('active');
};

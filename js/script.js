let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 4000);
    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 4300);
  });
});

// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tab Sejarah dan Struktur Organisasi
const allIndicator = document.querySelectorAll(".indicator li");
const allContent = document.querySelectorAll(".content section");

allIndicator.forEach((item) => {
  item.addEventListener("click", function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach((i) => {
      i.classList.remove("active");
    });

    allContent.forEach((i) => {
      i.classList.remove("active");
    });

    content.classList.add("active");
    this.classList.add("active");
  });
});

// Slider Kegiatan Terbaru
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",

  // Pagination Bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation Arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    lockclass: "swiper-button-lock",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    520: {
      slidesPerView: 2,
    },

    540: {
      slidesPerView: 2,
    },

    950: {
      slidesPerView: 3,
    },
  },
});

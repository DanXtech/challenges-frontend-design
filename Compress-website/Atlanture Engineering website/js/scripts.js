const menuToggler = document.querySelector('.menu-toggler');
const menu = document.querySelector('#navigation');
const servicesCardsContainer = document.querySelector(".services-carousel")
const footerCta = document.querySelector(".footer-cta")
const servicesCards = [...document.querySelectorAll(".services-carousel_card")]

$(document).ready(function () {
   $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      nav: true,
      dots: true,
      autoPlaySpeed: 1000,
      autoPlayHoverPause: true,
   })
})

menuToggler.addEventListener('click', function () {
   this.classList.toggle('active');
   menu.classList.toggle('active');
});




AOS.init();

// })

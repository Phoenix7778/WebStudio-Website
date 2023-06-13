// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
  watchOverflow: true,
  centeredSlides: true,
  autoplay: {
    delay: 2000, // Change the delay (in milliseconds) as per your preference
    disableOnInteraction: false, // Autoplay continues even when user interacts with swiper
  },
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  centeredSlides: true,
  breakpoints: {
    // When screen width is more than 768px
    768: {
      slidesPerView: 3,
      centeredSlides: false,
      autoplay: {
        delay: 0,
  },
speed: 500,
    },
    // When screen width is more than 1280px
    1280: {
      slidesPerView: 6,
      centeredSlides: false,
    },
  },
});

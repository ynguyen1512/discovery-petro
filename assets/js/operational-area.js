document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
      // 790: {
      //   slidesPerView: 3,
      //   spaceBetween: 100,
      // },
      390: {
        slidesPerView: 2, // Show 5 slides on screens wider than 768px
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 5, // Show 3 slides on screens wider than 390px
        spaceBetween: 0,
        loop: false,
        autoplay: false,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});

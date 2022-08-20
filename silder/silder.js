

// const swiperParams = {
//    slidesPerView: 1,
//    spaceBetween: 30,
//    centeredSlides: true,
//    grabCursor: true,
//    loop: true,
//    loopFillGroupWithBlank: true,
//    // effect: "fade",
//    autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//    pagination: {
//      el: ".swiper-pagination",
//      clickable: true,
//    },
//    navigation: {
//      nextEl: ".swiper-button-next",
//      prevEl: ".swiper-button-prev",
//    },
// };

// const vrdogBanner = new Swiper('.vrdog__slider', swiperParams);
// const vrdogTestimonial = new Swiper('.swiper__testimonial', swiperParams,);




var slider1 = new Swiper ('.vrdog__slider', {
  effect: 'cube',
  
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


var slider2 = new Swiper ('.swiper__testimonial', {
  
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


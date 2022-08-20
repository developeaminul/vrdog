

const swiperParams = {
   slidesPerView: 1,
   spaceBetween: 30,
   centeredSlides: true,
   grabCursor: true,
   loop: true,
   loopFillGroupWithBlank: true,
   // effect: "fade",
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
};

const vrdogBanner = new Swiper('.vrdog__slider', swiperParams);
const vrdogTestimonial = new Swiper('.swiper__testimonial', swiperParams,);




/**
 * 
 
var swiper = new Swiper(".vrdog__slider", {
   slidesPerView: 1,
   spaceBetween: 30,
   centeredSlides: true,
   grabCursor: true,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

 * 
 */


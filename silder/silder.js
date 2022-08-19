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
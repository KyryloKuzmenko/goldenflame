import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


document.addEventListener('DOMContentLoaded', () => {

  const swiper1 = new Swiper('.reviews-swiper-1', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    mousewheel: true,
    initialSlide: 2,
    breakpoints: {
      1200: {
        loop: false,
        initialSlide: 0,
        slidesPerView: 2.5,
        centeredSlides: false,
        slidesOffsetBefore: 70,
        slidesOffsetAfter: 70,
      },
    },
  });

  const swiper2 = new Swiper('.reviews-swiper-2', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    mousewheel: true,
    initialSlide: 3,
    breakpoints: {
      1200: {
        loop: false,
        initialSlide: 4,
        slidesPerView: 2.5,
        centeredSlides: false,
        slidesOffsetBefore: 70,
        slidesOffsetAfter: 70,
      },
    },
  });

});
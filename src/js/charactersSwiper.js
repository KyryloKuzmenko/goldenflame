import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let characterSwiper = null;

function initCharacterSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !characterSwiper) {
    characterSwiper = new Swiper('.characters-swiper', {
      spaceBetween: 10,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
    });
  }

  if (!isMobile && characterSwiper) {
    characterSwiper.destroy(true, true);
    characterSwiper = null;
  }
}

window.addEventListener('load', initCharacterSwiper);
window.addEventListener('resize', initCharacterSwiper);

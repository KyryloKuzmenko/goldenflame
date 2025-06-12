import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let gallerySwiper = null;

function initGallerySwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      loop: true,
      spaceBetween: 12,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
      initialSlide: 1,
    });
  }

  if (!isMobile && gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }

  const hiddenSlides = document.querySelectorAll('.gallery-hidden-slide');
  hiddenSlides.forEach(slide => {
    if (window.innerWidth >= breakpoint) {
      slide.remove();
    }
  });
}

window.addEventListener('load', initGallerySwiper);
window.addEventListener('resize', initGallerySwiper);

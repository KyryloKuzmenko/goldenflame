import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let htpSwiper = null;

function initHtpSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !htpSwiper) {
    htpSwiper = new Swiper('.htp-swiper', {
      loop: true,
      spaceBetween: 12,
      slidesPerView: 'auto',
      mousewheel: true,
      centeredSlides: true,
      initialSlide: 1,

    });
  }



  if (!isMobile && htpSwiper) {
    htpSwiper.destroy(true, true);
    htpSwiper = null;
  }

  const hiddenSlides = document.querySelectorAll('.htp-hidden-slide');
  hiddenSlides.forEach(slide => {
    if (window.innerWidth >= breakpoint) {
      slide.remove(); 
    }
  });

}

window.addEventListener('load', initHtpSwiper);
window.addEventListener('resize', () => {
  initHtpSwiper();
});



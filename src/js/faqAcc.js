document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const openBtn = item.querySelector('.faq-open-acc');
    const closeBtn = item.querySelector('.faq-close-acc');
    const answer = item.querySelector('.faq-answer');

    // Клик по кнопке "открыть"
    openBtn.addEventListener('click', e => {
      e.stopPropagation(); // не пускаем событие выше
      item.classList.add('active');
    });

    // Клик по кнопке "закрыть"
    closeBtn.addEventListener('click', e => {
      e.stopPropagation();
      item.classList.remove('active');
    });

    // Клик по всей карточке
    item.addEventListener('click', e => {
      // если клик по .faq-answer — ничего не делать
      if (e.target.closest('.faq-answer')) return;

      // переключить класс
      item.classList.toggle('active');
    });
  });
});

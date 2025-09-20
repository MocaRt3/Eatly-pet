document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.navigation__burger');
    const burgerMenu = document.querySelector('.burger-mobile-modal');
    
    // Добавляем обработчик клика на весь документ один раз
    document.addEventListener('click', (e) => {
        // Если клик был не внутри burger-menu, скрываем его
        if (!e.target.closest('.burger-mobile-modal')) {
            burgerMenu.classList.remove('burger-mobile-modal_active');
        }
    });

    burgerIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Останавливаем всплытие события
        burgerMenu.classList.toggle('burger-mobile-modal_active');
    });
});
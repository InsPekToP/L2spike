// Получаем все ссылки навигации
const navLinks = document.querySelectorAll('.nav a');

// Добавляем обработчик событий на каждую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Убираем класс 'active' у всех ссылок
        navLinks.forEach(link => link.classList.remove('active'));

        // Добавляем класс 'active' к нажатой ссылке
        this.classList.add('active');
    });
});
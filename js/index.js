// Получаем все ссылки навигации
const navLinks = document.querySelectorAll('.nav a');

// Получаем лого
const logo = document.querySelector('.logo');

// Добавляем обработчик событий на каждую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Убираем класс 'active' у всех ссылок
        navLinks.forEach(link => link.classList.remove('active'));

        // Добавляем класс 'active' к нажатой ссылке
        this.classList.add('active');
    });
});

// Добавляем обработчик событий на лого
logo.addEventListener('click', function() {
    // Убираем класс 'active' у всех ссылок
    navLinks.forEach(link => link.classList.remove('active'));

    // Добавляем класс 'active' к ссылке "Главная"
    document.querySelector('.nav a[href="#home"]').classList.add('active');
});


let menu = document.querySelector('#menu');
let openMenu = document.querySelector('header');
let navLinksHead = document.querySelectorAll('.navbar'); // выбираем все элементы навигации

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    openMenu.classList.toggle('active')
}

//Добавляем обработчик события для каждого элемента навигации
navLinksHead.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('fa-times'); // закрываем меню
        openMenu.classList.remove('active'); // закрываем меню
    }
});

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

//Скрипт для скрола
let section = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec =>{

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        }
    });
};
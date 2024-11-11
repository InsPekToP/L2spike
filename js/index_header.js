let menu = document.querySelector('#menu');
let openMenu = document.querySelector('header');
let navLinks = document.querySelectorAll('.navbar'); // выбираем все элементы навигации

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    openMenu.classList.toggle('active')
}

//Добавляем обработчик события для каждого элемента навигации
navLinks.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('fa-times'); // закрываем меню
        openMenu.classList.remove('active'); // закрываем меню
    }
});
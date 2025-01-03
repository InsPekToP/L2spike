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
const navLinks = document.querySelectorAll('.navbar a');

// Получаем лого
const logo = document.querySelector('.logo');

// Добавляем обработчик событий на каждую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Убираем класс 'activate' у всех ссылок
        navLinks.forEach(link => link.classList.remove('activate'));

        // Добавляем класс 'activate' к нажатой ссылке
        this.classList.add('activate');
    });
});

// Добавляем обработчик событий на лого
logo.addEventListener('click', function() {
    // Убираем класс 'activate' у всех ссылок
    navLinks.forEach(link => link.classList.remove('activate'));

    // Добавляем класс 'active' к ссылке "Главная"
    document.querySelector('.navbar a[href="#home"]').classList.add('activate');
});

//Скрипт для скрола
let section = document.querySelectorAll('section');
let links = document.querySelectorAll('header .navbar a');

let isScrolling;  // переменная для контроля состояния скроллинга

window.onscroll = () => {
    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                links.forEach(link => link.classList.remove('activate'));
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('activate');
            }
        });
    }, 100);  // скрипт обновляется раз в 100 мс при прокрутке
};


// Функция для показа формы
function showForm() {
    var form = document.getElementById("linkForm");
    var overlay = document.querySelector(".modal-overlay");

    form.classList.add("show");
    overlay.classList.add("show");
}

function hideForm() {
    var form = document.getElementById("linkForm");
    var overlay = document.querySelector(".modal-overlay");

    form.classList.remove("show");
    overlay.classList.remove("show");
}

//Accordion
document.addEventListener("DOMContentLoaded", function () {
    // Link action
    document.querySelectorAll(".action").forEach(function (actionElement) {
        actionElement.addEventListener("click", function (e) {
            e.preventDefault();

            // Удаляем класс "active" у всех элементов с классом "slide"
            document.querySelectorAll(".slide").forEach(function (slideElement) {
                slideElement.classList.remove("active");
            });

            // Добавляем класс "active" к ближайшему родителю с классом "slide"
            var slide = this.closest(".slide");
            if (slide) {
                slide.classList.add("active");
            }
        });
    });
});

// Check width
function checkWidth() {
    var windowSize = window.innerWidth; // Получаем ширину окна
    if (windowSize > 480) {
        var activeSlide = document.querySelector(".slide.active");
        if (activeSlide) {
            var slideWidth = activeSlide.offsetWidth; // Получаем ширину активного слайда
            document.querySelectorAll(".slide-content").forEach(function (contentElement) {
                contentElement.style.width = slideWidth + "px"; // Устанавливаем ширину
            });
        }
    }
}

// Обработчик события resize
window.addEventListener("resize", function () {
    // Вызываем checkWidth при изменении размера окна
    checkWidth();

    // Таймер для завершения resize
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(checkWidth, 500);
});

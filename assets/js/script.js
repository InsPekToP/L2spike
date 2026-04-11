//NAVBAR

'use strict';

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});


for (let i= 0; i<navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click", function(){
        navbar.classList.remove("active");
        navbarToggler.classList.remove("active");
    });
}



//SEARCH TOGGLE

const searchToglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i<searchToglers.length; i++){
    searchToglers[i].addEventListener("click", function(){
        searchBox.classList.toggle("active");
    });
}



// HEADER end BACK TO TOP

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const socialBlock = document.querySelector("[data-social]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 400){
        header.classList.add("active");
        backTopBtn.classList.add("active");
        socialBlock.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
        socialBlock.classList.remove("active");
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    if (!playButton) return; // Если кнопки нет — прерываем выполнение скрипта

    playButton.addEventListener('click', function () {
        const videoWrapper = document.getElementById('videoWrapper');

        // Вставляем iframe с автозапуском
        videoWrapper.innerHTML = `
            <iframe width="100%" height="100%"
                src="https://www.youtube.com/embed/Mr3ywMTaqoU?autoplay=1&rel=0&showinfo=0"
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen
                class="img-cover">
            </iframe>
        `;
    });
});



// ABOUT

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionBody = button.nextElementSibling;

        document.querySelectorAll('.accordion-body').forEach(body => {
            if (body !== accordionBody) {
                body.classList.remove('show');
            }
        });

        document.querySelectorAll('.accordion-button').forEach(btn => {
            if (btn !== button) {
                btn.classList.remove('active');
            }
        });

        accordionBody.classList.toggle('show');
        button.classList.toggle('active');
    });
});


// MODAL WINDOW
function showNotice(e) {
  e.preventDefault(); // отменяем переход
  document.getElementById('notice-modal').style.display = 'flex';
}

function closeNotice(e) {
  document.getElementById('notice-modal').style.display = 'none';
}

// onclick="showNotice(event)" - добавить к ссылкам,если не действительны


// LANGUAGE SWITCHER
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.classList.toggle('show');
  });

  // Закрыть меню при клике вне
  document.addEventListener('click', () => {
    langMenu.classList.remove('show');
  });
});



// Таймер обратного отсчёта

const launchYear = 2026;
const launchMonth = 3; // 11й-декабрь(месяцы в JS: 0-11)
const launchDay = 11;
const launchHourUTC = 17;   // 20:00 Kyiv = 18:00 UTC(Зимой) (Писать 18(Зимой)-17(Летом) поскольку +2)
const launchMinute = 0;
const launchSecond = 0;

// Текущее время — в чистом UTC (Date.now() уже даёт UTC-таймстамп)
function getCurrentUTCTime() {
    return new Date(); // Просто new Date() — это текущее время, таймстамп в UTC
}

// Целевая дата в UTC:
const launchDate = new Date(Date.UTC(launchYear, launchMonth, launchDay, launchHourUTC, launchMinute, launchSecond));

// Функции склонения RU
function declOfDays(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'ДЕНЬ';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'ДНЯ';
    return 'ДНЕЙ';
}
function declOfHours(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'ЧАС';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'ЧАСА';
    return 'ЧАСОВ';
}
function declOfMinutes(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'МИНУТА';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'МИНУТЫ';
    return 'МИНУТ';
}
function declOfSeconds(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'СЕКУНДА';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'СЕКУНДЫ';
    return 'СЕКУНД';
}

// Функции склонения UA
function declOfDaysUa(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'ДЕНЬ';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'ДНІ';
    return 'ДНІВ';
}
function declOfHoursUa(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'ГОДИНА';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'ГОДИНИ';
    return 'ГОДИН';
}
function declOfMinutesUa(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'ХВИЛИНА';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'ХВИЛИНИ';
    return 'ХВИЛИН';
}
function declOfSecondsUa(n) {
    if (n % 10 === 1 && n % 100 !== 11) return 'СЕКУНДА';
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return 'СЕКУНДИ';
    return 'СЕКУНД';
}

function updateCountdown() {
    const nowUTC = getCurrentUTCTime();
    const distance = launchDate.getTime() - nowUTC.getTime();

    // Если сервер уже открыт
    if (distance < 0) {
        if (document.getElementById('countdown-en')) {
            document.getElementById('countdown-en').innerHTML = 'SERVER IS LIVE!';
        }
        if (document.getElementById('countdown-ru')) {
            document.getElementById('countdown-ru').innerHTML = 'СЕРВЕР ОТКРЫТ!';
        }
        if (document.getElementById('countdown-ua')) {
            document.getElementById('countdown-ua').innerHTML = 'СЕРВЕР ВІДКРИТО!';
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Английская версия
    const timeStringEn = `${days} ${days === 1 ? 'DAY' : 'DAYS'} / ${hours.toString().padStart(2, '0')} HOURS / ${minutes.toString().padStart(2, '0')} MINUTES / ${seconds.toString().padStart(2, '0')} SECONDS`;

    // Русская версия
    const timeStringRu = `${days} ${declOfDays(days)} / ${hours.toString().padStart(2, '0')} ${declOfHours(hours)} / ${minutes.toString().padStart(2, '0')} ${declOfMinutes(minutes)} / ${seconds.toString().padStart(2, '0')} ${declOfSeconds(seconds)}`;

    // Украинская версия
    const timeStringUa = `${days} ${declOfDaysUa(days)} / ${hours.toString().padStart(2, '0')} ${declOfHoursUa(hours)} / ${minutes.toString().padStart(2, '0')} ${declOfMinutesUa(minutes)} / ${seconds.toString().padStart(2, '0')} ${declOfSecondsUa(seconds)}`;

    if (document.getElementById('countdown-en')) {
        document.getElementById('countdown-en').innerHTML = timeStringEn;
    }
    if (document.getElementById('countdown-ru')) {
        document.getElementById('countdown-ru').innerHTML = timeStringRu;
    }
    if (document.getElementById('countdown-ua')) {
        document.getElementById('countdown-ua').innerHTML = timeStringUa;
    }
}

// Запуск
updateCountdown();
setInterval(updateCountdown, 1000);

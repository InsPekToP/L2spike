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

window.addEventListener("scroll", function() {
    if (window.scrollY >= 400){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

// document.getElementById('playButton').addEventListener('click', function() {
//     document.getElementById('videoContainer').style.display = 'block';
//     document.querySelector('.live-match-banner').style.display = 'none';
// });

document.getElementById('playButton').addEventListener('click', function() {
    const videoWrapper = document.getElementById('videoWrapper');

    // Вставляем iframe с автозапуском
    videoWrapper.innerHTML = `
        <iframe width="800" height="470"
            src="https://www.youtube.com/embed/n6mE0uIkpJQ?autoplay=1&rel=0&showinfo=0"
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
        </iframe>
    `;
});
// $(document).ready(function(){
    
//     //link action
//     $(".action").click(function(e){
//         e.preventDefault();

//         $(".slide").removeClass("active");
//         var slide = $(this).closest(".slide");
//         slide.addClass("active");
//     });
// });

// //check width

// checkWidth = function(){
//     var windowSize = $(window).width();
//     if(windowSize > 480){
//         var slideWidth = $(".active").width();
//         $(".slide-content").css(
//             {
//                 "width": slideWidth+"px"
//             }
//         )
//     }
// }

// $(window).resize(function(){
//     //onresize

//     checkWidth()

//     //finish resize
//     clearTimeout(window.resizedFinished);
//     window.resizedFinished = setTimeout(checkWidth, 500);
// })

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



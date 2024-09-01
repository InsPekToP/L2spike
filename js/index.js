document.addEventListener('DOMContentLoaded', function() {
    var bgVideo = document.getElementById('bgvideo');
    if (window.innerWidth < 768) {
        bgVideo.parentNode.removeChild(bgVideo); // Удаляем видео на мобильных устройствах
    }
});

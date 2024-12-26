$(document).ready(function(){
    
    //link action
    $(".action").click(function(e){
        e.preventDefault();

        $(".slide").removeClass("active");
        var slide = $(this).closest(".slide");
        slide.addClass("active");
    });
});

//check width

checkWidth = function(){
    var windowSize = $(window).width();
    if(windowSize > 480){
        var slideWidth = $(".active").width();
        $(".slide-content").css(
            {
                "width": slideWidth+"px"
            }
        )
    }
}

$(window).resize(function(){
    //onresize

    checkWidth()

    //finish resize
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(checkWidth, 500);
})
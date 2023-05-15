$("#__Scroll_Down__").click(function() {
    $('html, body').animate({
        scrollTop: $(".footer").offset().top // the class of the object we are arriving at
    }, 2500);
});

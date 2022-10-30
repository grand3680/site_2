$("#__Scroll_Down__").click(function() {
    $('html, body').animate({
        scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
    }, 2500);
});
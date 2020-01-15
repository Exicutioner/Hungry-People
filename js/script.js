
$(document).ready(function () {

$('.mobile-btn').on('click', function () {
    $(this).toggleClass('show');
    $('.menu-left ,.menu-right').toggleClass('show-menu');
});
$('.menu-list-item a').on('click', function () {
    $('.menu-left ,.menu-right').removeClass('show-menu');
    $('.mobile-btn').removeClass('show');
});
$(".owl-one").owlCarousel({
    items:1,
    loop: true,
    touchDrag: true,
    dots: true,
});
    $(".owl-second").owlCarousel({
        items:4,
        loop: true,
        touchDrag: true,
        dots: true,
        responsive: {
            1366 : {
                items:4
            },
            996 : {
                items:2
            },
            896 : {
                items:1
            }
        }
    })
});


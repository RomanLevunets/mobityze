$(document).ready(function() {
    $('.services').owlCarousel({
        items: 4,
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 700,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1
            },
            450: {
                items: 2
            },

            768: {
                items: 3
            },

            1100: {
                items: 4
            }
        }
    });

    $('.menu-item-meth').click(function() {
        event.preventDefault();
        if (!$(this).hasClass('active-h')) {
            $('.menu-item-meth').removeClass('active-h');
            $(this).addClass('active-h');
        }
    });

    $('.burger').click(function(){
        $('.burger__line').toggleClass('active-b');
        $('.b-menu').toggleClass('open');

    });


    $('.form-sing').click(function () {
        event.preventDefault();
    });
    $('.form-sing').magnificPopup();



});

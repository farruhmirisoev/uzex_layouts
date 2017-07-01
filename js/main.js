(function($) {

    $(document).ready(function() {
        $('.language').on('click', function() {
            $('.langs').toggleClass('translate');
        });
        // pri najatii otkrivayet okno vhoda
        $('.loginbtn').on('click', function() {
            $('section.login').fadeIn();
        });
        // pri najatii zakrivayet okno vhoda
        $('section.login i').on('click', function() {
            $('section.login').fadeOut();
        });
        $('.course__slider').slick({
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,
            responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
        $('.hamburger').on('click', function() {
            $(this).toggleClass('is-active');
            $('.header_navmenu').find('li').slideToggle();
        });
        $('.reestr').stacktable();
        $('.library__table__list').stacktable();
        $('.database__table').stacktable();
    }); //doc ready end--------------------------------

}(jQuery));

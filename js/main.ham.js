(function($) {
    $(document).ready(function() {

        $('.hamburger').on('click', function() {
            $('.hamburger').toggleClass('is-active');
            $('.categories').slideToggle(500);
        });
        $('.slider').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,


        });
    });
}(jQuery));

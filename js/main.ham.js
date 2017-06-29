(function($) {
    $(document).ready(function() {

        $('.hamburger').on('click', function() {
            $('.hamburger').toggleClass('is-active');
            $('.categories').slideToggle(500);
        });
        $('.latest-news__content').slick({
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,


        });
        $('.spec-opinion__content').slick({
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,


        });
        $('.our-partners__content').slick({
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 4000,


        });
    });
}(jQuery));

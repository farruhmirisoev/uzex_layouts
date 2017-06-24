(function($) {

    $(document).ready(function() {
        jQuery.scrollSpeed(100, 800);
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                if ($('#goTop').css('display') == 'none') {
                    $('#goTop').css({ 'top': '', 'bottom': '' }).fadeIn();
                }
            } else {
                $('#goTop').fadeOut();
            }
        });
        $('#goTop').click(function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            $(this).animate({ top: '-5rem' }, 600);
            return false;
        });
        $('#block-views-slider-view-block .view-content').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            adaptiveHeight: true,
            speed: 500,
            fade: true,
            cssEase: 'linear'
        });
        $("#block-views-slider-view-block .views-row").each(function() {
            var thisRow = $(this);
            var text = thisRow.find(".views-field-title-field-et .field-content a").text();
            var splitted = text.split(' ');
            var length = splitted.length;
            for (var i = 0; i < length; i++) {
                if ((splitted[i] == '"Спанбонд"') || (splitted[i] == '"Spanbond"')) {
                    thisRow.find(".views-field-title-field-et .field-content a").lettering('words');
                }
            }
        });
        // $("#block-views-slider-view-block .views-field-title-field-et .field-content a").lettering('words');
        $('#block-multiblock-2').appendTo($('#block-system-main-menu ul.menu > li:nth-child(3)'));

        function mobileSwitch() {
            if ($(window).width() < 1025) {
                if ($('#block-system-main-menu').find('.hamburger').length == 0) {
                    $('#block-system-main-menu').prepend('<button class="hamburger hamburger--collapse" type="button"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>');
                    $('.hamburger').on('click', function() {
                        $(this).toggleClass('is-active').parent().children('.content').children('ul.menu').slideToggle();
                    });
                    $('#block-system-main-menu > .content > ul.menu > li:nth-child(3) > a').clone().prependTo('#block-multiblock-2 ul.menu').wrap('<li class="mobi">');
                    $('#block-system-main-menu > .content > ul.menu > li:nth-child(3) > a').removeAttr('href');
                    $('#block-system-main-menu > .content > ul.menu > li:nth-child(3)').on('click', function() {
                        $(this).find('ul.menu').slideToggle();
                    });
                }
            } else if ($(window).width() > 1025) {
                if ($('#block-system-main-menu').find('.hamburger').length > 0) {
                    $('.hamburger').remove();
                    $('li.mobi').remove();
                    $('#block-system-main-menu > .content > ul.menu > li:nth-child(3) > a').attr('href', '/products');
                    $('#block-multiblock-2 ul.menu').show();
                };
                $('#block-system-main-menu').find('ul.menu').show();
            }
        };
        mobileSwitch();
        $(window).on('resize', function() {
            mobileSwitch();
        });

    }); //doc ready end--------------------------------

}(jQuery));

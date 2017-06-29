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

                //rating tabs
                $("#rating__type_id-1").addClass("active");
                $(".user-ratings:not(.rating__type_id-1)").hide();


                $(".rating__type").click(function() {
                        var rating__type_id = $(this).attr("id");
                        // alert(rating__type_id);
                        // alert("hi" + "friends");
                        $(".user-ratings").hide();
                        $("." + rating__type_id).show();
                        $(".rating__type").removeClass('active');
                        $(this).addClass("active");


                        });

                });
        }(jQuery));

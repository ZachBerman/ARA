var $ = $.noConflict();
$(document).ready(function () {
    "use strict";


//preloader
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

//sticky header
    $(window).resize(function () {
        $(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
    });
//sticky header on scroll
        $(window).load(function () {
            $(".sticky-header").sticky({topSpacing: 0});
        });
            //smooth scroll
            $(function () {
                $('.buttons a[href*="#"]:not([href="#"])').click(function () {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html, body').animate({
                                scrollTop: target.offset().top
                            }, 700);
                            return false;
                        }
                    }
                });
            });
//search trigger
    // $('#search-trigger a, .fa-times').click(function () {
    //     $('.search-click').animate({height: 'toggle'}, 500);
    // });
    /*====main navigation hover dropdown====*/
    // $('.js-activated').dropdownHover({
    //     instantlyCloseOthers: false,
    //     delay: 100
    // }).dropdown();
//shrink header
    $(function () {
        var shrinkHeader = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.header-transparent').addClass('shrink');
            }
            else {
                $('.header-transparent').removeClass('shrink');
            }
        });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });

    //back to top
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });



    //mouse direction hover
    // $(function () {
    //     $('.mouse-overlay .inner ').each(function () {
    //         $(this).hoverdir();
    //     });
    // });


    //ANIMATED SKILL BARS

    // $('.progress-bar').appear(function () {
    //     $(this).css('width', $(this).data('progress') + '%');
    //     $(this).parents('.skill').find('.skill-perc').css('right', 100 - $(this).data('progress') + '%');
    // });

    //parallax
    // $(window).stellar();

    //wow animations
    var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
    );
    wow.init();


    //hover tabs
    // $('.hover-tabs > li > a').hover(function () {
    //     $(this).tab('show');
    // });


    //Counter Up
        // $('.counter').counterUp({
        //     delay: 10,
        //     time: 2000
            
        // });

    //tooltip & popovers **/
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //flex slider
    // $(window).load(function () {
    //     $('.img-slide').flexslider({
    //         animation: "slide",
    //         controlNav: false,
    //         prevText: "Previous",
    //         nextText: "Next"
    //     });
    // });
 
    //accordions
    /***********************************************************
     * ACCORDION
     ***********************************************************/
    // $('.panel-heading a[data-toggle="collapse"]').on('click', function () {
    //     if ($(this).closest('.panel-heading').hasClass('active')) {
    //         $(this).closest('.panel-heading').removeClass('active');
    //     } else {
    //         $('.panel-heading a[data-toggle="collapse"]').closest('.panel-heading').removeClass('active');
    //         $(this).closest('.panel-heading').addClass('active');
    //     }
    // });

    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */  
    
});


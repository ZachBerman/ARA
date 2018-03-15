var $ = $.noConflict();
$(document).ready(function () {
    "use strict";

//carousel slide 
    $(".work-slide-1").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
    $(".work-slide-2").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 3 seconds
        navigation: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        pagination: false,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
    $(".testimonial-slide").owlCarousel({
        autoPlay: 12000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: true,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        transitionStyle: 'goDown'
    });
    $(".testimonial-slide-2").owlCarousel({
        autoPlay: 9000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: true,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        transitionStyle: 'goDown'
    });
  $(".client-slide").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 3 seconds
        navigation: false,
        pagination: false,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 3],
        transitionStyle: 'goDown'
    });
});
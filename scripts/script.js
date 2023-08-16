$(document).ready(function(){
    $('#js-carousel-1').owlCarousel({
        items: 1,
        nav: true,
        navText: ["<div class='owl-carousel__arrow owl-carousel__arrow--back'></div>", "<div class='owl-carousel__arrow owl-carousel__arrow--next'></div>"]
    });
    $('#categories-slider').owlCarousel({
        items: 4,
        loop: true,
        nav: false
    });
    $('#sub-categories-slider').owlCarousel({
        items: 4,
        loop: false,
        nav: false
    });
    $('#trendings-new').owlCarousel({
        items: 5,
        loop: false,
        nav: false
    }); 
  });
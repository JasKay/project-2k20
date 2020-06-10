/**First Slider */
$(function (){
    $('.slider-one').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0, 
        prevArrow: ".site-slider .slider-btn .prev",
        nextArrow: ".site-slider .slider-btn .next",  
        dot: false
    });
});

/**/ 
$(function (){
    $('.slider-two').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0, 
        prevArrow: ".site-slider-two .slider-btn .prev",
        nextArrow: ".site-slider-two .slider-btn .next",  
        dot: false
    });
});

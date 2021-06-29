$(document).ready(function(){
$('.multiple-items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows:false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    
    ],
      prevArrow:"<button type='button' class='slick-prev pull-left button'><svg><use xlink:href='img/symbol-defs.svg#icon-chevron-thin-left'></use></svg></button>",
      nextArrow:"<button type='button' class='slick-next pull-right button '><svg><use xlink:href='img/symbol-defs.svg#icon-chevron-thin-right'></use></svg></button>"
  
    });
    
});
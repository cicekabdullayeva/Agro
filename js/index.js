$(document).ready(function(){
$('.multiple-items').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 200,
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
          slidesToScroll: 1,
          arrows:false,
        }
      }
    
    ]
    });

    $('.partner-items').slick({
      dots: true,
      infinite: true,
      autoplaySpeed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows:false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
          }
        }
     
      
      ]
      });
});
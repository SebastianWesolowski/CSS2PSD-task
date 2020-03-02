$('#slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: false,
  prevArrow: $('.arrow.--prev'),
  nextArrow: $('.arrow.--next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

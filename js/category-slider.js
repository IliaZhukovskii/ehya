$('.category-slider').slick({
  adaptiveHeight: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  rows: 1,
  autoplaySpeed: 2000,
  centerMode: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
      }
    },
    {
      breakpoint: 760,
      settings: {
        rows: 2,
        slidesPerRow: 2,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
  ]
});

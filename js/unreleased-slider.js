$('.unreleased-slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: false,
    accessibility: false,
    nextArrow: '<svg class="next-arrow slide-icon" width="54" height="56" viewBox="0 0 54 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="border-icon__next" x="1" y="1" width="52" height="54" rx="26" stroke="#5A7184" stroke-width="2"/><path class="arrow-icon__next" d="M25.2232 23.0938C24.9107 23.4062 24.942 23.875 25.2232 24.1875L29.0045 27.75H20.0357C19.5982 27.75 19.2857 28.0938 19.2857 28.5V29.5C19.2857 29.9375 19.5982 30.25 20.0357 30.25H29.0045L25.2232 33.8438C24.942 34.1562 24.942 34.625 25.2232 34.9375L25.9107 35.625C26.2232 35.9062 26.692 35.9062 26.9732 35.625L33.067 29.5312C33.3482 29.25 33.3482 28.7812 33.067 28.4688L26.9732 22.4062C26.692 22.125 26.2232 22.125 25.9107 22.4062L25.2232 23.0938Z" fill="#5A7184"/></svg>',
    prevArrow: '<svg class="prev-arrow slide-icon" width="54" height="56" viewBox="0 0 54 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="border-icon__prev" x="1" y="1" width="52" height="54" rx="26" stroke="#5A7184" stroke-width="2"/><path class="arrow-icon__prev" d="M27.317 34.9375C27.6295 34.625 27.5982 34.1562 27.317 33.8438L23.5357 30.25H32.5357C32.942 30.25 33.2857 29.9375 33.2857 29.5V28.5C33.2857 28.0938 32.942 27.75 32.5357 27.75H23.5357L27.317 24.1875C27.5982 23.875 27.6295 23.4062 27.317 23.0938L26.6295 22.4062C26.3482 22.125 25.8482 22.125 25.567 22.4062L19.5045 28.5C19.192 28.7812 19.192 29.25 19.5045 29.5312L25.567 35.625C25.8482 35.9062 26.317 35.9062 26.6295 35.625L27.317 34.9375Z" fill="#5A7184"/></svg>',
    responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        draggable: false,
        accessibility: false,
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        draggable: false,
        accessibility: false,
      }
    },
    {
      breakpoint: 638,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        draggable: false,
        accessibility: false,
      }
    },
  ]
});


$('.border-icon__next').addClass('border-icon__next-white');
$('.arrow-icon__next').addClass('arrow-icon__next-white');


jQuery(document).ready(function(){
  var w = screen.width;
  if (w >= '1201') {
    $('.unreleased-slider').on('afterChange', function(){
    var num = $('.unreleased-slider').slick('slickCurrentSlide');
    if(num==2)
    {
      $('.border-icon__next').removeClass('border-icon__next-white');
      $('.arrow-icon__next').removeClass('arrow-icon__next-white');
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
    }
    else if(num==0)
    {
      $('.border-icon__prev').removeClass('border-icon__prev-white');
      $('.arrow-icon__prev').removeClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==1)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    });
  } 
});
$(window).resize(function() {
  if ( $(window).width() < 1200 ) {
    $('.unreleased-slider').on('afterChange', function(){
    var num = $('.unreleased-slider').slick('slickCurrentSlide');
    if(num==4)
    {
      $('.border-icon__next').removeClass('border-icon__next-white');
      $('.arrow-icon__next').removeClass('arrow-icon__next-white');
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
    }
    else if(num==0)
    {
      $('.border-icon__prev').removeClass('border-icon__prev-white');
      $('.arrow-icon__prev').removeClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==1)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==2)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==3)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    });
  }
});
$(window).resize(function() {
  if ( $(window).width() < 993 ) {
    $('.unreleased-slider').on('afterChange', function(){
    var num = $('.unreleased-slider').slick('slickCurrentSlide');
    if(num==5)
    {
      $('.border-icon__next').removeClass('border-icon__next-white');
      $('.arrow-icon__next').removeClass('arrow-icon__next-white');
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
    }
    else if(num==0)
    {
      $('.border-icon__prev').removeClass('border-icon__prev-white');
      $('.arrow-icon__prev').removeClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==1)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==2)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==3)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==4)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    });
  }
});
$(window).resize(function() {
  if ( $(window).width() < 638 ) {
    $('.unreleased-slider').on('afterChange', function(){
    var num = $('.unreleased-slider').slick('slickCurrentSlide');
    if(num==6)
    {
      $('.border-icon__next').removeClass('border-icon__next-white');
      $('.arrow-icon__next').removeClass('arrow-icon__next-white');
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
    }
    else if(num==0)
    {
      $('.border-icon__prev').removeClass('border-icon__prev-white');
      $('.arrow-icon__prev').removeClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==1)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==2)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==3)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==4)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    else if(num==5)
    {
      $('.border-icon__prev').addClass('border-icon__prev-white');
      $('.arrow-icon__prev').addClass('arrow-icon__prev-white');
      $('.border-icon__next').addClass('border-icon__next-white');
      $('.arrow-icon__next').addClass('arrow-icon__next-white');
    }
    });
  }
});


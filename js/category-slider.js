$('.category-slider').slick({
  infinity: false,
  prevArrow: '<svg class="category-prev" width="54" height="56" viewBox="0 0 54 56" fill="#fff" xmlns="http://www.w3.org/2000/svg"><rect class="category-border" x="1" y="1" width="52" height="54" rx="26" stroke="#fff" stroke-width="2"/><path class="category-arrow" d="M27.317 34.9375C27.6295 34.625 27.5982 34.1562 27.317 33.8438L23.5357 30.25H32.5357C32.942 30.25 33.2857 29.9375 33.2857 29.5V28.5C33.2857 28.0938 32.942 27.75 32.5357 27.75H23.5357L27.317 24.1875C27.5982 23.875 27.6295 23.4062 27.317 23.0938L26.6295 22.4062C26.3482 22.125 25.8482 22.125 25.567 22.4062L19.5045 28.5C19.192 28.7812 19.192 29.25 19.5045 29.5312L25.567 35.625C25.8482 35.9062 26.317 35.9062 26.6295 35.625L27.317 34.9375Z" fill="#183B56"/></svg>',
  nextArrow: '<svg class="category-next" width="54" height="56" viewBox="0 0 54 56" fill="#fff" xmlns="http://www.w3.org/2000/svg"><rect class="category-border" x="1" y="1" width="52" height="54" rx="26" stroke="#fff" stroke-width="2"/><path class="category-arrow" d="M25.2232 23.0938C24.9107 23.4062 24.942 23.875 25.2232 24.1875L29.0045 27.75H20.0357C19.5982 27.75 19.2857 28.0938 19.2857 28.5V29.5C19.2857 29.9375 19.5982 30.25 20.0357 30.25H29.0045L25.2232 33.8438C24.942 34.1562 24.942 34.625 25.2232 34.9375L25.9107 35.625C26.2232 35.9062 26.692 35.9062 26.9732 35.625L33.067 29.5312C33.3482 29.25 33.3482 28.7812 33.067 28.4688L26.9732 22.4062C26.692 22.125 26.2232 22.125 25.9107 22.4062L25.2232 23.0938Z" fill="#183B56"/></svg>',
  slidesToShow: 4,
  draggable: false,
  accessibility: false,
  variableWidth: true,
}); 


$('.category-to').slick({
  infinity: false,
  prevArrow: '<svg class="category-prev" width="54" height="56" viewBox="0 0 54 56" fill="#fff" xmlns="http://www.w3.org/2000/svg"><rect class="category-border" x="1" y="1" width="52" height="54" rx="26" stroke="#fff" stroke-width="2"/><path class="category-arrow" d="M27.317 34.9375C27.6295 34.625 27.5982 34.1562 27.317 33.8438L23.5357 30.25H32.5357C32.942 30.25 33.2857 29.9375 33.2857 29.5V28.5C33.2857 28.0938 32.942 27.75 32.5357 27.75H23.5357L27.317 24.1875C27.5982 23.875 27.6295 23.4062 27.317 23.0938L26.6295 22.4062C26.3482 22.125 25.8482 22.125 25.567 22.4062L19.5045 28.5C19.192 28.7812 19.192 29.25 19.5045 29.5312L25.567 35.625C25.8482 35.9062 26.317 35.9062 26.6295 35.625L27.317 34.9375Z" fill="#183B56"/></svg>',
  nextArrow: '<svg class="category-next" width="54" height="56" viewBox="0 0 54 56" fill="#fff" xmlns="http://www.w3.org/2000/svg"><rect class="category-border" x="1" y="1" width="52" height="54" rx="26" stroke="#fff" stroke-width="2"/><path class="category-arrow" d="M25.2232 23.0938C24.9107 23.4062 24.942 23.875 25.2232 24.1875L29.0045 27.75H20.0357C19.5982 27.75 19.2857 28.0938 19.2857 28.5V29.5C19.2857 29.9375 19.5982 30.25 20.0357 30.25H29.0045L25.2232 33.8438C24.942 34.1562 24.942 34.625 25.2232 34.9375L25.9107 35.625C26.2232 35.9062 26.692 35.9062 26.9732 35.625L33.067 29.5312C33.3482 29.25 33.3482 28.7812 33.067 28.4688L26.9732 22.4062C26.692 22.125 26.2232 22.125 25.9107 22.4062L25.2232 23.0938Z" fill="#183B56"/></svg>',
  rows:2,
  variableWidth: false,
  draggable: false,
  accessibility: false,
  slidesToShow:2,
  
}); 
$('.category-prev').hide();

$('.category-slider').on('afterChange', function(){
  var currentSlide = $('.category-slider').slick('slickCurrentSlide');
if(currentSlide==2)
{
   $('.category-next').hide();
   $('.category-prev').show();
}
else if(currentSlide==0)
{
  $('.category-prev').hide();
  $('.category-next').show();
}
else if(currentSlide==2)
{
  $('.category-prev').show();
  $('.category-next').show();
}
else if(currentSlide==1)
{
  $('.category-prev').show();
  $('.category-next').show();
}

});

$('.category-to').on('afterChange', function(){
  var currentSlide = $('.category-to').slick('slickCurrentSlide');
if(currentSlide==2)
{
   $('.category-next').hide();
   $('.category-prev').show();
}
else if(currentSlide==0)
{
  $('.category-prev').hide();
  $('.category-next').show();
}
else if(currentSlide==2)
{
  $('.category-prev').show();
  $('.category-next').show();
}
else if(currentSlide==1)
{
  $('.category-prev').show();
  $('.category-next').show();
}

});
 


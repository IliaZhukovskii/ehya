
$(document).ready(function(){
  
  $(".form-validate").each(function (){
    $(this).validate({
      messages: {
        name:{
          required:"Enter name",
          minlength: "Name must be at least 2 letters",
        },
        phone: {
          required: "Enter phone number",
          minlength: "Phone must be at least 11 letters",
        },
        email: {
          required: "Format: name@domain.com",
        }
      }
    })
  })
    
  $('.number-mask').mask('+7(000) 000-00-00');
  
    //Подключение анимации
   //AOS.init();

});





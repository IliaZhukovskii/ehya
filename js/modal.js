$(document).ready(function(){

  var modalButton = $('.modal-open');
  var closeModalButton = $('.modal-close');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  
  function openModal() {
    var modal = $('.modal');
    var scroll = $('body');
    modal.addClass('modal-visible');
    scroll.addClass('body-fixed');
    
  }

  function closeModal() {
    var modal = $('.modal'); 
    var scroll = $('body');
    modal.removeClass('modal-visible');
    scroll.removeClass('body-fixed');
  }

  
  $(document).on('keydown', function(e) {
    if (e.keyCode == 27){
      closeModal()
    }
  });

  $(document).click(function (e) {
    if ($(e.target).is('.modal-overlay')) {
        closeModal();
    }
});
  
});


$(document).ready(function(){
  $(".header-menu__item, .footer-logo, .up-top").on("click","a", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
  top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
  });
});

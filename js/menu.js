var menuButton = document.querySelector(".header-top__btn");
menuButton.addEventListener("click", function(){


  document
    .querySelector(".header-menu")
    .classList.toggle("header-menu__visible");
})
function openBurger() {
    var element = document.getElementById("burger");
    element.classList.toggle("active");
    var element = document.getElementById("burger-content");
    element.classList.toggle("show");
    element.classList.toggle("hide");
    var element = document.getElementById("navbar");
    element.classList.toggle("hide");
  }
  
$(window).scroll(function() {
    if ($(document).scrollTop() > 0) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
});

function hyperlinkFunction() {
  document.querySelector('#menu').scrollIntoView({
    behavior: "smooth"
  })};

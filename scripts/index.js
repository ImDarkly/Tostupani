function openBurger() {
    var element = document.getElementById("burger");
    element.classList.toggle("active");
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
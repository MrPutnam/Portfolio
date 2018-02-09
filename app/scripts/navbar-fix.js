/* This function causes the Navbar to stick to the top of the browser
   once it hits the top
*/

$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('#navbar').addClass('navbar-fixed');
      //.navbar-fixed-margin-top adds a top margin to the about section
      //to prevent the section from jumping
      $('#about').addClass('navbar-fixed-margin-top');
    }
    if ($(window).scrollTop() < 501) {
      $('#navbar').removeClass('navbar-fixed');
      $('#about').removeClass('navbar-fixed-margin-top');
    }
  });
});
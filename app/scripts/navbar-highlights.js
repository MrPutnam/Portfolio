/* This function causes the Navbar to stick to the top of the browser
   once it hits the top
*/

console.log();

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
    if ($(window).scrollTop() > $('#portfolio').offset().top - 90) {
      $('#portfolio-link').addClass('active-link');
      $('#contact-link').removeClass('active-link');
    }
    if ($(window).scrollTop() < $('#portfolio').offset().top - 90) {
      $('#portfolio-link').removeClass('active-link');
    }
    if ($(window).scrollTop() > $('#contact').offset().top - 90) {
      $('#contact-link').addClass('active-link');
      $('#portfolio-link').removeClass('active-link');
    }
  });
});
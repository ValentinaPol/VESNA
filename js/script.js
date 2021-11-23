
//Burger Menu

  var burger = document.querySelector('.burger-menu');
  var menuList = document.querySelector('.menu');
  var closeBtn = document.querySelector('#close');
  
  burger.onclick = function(){
      menuList.classList.add('show');
  }
  
  closeBtn.onclick = function(){
      menuList.classList.remove('show');
  }


// ===== Scroll to Top ====

var btn = $('#scrollToTop');
// If the page is scrolled more than 300px,
// show the scroll-to-top button
// Otherwise hide the button
$(window).scroll(function() {
 if ($(window).scrollTop() > 300) {
 btn.addClass('show');
 } else {
 btn.removeClass('show');
 }
});
btn.click(function() {
  $('html, body').animate({scrollTop:0}, '1000');
});
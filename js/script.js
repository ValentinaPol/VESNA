// Swiper

//var swiper = new Swiper(".mySwiper", {
    //spaceBetween: 30,
    //pagination: {
      //el: ".swiper-pagination",
      //clickable: true,
    //},
  //});

  var burger = document.querySelector('.burger-menu');
  var menuList = document.querySelector('.menu');
  var closeBtn = document.querySelector('#close');
  
  burger.onclick = function(){
      menuList.classList.add('show');
  }
  
  closeBtn.onclick = function(){
      menuList.classList.remove('show');
  }


  // Swiper Portfolio

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 2,
    /*pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },*/
});

  // Heart
  var heartGallery1 = document.querySelector('#heart-gallery1');
  var heartGalleryBox1 = document.querySelector('#heart-gallery-box1');

  var heartGallery2 = document.querySelector('#heart-gallery2');
  var heartGalleryBox2 = document.querySelector('#heart-gallery-box2');

  var heartGallery3 = document.querySelector('#heart-gallery3');
  var heartGalleryBox3 = document.querySelector('#heart-gallery-box3');

  heartGallery1.onclick = function(){
    heartGallery1.classList.toggle('heart-color');
    heartGalleryBox1.classList.toggle('heart-show');
}

heartGallery2.onclick = function(){
  heartGallery2.classList.toggle('heart-color');
  heartGalleryBox2.classList.toggle('heart-show');
}

heartGallery3.onclick = function(){
  heartGallery3.classList.toggle('heart-color');
  heartGalleryBox3.classList.toggle('heart-show');
}

 /*function handleHeartClick(heartGallery, heartGalleryBox){
    heartGallery.classList.toggle('heart-color');
    heartGalleryBox.classList.toggle('heart-show');
 }

 heartGallery1.onclick(handleHeartClick(heartGallery1, heartGalleryBox1));
 heartGallery2.onclick = handleHeartClick(heartGallery2, heartGalleryBox2);
 heartGallery3.onclick = handleHeartClick(heartGallery3, heartGalleryBox3);*/


   
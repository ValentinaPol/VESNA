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
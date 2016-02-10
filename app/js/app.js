$(document).ready(function(){

  $(".carousel").owlCarousel({
  	items: 1,
    loop: true,
    autoplayHoverPause: true,
    autoplay: true
  });
  
  var owl = $(".owl-carousel");

  owl.owlCarousel({
  	items: 1,
    loop: true,
    autoplayHoverPause: true,
    autoplay: true,
    nav: true,
    navText: ['<img src="img/chevron-left.png" alt="">',
    		  '<img src="img/chevron-right.png" alt="">']
  });
 
  $('#grid').mixItUp();

});
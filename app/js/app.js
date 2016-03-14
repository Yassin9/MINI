$(document).ready(function() {

	$("#owl-testimonial").owlCarousel({
	    singleItem:true
	});

	$("#owl-slider").owlCarousel({
	    autoPlay: true,
	    singleItem:true
	});

	// Custom Navigation Events
	$(".nav-slider .next").click(function(){
		$("#owl-slider").trigger('owl.next');
	})
	$(".nav-slider .prev").click(function(){
		$("#owl-slider").trigger('owl.prev');
	})
	$(".nav-slider .stop").click(function(){
		$("#owl-slider").trigger('owl.stop');
	})


	$('#work-grid').mixItUp();

	$(".filter").click(function(e) { e.preventDefault() });

	// Check to see if the window is top if not then display button
	$('#back-to-top').hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 700) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	
	// // Click event to scroll to top
	// $('#back-to-top').click(function(){
	// 	$('html, body').animate({scrollTop : 0}, 2500);
	// 	return false;
	// });

	$.localScroll({
		duration:1000,
		hash:true
	});

	// fixed Menu on scroll
	
	$(window).scroll(function () {
	    if ($(window).scrollTop() > 50) {
	        $('.navbar').addClass('fixed');
	    } else {
	        $('.navbar').removeClass('fixed');
	    }
	});

	// scollspy
	
	var sections = [];
	var $navbar = $('.menu');
	var $navbara = $('a', $navbar);

	$navbara.each(function(){
	    sections.push($($(this).attr('href')));
	});

	$(window).scroll(function(e){ 
	    var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
	    
	    for(var i in sections){
	      var section = sections[i];
	      if (scrollTop > section.offset().top) {
	        scrolled_id = section.attr('id');
	      }
	    }
		$navbara.removeClass('current');
		$('a[href="#' + scrolled_id + '"]', $navbar).addClass('current');
	});




});

// Google Maps

google.maps.event.addDomListener(window, 'load', initialize);

var myCenter=new google.maps.LatLng(31.634,-7.976);

function initialize(){
  var mapProp = {
    center:myCenter,
    zoom:12,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    disableDefaultUI:true,
		styles: [{
	        "featureType": "landscape",
	        "stylers": [{
	            "hue": "#F1FF00" }, {
	            "saturation": -27.4 }, {
	            "lightness": 9.4 }, {
	            "gamma": 1 }] }, {
	        "featureType": "road.highway",
	        "stylers": [{ "hue": "#f39c12" }] }, {
	        "featureType": "road.arterial",
	        "stylers": [{ "hue": "#f39c12" }] }, {
	        "featureType": "road.local",
	        "stylers": [{ "hue": "#f39c12" }] }, {
	        "featureType": "water",
	        "stylers": [{ "hue": "#00a3ff" }] }, {
	        "featureType": "poi",
	        "stylers": [{ "hue": "#f39c00" }] }],
  };

  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
    position:myCenter,
    icon:'../img/Company.png'
  });

  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content:"<div style='padding:5px;'><h4>MINI</h4><a href='mailto:yassine91.net@gmail.com' >yassine91.net@gmail.com<a></div>"
    });

  google.maps.event.addDomListener(marker, 'click', function(){
    infowindow.open(map,marker)
  });
}
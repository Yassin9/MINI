$(document).ready(function() {
/*=============================================
=            	  ScrollMagic 	  	          =
=============================================*/

// init controller
var controller = new ScrollMagic.Controller();

// build tween


// build scene about
var tweenAbout = new TweenMax.from(".about", 1, { opacity: 0, scale: 0.7, ease: Bounce.easeOut });

var scene = new ScrollMagic.Scene({
	triggerElement: ".about"
})
.setTween(tweenAbout)
.addTo(controller);
// End of scene


// build scene skills
var tweenSkills = new TimelineMax();
tweenSkills.from(".skills-img", 1, { opacity: 0, y: 100, ease: Bounce.easeOut })
	.from(".skills-content", 1, { opacity: 0, scale: 0.8, ease: Bounce.easeOut }, "-=1")
	.from(".progress", 1, { width: "0%", ease: Power4.easeOut }, "-=0.5");

var scene = new ScrollMagic.Scene({
	triggerElement: ".skills"
})
.setTween(tweenSkills)
.addTo(controller);
// End of scene



// build scene background
var headerScene = new ScrollMagic.Scene({
        triggerElement: ".header",
        triggerHook: 0,
        duration: "100%"
    })
    .setTween(TweenMax.to( ".header", 1, {backgroundPosition: "center 0%"} ))
    .addTo(controller);
// End of scene


// build scene background

// var background = ["'.header'", "'.quote'", "'.facts'", "'.testimonial'", "'.tweet'", "'.clients'"];
var background = ["#quote"];

background.forEach(function (bg, i) {

    var headerScene = new ScrollMagic.Scene({
        triggerElement: bg,
    })
    .setClassToggle("quote", 'is-active')
    .addTo(controller);
    
});

// End of scene

/*=====  End of Section ScrollMagic	   ======*/



var count = new ScrollMagic.Scene({
    triggerElement: ".facts",
    triggerHook: 0.25
}).on("enter", function (e) {
    $('.counter').countTo({
        speed: 1500,         
        refreshInterval: 50});  
})
.addTo(controller);




});

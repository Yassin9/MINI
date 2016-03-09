$(document).ready(function() {
/*=============================================
=            	  ScrollMagic 	  	          =
=============================================*/

// init controller
var controller = new ScrollMagic.Controller();

// build tween
// var tweenfadeUp = new TweenMax.from(
// 				".fadeUp", 0.5, {
// 				top: 200,
// 				opacity: 0,
// 				scale: 0.5,
// 				ease:Power1.easeNone
// 				});

// var tweenfadeDown = new TweenMax.from(
// 				".fadeDown", 1, {
// 				bottom: 200,
// 				opacity: 0,
// 				scale: 0.5,
// 				ease:Power1.easeNone
// 				});

// var tweenfadeLeft = new TweenMax.from(
// 				".fadeLeft", 1, {
// 				left: 200,
// 				opacity: 0,
// 				scale: 0.5,
// 				ease:Power1.easeNone
// 				});

// var tweenfadeRight = new TweenMax.from(
// 				".fadeRight", 1, {
// 				right: 200,
// 				opacity: 0,
// 				scale: 0.5,
// 				ease:Power1.easeNone
// 				});


// build scene about
var tweenAbout = new TweenMax.from(".about", 1, { opacity: 0, scale: 0.7, ease: Bounce.easeOut });

var scene = new ScrollMagic.Scene({
	triggerElement: ".about"
})
.setTween(tweenAbout)
.addIndicators()
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
.addIndicators()
.addTo(controller);
// End of scene

// build scene background
var headerScene = new ScrollMagic.Scene({
        triggerElement: ".header",
        triggerHook: 0,
        duration: "100%"
    })
    .setTween(TweenMax.to( ".header", 1, {backgroundPosition: "center 0%"} ))
    .addIndicators({name:"header"})
    .addTo(controller);
// End of scene


// build scene background

// var background = ["'.header'", "'.quote'", "'.facts'", "'.testimonial'", "'.tweet'", "'.clients'"];
var background = ["#quote"];

background.forEach(function (bg, i) {

    var headerScene = new ScrollMagic.Scene({
        triggerElement: bg,
        triggerHook: 0.75,
        duration: "100%"
    })
    .setTween(TweenMax.to( bg, 1, {backgroundPosition: "center 400px"} ))
    .addIndicators({name:"background"})
    .addTo(controller);
    
});

// End of scene

/*=====  End of Section ScrollMagic	   ======*/
});

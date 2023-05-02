$(function() {
  var height=$("#header").height();
  $(".container").css("padding-top", height);
});

$(function() {
	const hum = $('#humberger, .close')
	const nav = $('.sp-nav')
	hum.on('click', function(){
		 nav.toggleClass('toggle');
		 hum.toggleClass('isClosed');
	});
});

$(window).on('load', function(){
	$('.anim').delay(0).fadeOut(800);
});
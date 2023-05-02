$(function(){
  $('.single-item').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    fade: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 954,
				settings: {
					arrows: false,
				},
			},
		],
  });
	setTimeout(function(){
    $('#loader-bg').fadeOut(100);
  },5000);
});

$(window).on('load', function(){
	$('.loader').delay(600).fadeOut(400);
	$('#loader-bg').delay(600).fadeOut(800);
});
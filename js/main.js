$(window).scroll(function(){
	var windowScrollTop = $(window).scrollTop(),
		windowHeight = $(window).height(),
		offsetEl = $('.info').offset();

	$( '.intro' ).css("opacity", 1 - windowScrollTop / 300);

	function info_animation() {
		$( ".info .info__block" ).each(function(index) {
			var that = this;
			setTimeout(function() {
				$(that).addClass( 'visible' );
			}, 500 * index);
		});
	}
	
	if(( offsetEl.top - windowScrollTop ) <= ( windowHeight/2 )){
		info_animation();
	}
});

// Smoos scrollTo
// from https://css-tricks.com/examples/SmoothPageScroll/
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 800);
			return false;
			}
		}
	});
});

// $( '.project-preview' ).hover(function(){
// 	$('.project-preview').not(this).each(function(){
// 		$(this).toggleClass('fade');
// 	});
// });

// Project Modals
window.REMODAL_GLOBALS = {
	NAMESPACE: 'over',
	DEFAULTS: {
		hashTracking: false,
		closeOnOutsideClick: false
	}
};
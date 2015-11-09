$(window).scroll(function(){
	var windowScrollTop = $(window).scrollTop(),
		windowHeight = $(window).height(),
		offsetEl = $('.info').offset();

	$( '.intro' ).css('opacity', 1 - windowScrollTop / 300);

	function info_animation() {
		$( '.info .info-block' ).each(function(index) {
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

// Scroll to Projects
$('.intro').click(function() {
	$('html,body').animate({
		scrollTop: $('.projects').offset().top
	}, 800);
});

// Project Modals
window.REMODAL_GLOBALS = {
	NAMESPACE: 'over',
	DEFAULTS: {
		hashTracking: false,
		closeOnOutsideClick: false
	}
};
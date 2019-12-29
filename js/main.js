'use strict'

function modalTransition (e) {
	switch(e.animationName){
		case 'modal-opening':
			e.target.classList.add('open');
			e.target.classList.remove('opening');
			document.body.classList.add('noscroll');
			console.log('opening')
			break;
		case 'modal-closing':
			event.target.closest('[data-modal-id]').classList.remove('open')
			event.target.closest('[data-modal-id]').classList.remove('closing')
			document.body.classList.remove('noscroll')
			break;
		default:
			console.log('something gone wrong')
	}
}

document.onclick = function(e) {
	let target = e.target;

	if (target.closest('[data-modal-target]')) {
		const modals = document.querySelectorAll('[data-modal-id]')
		for (let modal of modals) {
			if (modal.dataset.modalId == target.closest('[data-modal-target]').dataset.modalTarget) {
				modal.classList.add('opening')
				modal.addEventListener('animationend', modalTransition, true);
				}
			}
		return false;
	} else if (target.hasAttribute('data-modal-close')) {
		target.closest('[data-modal-id]').classList.add('closing')
		target.closest('[data-modal-id]').addEventListener('animationend', modalTransition, true);
		return false;
	} else if (target.closest('.intro')) {
			document.querySelector('.projects').scrollIntoView({
			behavior: 'smooth' 
		});
	} else {
		return
	}
}

window.addEventListener('scroll', function() {
	let windowOffset = pageYOffset,
	windowHeight = document.documentElement.clientHeight,
	intro = document.querySelector('.intro'),
	opc = 1 - windowOffset/300,
	offsetEl = document.querySelector('.info').getBoundingClientRect().top;
	
	intro.style.opacity = opc >= 0 ? opc.toFixed(1) : 0

	if( offsetEl <= windowHeight/2 ){
		info_animation()
	}
	
});

function info_animation() {
	let infos = document.querySelectorAll('.info-block')

	infos.forEach(function(info, index) {
		setTimeout( () => info.classList.add( 'visible' ) , 500 * index)
	})
}
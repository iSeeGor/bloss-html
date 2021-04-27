window.addEventListener('DOMContentLoaded', function(){
	
	animationInit();
	hamburger();
	categoryToggle();
	testimonialSlider();

});

const animationInit = () => {

	AOS.init({

		disable: 'mobile',
		once: true,
	});

	let rellax = new Rellax('.rellax', {

		center: true
	});

  	SmoothScroll({ stepSize: 60 });

}

const hamburger = () => {

	if(!document.querySelector('.hamburger')) return;

	document.querySelector('.hamburger').addEventListener('click', function(e) {
		this.classList.toggle('is-active');

		document.querySelector('.header').classList.toggle('is-active');
		document.body.classList.toggle('overflow');
	});
}

const categoryToggle = () => {

	

	document.querySelector('.hero-control__categories').addEventListener('click', function(){

		document.querySelector('.hero-categories').classList.add('is-active');
		document.body.classList.add('glass-overflow-in');
	});

	document.querySelector('.hero-categories ._close').addEventListener('click', function(){

		document.querySelector('.hero-categories').classList.remove('is-active');
		document.body.classList.remove('glass-overflow-in');
		document.body.classList.add('glass-overflow-out');

		setTimeout(() => {
			document.body.classList.remove('glass-overflow-out');
		}, 1000);
	});
}

const testimonialSlider = () => {

	let slider;
	slider = new Swiper('.testimonial-slider', {

		speed : 1200, 

		navigation: {

			nextEl: '.testimonial-slider__nav ._next',
			prevEl: '.testimonial-slider__nav ._prev',
			disabledClass: '_disabled'
		},

		pagination: {

			el: '.testimonial-slider__pagination',
			type: 'bullets',
		}
	});
}

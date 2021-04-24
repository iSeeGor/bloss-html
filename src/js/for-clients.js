window.addEventListener('DOMContentLoaded', function(){

	faqInit();

	if(document.querySelector('.scroll-section')) scrollContainer();
	
})

const faqInit = () => {

	$('.faq-item__button').on('click', function(){

		if($(this).hasClass('_active')) {

			$(this).removeClass('_active');
			$(this).next('.faq-item__content').slideUp(400);
		} else {

			$('.faq-item__button').removeClass('_active');
			$('.faq-item__content').slideUp(400);
			$(this).addClass('_active');
			$(this).next('.faq-item__content').slideDown(400);
		}

	});
}

const scrollContainer = () => {

	const section = $('.scroll-section');
	const container = $('.scrolled-container');

	$(window).on('scroll', function(){


		if($(window).scrollTop() + 120 > section.offset().top ){

			container.addClass('_fixed');
		} else {

			container.removeClass('_fixed');
			container.find('img').attr('src', '');
		}

		$('.scroll-block').each(function(index, item){

			// first image
			if( index === 0 ){

				let currentImageSRC = $(this).find('.scroll-block__image').attr('data-src');
				container.find('img').attr('src', currentImageSRC);

				if($(window).scrollTop() + 120 >= $(this).offset().top) {

					$(this).find('.scroll-block__image').css('opacity', '0'); 
				} else {

					$(this).find('.scroll-block__image').css('opacity', '1');
				}
			}

			// All Images Logic
			if($(window).scrollTop() + 300 >= $(this).offset().top){
				
				let currentImageSRC = $(this).find('.scroll-block__image').attr('data-src');
				container.find('img').attr('src', currentImageSRC);

			} 

			// last image
			if( index === $('.scroll-block').length - 1 ) {

				let offsetTriger = 800;
				let lastBLock = $(this);
				let imageurl = lastBLock.find('.scroll-block__image').attr('data-src');
				let offset = lastBLock.offset().top + lastBLock.outerHeight();


				if($(window).scrollTop() > offset - offsetTriger - 80) {

					container.css('opacity', 0);
					$(this).find('.scroll-block__media').css('align-items', 'flex-end');
					$(this).find('.scroll-block__image').css('opacity', 1);
					$(this).find('.scroll-block__image').attr('src', imageurl);

				} else {

					container.css('opacity', 1);
					$(this).find('.scroll-block__image').css('opacity', 0);
				}
				
			}
			
		});

	}).scroll();


	
}
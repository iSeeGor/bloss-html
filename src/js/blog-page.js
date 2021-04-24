window.addEventListener('DOMContentLoaded', function(){

	categoryCarousel()
})

const categoryCarousel = () => {

	let slider;
	const condition = function(){
		let itemsWidth = 0;
		let containerWidth = $('.blog-categories__slider').outerWidth();

		$('.blog-categories__item').each(function(index, item){

			itemsWidth += $(item).outerWidth();
		})

		return itemsWidth > containerWidth 

	};

	condition() ? sliderInit() : sliderRemove();
	
	function sliderRemove(){

		$('.blog-categories__button').remove();
	}

	function sliderInit(){

		slider = new Swiper('.js-category-carousel', {
			
			slidesPerView: 'auto',
			loop: true,

			on: {
			
				beforeInit: function(){

					$('.blog-categories__slider').removeClass('_disabled');
					$('.blog-categories__item').each(function(i, item){

						$(item).parent().css('width', $(item).find('span').outerWidth() + 60 + 'px');
					})
				},
			},

			navigation: {

				nextEl: '.blog-categories__navigation ._next',
				prevEl: '.blog-categories__navigation ._prev',
				disabledClass: '_disabled'
			},
		});	
	}

	$('.blog-categories__item').on('click', function(){

		$('.blog-categories__item').removeClass('_active');
		$(this).addClass('_active');
	})

}
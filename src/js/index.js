window.addEventListener('DOMContentLoaded', function(){
	
	hamburger();
	categoryToggle();
	testimonialSlider();
	// All Pages
	// currencyDropdown();
	// videoPlayer();
	// seoToggleContent();
	// scrollTop();
	// sortSelect();
	// modalsInit();
	// maskHandler();
	// formValidation();

	// // Need For Filter
	// selectCheckbox();
	// selectCheckboxPrice();
	// filter();
	
	// // Home-Page
	// categorySlider();
	// cardWishlist();
	// catalogTabs();
	// testimonialSlider();
	// testimonialHomeReadMore();
	
});
const hamburger = () => {

	document.querySelector('.hamburger').addEventListener('click', function(e) {
		this.classList.toggle('is-active');

		document.querySelector('.header').classList.toggle('is-active');
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

const testimonialHomeReadMore = () => {

	const deltaHeight = 228;
	const moreText = 'смотреть еще';
	const lessText = 'закрыть'
	let container = $('.testimonials-slide__typography');
	let btnReadMore = `<button class="button testimonial-card__readmore">${moreText}</button>`;
	let resetSliderHeight;

	container.each(function (insex, item){

		item = $(item);
		let itemHeight = item.outerHeight();

		toggleContent(item, itemHeight);
	});

	function toggleContent(item, itemHeight){

		if(itemHeight >=  deltaHeight){

			item.css('height', deltaHeight + 'px');
			item.parent().append(btnReadMore);
			item.parent().find('.testimonial-card__readmore').on('click', function(){

				if(item.outerHeight() <=  deltaHeight){
					item.css('height', itemHeight + 'px');
					$(this).html(lessText);
				} else {
					item.css('height', deltaHeight + 'px');
					$(this).html(moreText);
				}
			});

			resetSliderHeight = function(){

				item.css('height', deltaHeight + 'px');
				$(this).html(moreText);
			}

		}

	}

	$('.testimonials-slider__nav .button').on('click', function(){
		resetSliderHeight();
	});

}

const formValidation = () => {

	const forms = document.querySelectorAll('.js-validate');

    $.validator.methods.email = function( value, element ) {
        return this.optional( element ) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value );
    }

    forms.forEach(function (form) {
        let forms = $(form).validate({
            errorElement: "em",
            errorPlacement: function (error, element) {
                element.parent().parent().append(error);
            }

        });

        $('.js-clear-validation').on('click', function(){
            forms.resetForm();
        });

    });
}

const maskHandler = () => {

	// Filter Price Mask
	if(document.querySelector('.js-price-mask')){

		let $price =  document.querySelectorAll('.js-price-mask');

		$price.forEach(item => {

			IMask(item, {
				mask: "num",
				blocks: {
					num: {
						// nested masks are available!
						mask: Number,
						thousandsSeparator: " "
					}
				}
			});
		});	
	}

	// Phone Number Mask
	if(document.querySelector('.js-phone-mask')){

		let $price =  document.querySelectorAll('.js-phone-mask');

		$price.forEach(item => {

			IMask(item, {
				mask: "+num",
				blocks: {
					num: {
						// nested masks are available!
						mask: Number,
						thousandsSeparator: " "
					}
				}
			});
		});	
	}

}

const modalsInit = () => {

	$('[data-fancybox="modal"]').fancybox({

		type: 'inline',
		modal: true,
		baseClass: "site__fancybox",
		arrows: false,
		// hideScrollbar: false,
	});

	$('.contact-card__callback button').on('click', function(){

		$.fancybox.open({
			src  : '#contuct-us',
			type : 'inline',
			modal: true,
			baseClass: "site__fancybox",
			arrows: false,

		});
	});
}

const sortSelect = () => {

	$('.sort-select').on('click', function(){

		$(this).toggleClass('_active');
		$(this).find('.sort-select__list').slideToggle(200);
	});

	$('.sort-select__item').on('click', function(){

		let current = $(this).parents('.sort-select').find('.sort-select__current');
		let currentTitle = current.html();

		current.html($(this).html());
		$(this).html(currentTitle);
	});

	
}

const scrollTop = () => {
    let toTopBtn = $('.to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
            toTopBtn.addClass('_visible');
        } else {
            toTopBtn.removeClass('_visible');
        }
    });

    $(document).on('click', '.to-top', () => {
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
};

const testimonialSliders = () => {

	let slider;

	slider = new Swiper('.js-testimonial-slider', {

		speed: 800,
		preloadImages: false,
		// autoHeight: true,
		
		lazy: {
			loadPrevNext: true
		},

		effect: 'fade',
	
		navigation: {

			nextEl: '.testimonials-slider__nav ._next',
			prevEl: '.testimonials-slider__nav ._prev',
			disabledClass: '_disabled'
		},

		pagination: {

			el: '.testimonials-slider__counter',
			type: 'fraction',
		}
		
	})
};

const currencyDropdown = () => {

	// $('.currency-dropdown').on('click', '.currency-dropdown__button', function(e){
	// 	e.stopPropagation();
	// 	e.preventDefault();

	// 	$(this).parents('.currency-dropdown').find('.currency-dropdown__list').slideToggle(500);
	// 	$(this).toggleClass('_active');	
	// });

	$('.currency-dropdown').on('click', '.currency-dropdown__item', function(e){
		e.stopPropagation();
		e.preventDefault();

		let currency = '';
		const button = $(this).parents('.currency-dropdown').find('.currency-dropdown__button');


		// $(this).parents('.currency-dropdown').find('.currency-dropdown__list').slideUp(500);
		$(this).parents('.currency-dropdown').find('.currency-dropdown__button').removeClass('_active');
		currency = $(this).html();
		$(this).html(button.html());
		
		button.html(currency);
	})
}

const selectCheckbox = () => {

	const elements = $('.select-checkbox');

	elements.each(function(index, el){

		let button = $(el).find('.select-checkbox__button');
		let checkbox = $(el).find('.checkbox input');

		button.on('click', buttonHandler);
		checkboxCounter(checkbox, button);
	})

	function buttonHandler(){
		
		const button = $(this);
		const list = button.siblings('.select-checkbox__list');

		button.toggleClass('_active');
		listToggle(list);

		// hide other select's
		$('.select-checkbox__list').not(list).slideUp(400);
		$('.select-checkbox__button').not(button).removeClass('_active');
	}

	function listToggle(list) {

		list.slideToggle(400);
	}

	function checkboxCounter(ckeckbox, button){

		let count = 0;
		let firstCheckedText = '';
		let lastCheckedText = '';
		let buttonDefaultText = button.html();

		ckeckbox.on('click', function(e){
			e.stopPropagation();
			firstCheckedText = $(this).next('span').html();

			$(this).prop('checked') ? increment() : decrement();

			function increment(){
				count++

				if(count <= 1){
					button.html(firstCheckedText);
				} else {
					button.html('Выбрано ' + count);
				}
			}

			function decrement() {
				count--

				if(count === 0){
					button.html(buttonDefaultText)
				} else if( count === 1 ){
					findLastChecked();
					button.html(lastCheckedText);
				} else {
					button.html('Выбрано ' + count);
				}
			}

		});

		function findLastChecked(){
			ckeckbox.each(function (inadex, el) {

				if($(el).prop('checked')) lastCheckedText = $(el).next('span').html();

			});
		}
	}

	// Hide Select Ckiced Outside Select
	$(document).on('click', function(e){

		if($(e.target).parents('.select-checkbox').is('.select-checkbox')) {
			return
		} else {

			$('.select-checkbox__list').not($(e.target)).slideUp(400);
			$('.select-checkbox__list').not($(e.target)).siblings().removeClass('_active');
		}
	});

}

const selectCheckboxPrice = () => {


	$('.select-checkbox input._from').on('input', function(e){
		const result = $(this).parents('.select-checkbox').find('.button ._from');

		result.html($(this).val());
		if($(this).val() == ''){
			result.html(result.attr('data-placeholder'));
		}
	});

	$('.select-checkbox input._to').on('input', function(e){
		const result = $(this).parents('.select-checkbox').find('.button ._to');

		result.html($(this).val());
		if($(this).val() == ''){
			result.html(result.attr('data-placeholder'));
		}
	});
}

const filter = () => {

	$('.filter__button-type').on('click', function(){

		$(this).addClass('_active').siblings().removeClass('_active');
	});

	$('.filter__reset').on('click', clearFilterData);

	function clearFilterData(){

		$('.filter input').each(function(i, el){

			$(el).attr('type') == 'checkbox' ? $(el).prop('checked', false) : $(el).val('');
		});

		$('.select-checkbox__button').each(function(){

			$(this).html($(this).attr('data-select-placeholder'));
			$(this).find('span._from').html($(this).find('span._from').attr('data-placeholder'));
			$(this).find('span._to').html($(this).find('span._to').attr('data-placeholder'));
		});
		
	}

	// Show Button "Clear Filter"
	function showClearButton(){
		$('.filter input').each(function(){
			$(this).attr('checked');
		})
	}

	showClearButton();

}

const categorySlider = () => {

	let slider;

	slider = new Swiper('.js-category-slider', {

		speed: 800,
		preloadImages: false,
		loop: true,
		
		lazy: {
			loadPrevNext: true
		},

		effect: 'fade',
	
		navigation: {

			nextEl: '.category-slider__nav ._next',
			prevEl: '.category-slider__nav ._prev',
			disabledClass: '_disabled'
		},

		pagination: {

			el: '.category-slider__counter',
			type: 'fraction',
		},

		on: {

			beforeInit: function () {

				let firstImageUrl;
				
				$('.category-slide').each(function(index, el){

					let container = $(this).find('.category-slide__media');
					let currImage = $(this).find('.category-slide__image');
					let currImageUrl = currImage.attr('data-src');
					let nextImageUrl = $(this).parent().next().find('.category-slide__image').attr('data-src');
					let imageTemplate = `
						<figure class="category-slide__thumb _cloned">
							<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${nextImageUrl}" alt="" class="category-slide__secondary-image swiper-lazy">
							<div class="swiper-lazy-preloader"></div>
						</figure>`;

					if(index === 0) firstImageUrl = currImageUrl;
					if(index === $('.category-slide').length - 1) imageTemplate = `
						<figure class="category-slide__thumb _cloned">
							<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="${firstImageUrl}" alt="" class="category-slide__secondary-image swiper-lazy">
							<div class="swiper-lazy-preloader"></div>
						</figure>`;
					
					container.append(imageTemplate)

				});

			},
		}
		
	})
	
}

const cardWishlist = () => {

	$('.js-wishlist-toggle').on('click', function(e){

		e.stopPropagation();
		e.preventDefault();

		let addText = "Добавить в избранное";
		let removeText = "Убрать из избранного";

		$(this).toggleClass('_active');
		if($(this).hasClass('_active')) {

			$(this).find('span').html(removeText);
		} else {

			$(this).find('span').html(addText);
		}
		
	});
}

const catalogTabs = () => {

	$('.catalog-tabs__button-tab').on('click', function(){

		$(this).addClass('_current').siblings().removeClass('_current');

		$('.catalog-tabs__content').siblings().removeClass('_current').eq($(this).index()).addClass('_current')
	});
}

const videoPlayer = () => {

	$('.yt-player').on('click', '.yt-player__button', function(){

		let player = $(this).parents('.yt-player').find('.yt-player__iframe');
		player.attr('src', player.attr('data-src'));
		$(this).remove();
	});
}

const seoToggleContent = () => {

	$('.section-typography__button').on('click', function(){

		let height = $('.section-typography__body .typography').outerHeight();
		let moretext = $(this).attr('data-more-text');
		let lesstext = $(this).attr('data-less-text');

		if($('.section-typography__body').hasClass('_visible')) {
			$('.section-typography__body').css('height', '').removeClass('_visible');
			$(this).html(moretext);
		} else {
			$('.section-typography__body').css('height', height + 'px').addClass('_visible');
			$(this).html(lesstext);
		}

	});
}



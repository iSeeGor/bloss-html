window.addEventListener('DOMContentLoaded', function(){

	productGallery();
	productMap();
	productFormTags()
	
})

const productFormTags = () => {

	$('.product-form__tag').on('click', function(e){


		if(!$(this).hasClass('_checked')){
			$(this).addClass('_checked');
			$(this).find('input').attr('checked', true);	
		} else {
			$(this).removeClass('_checked');
			$(this).find('input').attr('checked', false);
		}
	});
}

const productMap = () => {

	let container = document.querySelector('.js-product-map');
	let map;
	let marker;
	let popup;
	let markerPopupContent = '<p class="marker_content">Barnimstraße 26 14770 Brandenburg / Havel</p>';
	let marketIcon = {
		url: 'icons/marker.png'
		// size: new google.maps.Size(49, 65),
		// origin: new google.maps.Point(-3, 0),
		// anchor: new google.maps.Point(-40, 140)
	};
	let coordinates = { 
		lat: 36.5433118, 
		lng: 31.986317 
	}

	let mapStyle = [
		{
			"featureType": "landscape",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 60
				}
			]
		},
		{
			"featureType": "road.local",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 40
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "transit",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"lightness": 30
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ef8c25"
				},
				{
					"lightness": 40
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#b6c54c"
				},
				{
					"lightness": 40
				},
				{
					"saturation": -40
				}
			]
		},
		{}
	]

	if(container)initMap();

    function initMap() {

		map = new google.maps.Map(container, {
			center: coordinates,
			// disableDefaultUI: true,
			zoom: 16,
			styles: mapStyle,
		});

		marker = new google.maps.Marker({
			position: coordinates,
			map: map,
			icon: marketIcon,
			animation: google.maps.Animation.DROP
		});

		popup = new google.maps.InfoWindow({
	        content: markerPopupContent
	    });

		marker.addListener('click', function() {
			popup.open(map, marker);
		});
    }

}

const productGallery = () => {

	let swiper;
	let fancy;

	swiperInit();
	swiperFuncybox();

	function swiperInit(){

		swiper = new Swiper('.js-product-gallery', {

			speed: 600,
			preloadImages: false,
			slidesPerView: 1,
			spaceBetween: 10,

			lazy: {
				loadPrevNext: true
			},
		
			navigation: {

				nextEl: '.product-gallery__navigation-item._next',
				prevEl: '.product-gallery__navigation-item._prev',
				disabledClass: '_disabled'
			},

			pagination: {

				el: '.product-gallery__pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					return `<span class="_current" >${current}</span>
							<div class="_separator"></div>
							<span class="_totla" >${total}</span>`;
				}
			},

			on: {

				init: function(swiper){

					$('.product-gallery__badge ._total').html(swiper.slides.length);
				}
			}


		})
	}
	
	function swiperFuncybox(){
		
		fancy = $('[data-fancybox="swiper-gallery"]').fancybox({


			buttons: [
				"zoom",
				//"share",
				"slideShow",
				"fullScreen",
				//"download",
				"thumbs",
				"close"
			],

			animationEffect: false,
			backFocus: true,

			thumbs: {
				autoStart: true, 
				hideOnClose: true, 
			},

			beforeShow: function( instance, current ) {
				swiper.slideTo(current.index, 0);
			},
		});
	}

	$('.product-gallery__badge').on('click', function() {
		$.fancybox.open( $('[data-fancybox="swiper-gallery"]'), {
			buttons: [
				"zoom",
				//"share",
				"slideShow",
				"fullScreen",
				//"download",
				"thumbs",
				"close"
			],

			animationEffect: false,
			backFocus: true,

			thumbs: {
				autoStart: true, 
				hideOnClose: true, 
			},

			beforeShow: function( instance, current ) {
				swiper.slideTo(current.index, 0);
			},
		});
	});

	// $('.product-gallery__navigation .button').hover(function(){
	
	// 	$(this).parent().css('background', 'rgba(230, 217, 215, 0.5)');
	// } , 

	// 	function(){

	// 		$(this).parent().css('background', '');
	// 	}
	// );
	
	
}
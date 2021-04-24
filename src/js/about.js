window.addEventListener('DOMContentLoaded', function(){

	contactMap();
	contactsTabs();
	
})

const contactsTabs = () => {

	$('.contacts__button').on('click', function(){

		$(this).addClass('_active').siblings().removeClass('_active');
		$('.contacts__content-card').removeClass('_active');
		$('.contacts__content-card').eq($(this).index()).addClass('_active');
	});
}

const contactMap = () => {

	let selector = document.querySelectorAll('.js-contacts-map');

	selector.forEach(item => contactMap(item));

	function contactMap(item){

		let container = item;
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
			lat: +container.dataset.lat, 
			lng: +container.dataset.lng, 
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
				// animation: google.maps.Animation.DROP
			});

			// popup = new google.maps.InfoWindow({
			// 	content: markerPopupContent
			// });

			// marker.addListener('click', function() {
			// 	popup.open(map, marker);
			// });
		}

	};

}
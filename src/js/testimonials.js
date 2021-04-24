window.addEventListener('DOMContentLoaded', function(){

	testimonialReadMore();
	
});

const testimonialReadMore = () => {

	const deltaHeight = 215;
	const moreText = 'смотреть еще';
	const lessText = 'закрыть'
	let container = $('.testimonial-card__typography');
	let btnReadMore = `<button class="button testimonial-card__readmore">${moreText}</button>`;

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
		}
	}

}
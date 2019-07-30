$(document).ready(function() {

//////////////////////////////////////
/************************************/
/*									*/
/*			Header slider 			*/
/*									*/
/************************************/
//////////////////////////////////////

	// Header slider DOM variables
	const headerSlider = $('#header-slider');
	var	prevHeaderSlider = $('#header-slider__left'),
		nextHeaderSlider = $('#header-slider__right');


	// Initialize slides counter
	headerSlider.on('initialized.owl.carousel initialize.owl.carousel', function(event) {
		$('.slide-control-number__active').text(event.item.index+1);
		$('.slide-control-number__total').text(event.item.count);
	});

	// Describe slides counter
	headerSlider.on('changed.owl.carousel', function(event) {
		$('.slide-control-number__active').text(event.item.index + 1);
		$('.slide-control-number__total').text(event.item.count);
	});

	//Initialize slider
	headerSlider.owlCarousel({
		items: 1,
		autoplayHoverPause: true,
		rewind: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true
	});

	// Describe navigation arrows for slider
	prevHeaderSlider.click(function() {
		headerSlider.trigger('prev.owl.carousel');
	});
	nextHeaderSlider.click(function() {
		headerSlider.trigger('next.owl.carousel');
	});

//////////////////////////////////////
/************************************/
/*									*/
/*			Shop slider 			*/
/*									*/
/************************************/
//////////////////////////////////////

// Shop slider DOM variables
	const shopSlider   = $('#shop-slider');

	//Initialize slider
	shopSlider.owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		margin: 2,
		responsive:{
       		0:{
            	items:1
       	 	},
	        600:{
	            items:2
	        },            
	        960:{
	            items:2
	        },
	        1200:{
	            items:3
	        }
    	}
	});

});
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
		rewind: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: false,
		autoplaySpeed: 25000
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
const shopSlider = $('#shop-slider');
var prevShopSlider = $('#shop-slider__prev'),
	nextShopSlider = $('#shop-slider__next');

//Initialize slider
	shopSlider.owlCarousel({
		items: 3,
		loop: true,
		dots: false,
		smartSpeed: 700,
		margin: 185
	});

	// Describe navigation arrows for slider
	prevShopSlider.click(function() {
		shopSlider.trigger('prev.owl.carousel');
	});
	nextShopSlider.click(function() {
		shopSlider.trigger('next.owl.carousel');
	});

});

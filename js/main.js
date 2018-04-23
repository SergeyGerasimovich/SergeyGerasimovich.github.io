'use strict';

$(document).ready(function() {
	$('.js-section-scroll').on('click', function(e) {
	  e.preventDefault();
	  var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
	  var $section = $(section);

	  $('html, body').animate({
	    scrollTop: $section.offset().top + 'px'
	  }, 1000);
	});
	$(".gallery").flipster({
		style: 'carousel',
	    spacing: -0.77,
	    start: 0
	});
});
'use strict';

$(document).ready(function() {
	function scrollNav() {
  $('a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 0
    }, 400);
    return false;
  });
}
scrollNav();
	$(".gallery").flipster({
		style: 'carousel',
	    spacing: -0.77,
	    start: 0
	});
});
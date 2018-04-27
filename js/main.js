'use strict';

$(document).ready(function() {
	var burger = document.querySelector('.burger-container'),
	    header = document.querySelector('.header');
	burger.onclick = function() {
	    header.classList.toggle('menu-opened');
	  }
	var lastId,
		menu = $(".menu"),
	    menuHeight = menu.outerHeight()+15,
	    menuItems = menu.find("a"),
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });
	$(window).scroll(function(){
	   var fromTop = $(this).scrollTop()+menuHeight;
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   if (lastId !== id) {
	       lastId = id;
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href='#"+id+"']").parent().addClass("active");
	   }                   
	});
	function scrollNav() {
  		$('a').click(function(){  
		    $(".active").removeClass("active");      
		    $(this).closest('li').addClass("active");
		    $(".header").removeClass("menu-opened");
		    var theClass = $(this).attr("class");
		    $('.'+theClass).parent('li').addClass('active');
		    $('html, body').stop().animate({
		        scrollTop: $( $(this).attr('href') ).offset().top - 0
		    }, 370);
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
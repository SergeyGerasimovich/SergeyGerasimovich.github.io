'use strict';

$(document).ready(function() {
	$(window).scroll(function(){
    if ($(window).scrollTop() > 450) {
        $('.contacts__feedback').addClass('contacts__feedback_scroll');
    }
    else {
        $('.contacts__feedback').removeClass('contacts__feedback_scroll')
    }
	});
	var burger = document.querySelector('.header__burger-container'),
	    header = document.querySelector('.header'),
	    body = document.querySelector("body");
	burger.onclick = function() {
	    header.classList.toggle('menu-opened'),
	    body.classList.toggle("body-opened");
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
		    $("body").removeClass("body-opened");
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
	    start: 0
	});
	function myFunction() {
		    if (x.matches) {
		        $(".gallery").flipster({
		        	spacing: -0.94,
		        	start: 0,
		        })
		    }
		    else if (y.matches) {
		    	$(".gallery").flipster({
		    		spacing: -0.92,
		    		start: 0,
		    	})
		    }
		    else if (z.matches) {
		    	$(".gallery").flipster({
		    		spacing: -0.87,
		    		start: 0,
		    	})
		    }
		    else if (t.matches) {
		    	$(".gallery").flipster({
		    		spacing: -0.85,
		    		start: 0,
		    	})
		    }
		    else {
		    	$(".gallery").flipster({
		    		spacing: -0.77,
		    		start: 0,
		    	})
		    }
		}
	var x = window.matchMedia("(min-width: 320px) and (max-width: 480px)"),
		y = window.matchMedia("(min-width: 481px) and (max-width: 767px)"),
		z = window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
		t = window.matchMedia("(min-width: 992px) and (max-width: 1279px)");
	myFunction()
	x.addListener(myFunction)
	y.addListener(myFunction)
	z.addListener(myFunction)
	t.addListener(myFunction)
});

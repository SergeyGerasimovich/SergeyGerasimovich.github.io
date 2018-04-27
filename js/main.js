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
	(function($){

  	jQuery.fn.sendFormLP = function(options){

  		options = $.extend({
            toEmail: 'zerakul87@mail.ru',
            fromEmail: 'info@sergeibelousov.ru',
            interval : 5000
        }, options);

	    var make = function(){
	      
	    	$(this).submit(function(e){
	        	e.preventDefault();

	        	var $this = $(this);

	            var i = true;
	            var toEmail = options.toEmail;
	            var fromEmail = options.fromEmail;
	            var them = $this.data('them');
	            var $items = $this.find('[name]');
	            var $required = $this.find('[data-required]');
	            var objShow = $this.data('show')
	            var objHide = $this.data('hide')

	            $items.removeClass('error');

	            $required.each(function(){
	            	if($(this).val() == ''){
	            		i = false
	            		$(this).addClass('error');
	            	}
	            });

	            if(i == true){
		            var arr = [];
		            var m_action = $this.attr('action');

		            $items.each(function(){
		            	var nam = $(this).data('name');
		            	var val = $(this).val();
		            	arr.push(nam+val);
		            });

		            var m_data = '';

		            for(q=0; q <= arr.length-1; q++){
		            	m_data = m_data+arr[q]+'\n';
		            }
		            
		            $.ajax({
		                type: 'POST',
		                url: m_action,
		                data: {
		                	m_data:m_data,
		                	toEmail:toEmail,
		                	fromEmail:fromEmail,
		                	them:them
		                },
		                success: function(result){
		                    $items.val('');
		                    $(objShow).fadeIn();
		                    $(objHide).hide();

		                    setInterval(function(){
		                    	$(objShow).fadeOut();
		                    }, options.interval);
		                }
		            });
	            }
	        });

	    };
	 
	    return this.each(make); 

  	};
	})(jQuery);
	$(function(){
		$('form').sendFormLP({
			toEmail: 'serhiiherasymovych@gmail.com',
			fromEmail: 'vegas-kings_parnters',
			interval: 1000
		});

	});
});

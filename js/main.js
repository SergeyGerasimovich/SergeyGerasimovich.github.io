'use strict';

$(document).ready(function() {
	//Background of a button in the header
	$(window).scroll(function(){
    if ($(window).scrollTop() > 450) {
        $('.contacts__feedback').addClass('contacts__feedback_scroll');
    }
    else {
        $('.contacts__feedback').removeClass('contacts__feedback_scroll')
    }
	});
	//Background of a button in the header END
	//Burger menu && tracing scroll navigation
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
	//Burger menu && tracing scroll navigation END
	//Settings carousel
	scrollNav();
	$(".gallery").flipster({
		style: 'coverflow',
	    start: 0
	});
	function myFunction() {
		    if (x.matches) {
		        $(".gallery").flipster({
		        	spacing: -0.77,
		        	start: 0,
		        	click: false,
		        })
		    }
		    else if (y.matches) {
		    	$(".gallery").flipster({
		    		spacing: -0.7,
		    		start: 0,
		    		click: false,
		    	})
		    }
		    else if (z.matches) {
		    	$(".gallery").flipster({
		    		spacing: -0.83,
		    		start: 0,
		    		click: false,
		    	})
		    }
		    else if (t.matches) {
		    	$(".gallery").flipster({
		    		spacing: -0.8,
		    		start: 0,
		    		click: false,
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
	//Settings carousel END
	//Hover class="presentation"
	function isTouchDevice() {
		return 'ontouchstart' in window || navigator.maxTouchPoints;
	};
	if (!isTouchDevice()) {
		$('body').addClass('hover');
	} else {
		$('body').addClass('no-hover');
		$('.presentation__item').click(function() {
			$(this).toggleClass('presentation__item_active');
		});
	};
	//Hover class="presentation" END
	//Form validation
	$('form').on('submit', function(e){
	  if( ! this.checkValidity()){
	  	e.preventDefault();
	    $(this).addClass('invalid');
	  }
	});
	//Form validation END
	function frmotpr(){
        var field = new Array("name","tel","email");
        $(".footer__form").submit(function() {
            var error=0;
            $(".footer__form").find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('notvalid');
                            error=1;
                        }
                        else{
                            $(this).removeClass('notvalid');
                            error=0;
                        }
                    }
                }
           })
            var email = $("#email").val();
            if(!isValidEmailAddress(email)){
                error=1;
                $("#email").addClass('notvalid');
            }if(error==0){
            	$("#email").css("border-color","green");
            	$(".footer__form_error").css("display","none");
            	return true;
            }else{
            var err_text = "";
            if(error==1)  err_text="Поле заполнено некорректно";
            $(".footer__form_error").html(err_text);
            $(".footer__form_error").css("display","block");
            return false;
            }
        })
    };
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }
    var inputForm = document.querySelector('.footer__form_button');
    inputForm.onclick = frmotpr();
});

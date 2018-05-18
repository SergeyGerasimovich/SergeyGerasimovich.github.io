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
        headerMenu = document.querySelector('.header__menu'),
        app = document.querySelector('.app'),
        body = document.querySelector("body");
    burger.onclick = function() {
        header.classList.toggle('header-opened'),
        body.classList.toggle("no-scroll"),
        app.classList.toggle("app_fullscreen-height"),
        headerMenu.classList.toggle("header__menu_fullscreen-height");
      }
    var lastId,
        menu = $(".menu"),
        menuHeight = menu.outerHeight()+15,
        menuItems = $('.menu__link'),
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
             .parent().removeClass("menu__item_active")
             .end().filter("[href='#"+id+"']").parent().addClass("menu__item_active");
       }
    });
    function scrollNav() {
        $('a').click(function(){
            $(".menu__item_active").removeClass("menu__item_active");
            $(this).closest('li').addClass("menu__item_active");
            $(".header").removeClass("header-opened");
            $("body").removeClass("no-scroll");
            $(".header__menu").removeClass("header__menu_fullscreen-height");
            $(".app").removeClass("app_fullscreen-height");
            var theClass = $(this).attr("class");
            $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top - 0
            }, 370);
            return false;
        });
    }
    $('.logo').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 350);
        return false;
    });
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
			$('.presentation__item_active').not(this).removeClass('presentation__item_active');
			$(this).toggleClass('presentation__item_active');
		});
	};
	//Hover class="presentation" END
	//Form validation
    $(function(x,y,z,w) {
        $('.form__item_input').on('blur', function() {
            var lnEl = $(this).val().length;
            var fldTxt =
        $(this).prev().text();
            switch (true) {
                case (lnEl === 0):
                    $(this)
                        .css('border-bottom', '0.5px solid red')
                        .next()
                        .text('Поле обязательно для заполнения');
                    break;

                case (lnEl <= 40 && lnEl >= 2):
                    if ($(this).attr('name') == 'email') {
                        if ($(this).val().match(/[^a-zA-Z0-9_.-@]/)) {
                            $(this)
                                .css('border-bottom', '0.5px solid red')
                                .next()
                                .text('Поле заполнено некорректно');
                        } else {
                            if ($(this).val().match(/[@][a-zA-Z.]{2,6}/)) {
                                w = !!1;
                                $(this)
                                    .css('border-bottom', '0.5px solid green')
                                    .next()
                                    .text('');

                            } else {
                                $(this)
                                    .css('border-bottom', '0.5px solid red')
                                    .next()
                                    .text('Поле заполнено некорректно');

                            }
                        }
                    } else if ($(this).attr('name') == 'name') {
                        if ($(this).val().match(/[^A-Za-zА-Яа-яЁё_.-]/)) {
                            $(this)
                                .css('border-bottom', '0.5px solid red')
                                .next()
                                .text('Поле заполнено некорректно');
                        } else {
                            y = !!1;
                            $(this)
                                .css('border-bottom', '0.5px solid green')
                                .next()
                                .text('');
                        }

                    }
                    else if ($(this).attr('name') == 'tel') {
                        if ($(this).val().match(/[^0-9_.-]/)) {
                            $(this)
                                .css('border-bottom', '0.5px solid red')
                                .next()
                                .text('Поле заполнено некорректно');
                        } else {
                            y = !!1;
                            $(this)
                                .css('border-bottom', '0.5px solid green')
                                .next()
                                .text('');
                        }
                    }
                    else {
                        if ($(this).val().match(/\s/)) {
                            $(this)
                                .css('border-bottom', '0.5px solid red')
                                .next()
                                .text('Поле заполнено некорректно');
                        } else {
                            z = !!1;
                            $(this)
                                .css('border-bottom', '0.5px solid green')
                                .next()
                                .text('');
                        }
                    }
                    break;
            }
        });
        $('.footer__item_button').on('click', function(){$('form[name=form]').trigger('submit');});
        $('form[name=form]').on('submit', function(){
            $('input').blur();
            if (w && y && z) {
            return true;
            } else {
                return false;
            }
        });
    });
    //Form validation END
    //Message about the successful sending of data
        // .done(function() {
        //     $('.js-overlay-thank-you').fadeIn();
        //     setTimeout(function(){
        //         $('.js-overlay-thank-you').fadeOut();
        //     }, 2700);
        // });
        // $('.js-close-thank-you').click(function() {
        //     $('.js-overlay-thank-you').fadeOut();
        // });
        // $(document).mouseup(function (e) {
        //     var popup = $('.popup');
        //     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        //         $('.js-overlay-thank-you').fadeOut();
        //     }
        // });
    //Message about the successful sending of data END
});

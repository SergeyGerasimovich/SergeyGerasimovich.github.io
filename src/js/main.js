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
    var arrLang = {
        'ru' : {
            'product' : 'Продукт',
            'suppliers' : 'Поставщики',
            'single-account' : 'Единый аккаунт',
            'multichannel' : 'Мультиканальность',
            'registration' : 'Регистрации',
            'stimulation' : 'Стимуляция',
            'for-partners' : 'Партнерам',
            'for-partners-desc-firstText' : 'Гибкая авансовая система, открывающая',
            'for-partners-desc-secondText' : 'дополнительные возможности для',
            'for-partners-desc-thirdText' : 'получения прибыли',
            'connectivity' : 'Подключение',
            'start' : 'Старт',
            'feedback' : 'Связаться',
            'head-text' : 'Лучшее решение для бизнеса',
            'games-firstText' : 'Продукт, включающий',
            'games-secondText' : 'более 400 игр',
            'slots' : 'Слоты',
            'video-poker' : 'Видео-Покер',
            'roulettes' : 'Рулетки',
            'cards' : 'Карточные',
            'supp-caption' : 'Поставщики игр',
            'supp-desc-firstText' : 'Наиболее востребованные в',
            'supp-desc-secondText' : 'мире разработчики',
            'acc-caption' : 'Единый аккаунт',
            'acc-desc-firstText' : 'Позволяет делать ставки на спорт',
            'acc-desc-secondText' : 'и игры, находясь где угодно',
            'multi-caption' : 'Мультиканальность',
            'multi-desc-firstText' : 'К подключению доступны все каналы (оффлайн, онлайн, мобайл)',
            'multi-desc-secondText' : 'как вместе, так и по отдельности',
            'club-caption' : 'Клубная Версия',
            'club-desc-firstText' : 'Версия, адаптированная для',
            'club-desc-secondText' : 'игры на терминалах в клубе',
            'online-caption' : 'Онлайн Версия',
            'online-desc-firstText' : 'Версия, позволяющая при',
            'online-desc-secondText' : 'наличии регистрации играть с любого компьютера',
            'mobile-caption' : 'Мобайл Версия',
            'mobile-desc-firstText' : 'Позволяющая при наличии',
            'mobile-desc-secondText' : 'регистрации играть со смартфона, планшета, находясь где угодно',
            'registr-caption' : 'Три варианта регистрации',
            'registr-desc-firstText' : 'Для игроков с разными',
            'registr-desc-secondText' : 'потребностями',
            'anonymous-temporary' : 'Анонимная временная',
            'anonymous-constant' : 'Анонимная постоянная',
            'full-reg' : 'Полная',
            'stimulation-caption' : 'Стимуляция активности игроков',
            'stimulation-desc' : 'Повышение игровой активности и лояльности игроков',
            'club-jackpot-caption' : 'Клубный Джекпот',
            'club-jackpot-desc-firstText' : 'Формируется из ставок на игры в одном клубе, выпадает',
            'club-jackpot-desc-secondText' : 'достаточно часто на глазах у игроков',
            'local-jackpot-caption' : 'Сетевой Джекпот',
            'local-jackpot-desc-firstText' : 'Формируется из ставок на игры во всей сети клубов',
            'local-jackpot-desc-secondText' : 'партнера, его сумма довольно велика',
            'bonus-caption' : 'Бонусы',
            'bonus-desc-firstText' : 'Доступны следующие виды: приветственный, возвратный,',
            'bonus-desc-secondText' : 'депозитный, бездепозитный',
            'advance-firstText' : 'Гибкая авансовая система',
            'advance-secondText' : 'из 2-х или 3-х уровней позволяет партнеру формировать',
            'advance-thirdText' : 'свою сеть клиентов из владельцев клубов при помощи',
            'advance-fourthText' : 'купленного ПО',
            'report-firstText' : 'Отчетность в',
            'report-secondText' : 'реальном времени',
            'multicurrency' : 'Мультивалютность',
            'graphic' : 'Графика нового поколения',
            'mathematics-firstText' : 'Математика - надежная и',
            'mathematics-secondText' : 'интересная для игроков',
            'support' : 'Техническая поддержка',
            'fast-start-caption' : 'Быстрый старт',
            'fast-start-desc-firstText' : 'Максимально быстрое',
            'fast-start-desc-secondText' : 'начало работы',
            'connect-firstText' : 'Предельно простое подключение: ',
            'connect-secondText' : 'с флешкой или без нее; ',
            'connect-thirdText' : 'с жестким диском или без него. ',
            'connect-fourthText' : 'Минимальные системные требования ',
            'whitelabel-desc-firstText' : 'Способ быстро начать оперировать под ',
            'whitelabel-desc-secondText' : 'собственным брендом',
            'logo' : 'Ваш логотип',
            'color' : 'Ваши цвета',
            'advantages-firstText' : 'Отсутствие затрат времени и ',
            'advantages-secondText' : 'денег на разработку игрового ',
            'advantages-thirdText' : 'программного обеспечения;',
            'advantages-fourthText' : 'Самые актуальные продукты ',
            'advantages-fifthText' : 'и решения;',
            'advantages-sixthText' : 'Автоматические обновления ',
            'advantages-seventhText' : 'программного обеспечения;',
            'advantages-eighthText' : 'Регулярное пополнение ',
            'advantages-ninthText' : 'списка услуг.',
            'go-partners-firstText' : 'Станьте партнером и оцените ',
            'go-partners-secondText' : 'VEGAS KINGS на практике!',
            'footer-firstText' : 'Для начала использования данного продукта пользователь должен получить необходимые разрешения. Законодательством отдельных государств может быть предусмотрен запрет на использование указанного программного продукта целиком или его отдельных частей.',
            'footer-secondText' : '* более детальная информация в партнерском отделе',
            'send' : 'Отправить',
            'message' : 'Ваша заявка отправлена',
        },
        'ua' : {
            'product' : 'Продукт',
            'suppliers' : 'Постачальники',
            'single-account' : 'Єдиний аккаунт',
            'multichannel' : 'Мультиканальнiсть',
            'registration' : 'Реєстрації',
            'stimulation' : 'Стимуляція',
            'for-partners' : 'Партнерам',
            'for-partners-desc-firstText' : 'Гнучка авансова система, що відкриває',
            'for-partners-desc-secondText' : 'партнерам додаткові можливості',
            'for-partners-desc-thirdText' : 'для отримання прибутку',
            'connectivity' : 'Підключення',
            'start' : 'Старт',
            'feedback' : 'Зв\'язатися',
            'head-text' : 'Краще рiшення для бiзнесу',
            'games-firstText' : 'Продукт, що включає',
            'games-secondText' : 'більше 400 ігор',
            'slots' : 'Слоти',
            'video-poker' : 'Вiдео-Покер',
            'roulettes' : 'Рулетки',
            'cards' : 'Картковi',
            'supp-caption' : 'Постачальники ігор',
            'supp-desc-firstText' : 'Найбільш затребувані в',
            'supp-desc-secondText' : 'світі розробники',
            'acc-caption' : 'Єдиний аккаунт',
            'acc-desc-firstText' : 'Дозволяє робити ставки на спорт',
            'acc-desc-secondText' : 'і ігри, перебуваючи де завгодно',
            'multi-caption' : 'Мультиканальність',
            'multi-desc-firstText' : 'До підключення доступні всі канали (офлайн, онлайн, мобайл)',
            'multi-desc-secondText' : 'як разом, так і окремо',
            'club-caption' : 'Клубна Версiя',
            'club-desc-firstText' : 'Версія, адаптована для',
            'club-desc-secondText' : 'гри на терміналах в клубі',
            'online-caption' : 'Онлайн Версiя',
            'online-desc-firstText' : 'Версія, що дозволяє при',
            'online-desc-secondText' : 'наявності реєстрації грати з будь-якого комп\'ютера',
            'mobile-caption' : 'Мобайл Версiя',
            'mobile-desc-firstText' : 'Версія, що дозволяє при наявності',
            'mobile-desc-secondText' : 'реєстрації грати зі смартфона, планшета, перебуваючи де завгодно',
            'registr-caption' : 'Три види реєстрації',
            'registr-desc-firstText' : 'Для гравців з різними',
            'registr-desc-secondText' : 'потребами',
            'anonymous-temporary' : 'Анонімна тимчасова',
            'anonymous-constant' : 'Анонімна постійна',
            'full-reg' : 'Повна',
            'stimulation-caption' : 'Стимуляція активності гравців',
            'stimulation-desc' : 'Підвищення ігрової активності і лояльності гравців',
            'club-jackpot-caption' : 'Клубний Джекпот',
            'club-jackpot-desc-firstText' : 'Формується з ставок на ігри в одному клубі, випадає',
            'club-jackpot-desc-secondText' : 'досить часто на очах у гравців',
            'local-jackpot-caption' : 'Мережевий Джекпот',
            'local-jackpot-desc-firstText' : 'Формується з ставок на ігри у всій мережі клубів',
            'local-jackpot-desc-secondText' : 'партнера, його сума досить велика',
            'bonus-caption' : 'Бонуси',
            'bonus-desc-firstText' : 'Доступні наступні види: вітальний, зворотний,',
            'bonus-desc-secondText' : 'депозитний, бездепозитний',
            'advance-firstText' : 'Гнучка авансова система',
            'advance-secondText' : ' з 2-х або 3-х рівнів дозволяє партнеру формувати',
            'advance-thirdText' : 'свою мережу клієнтів з власників клубів за допомогою',
            'advance-fourthText' : 'придбаного програмного забезпечення',
            'report-firstText' : 'Звітність в',
            'report-secondText' : 'реальному часі',
            'multicurrency' : 'Мультивалютність',
            'graphic' : 'Графіка нового покоління',
            'mathematics-firstText' : 'Математика - надійна і',
            'mathematics-secondText' : 'цікава для гравців',
            'support' : 'Технічна підтримка',
            'fast-start-caption' : 'Швидкий старт',
            'fast-start-desc-firstText' : 'Максимально швидкий',
            'fast-start-desc-secondText' : 'початок роботи',
            'connect-firstText' : 'Дуже просте підключення: ',
            'connect-secondText' : 'з флешкою ​​або без неї;',
            'connect-thirdText' : 'з жорстким диском або без нього.',
            'connect-fourthText' : 'Мінімальні системні вимоги ',
            'whitelabel-desc-firstText' : 'Спосіб швидко почати оперувати під',
            'whitelabel-desc-secondText' : 'власним брендом',
            'logo' : 'Ваш логотип',
            'color' : 'Вашi кольори',
            'advantages-firstText' : 'Відсутність витрат часу і',
            'advantages-secondText' : 'грошей на розробку ігрового ',
            'advantages-thirdText' : 'програмного забезпечення;',
            'advantages-fourthText' : 'Найактуальніші продукти ',
            'advantages-fifthText' : 'і рішення;',
            'advantages-sixthText' : 'Автоматичні оновлення ',
            'advantages-seventhText' : 'програмного забезпечення;',
            'advantages-eighthText' : 'Регулярне поповнення ',
            'advantages-ninthText' : 'списку послуг.',
            'go-partners-firstText' : 'Станьте партнером та оцініть ',
            'go-partners-secondText' : 'VEGAS KINGS на практиці!',
            'footer-firstText' : 'Для початку використання даного продукту користувач повинен отримати необхідні дозволи. Законодавством окремих держав може бути передбачена заборона на використання зазначеного програмного продукту цілком або його окремих частин.',
            'footer-secondText' : '* більш детальна інформація в партнерському відділі',
            'send' : 'Надiслати',
            'message' : 'Ваша заявка вiдправлена',
        }
    };
    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');
            $('.lang').each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });
	//Burger menu && tracing scroll navigation
	var burger = document.querySelector('.header__burger-container'),
        header = document.querySelector('.header'),
        headerMenu = document.querySelector('.header__menu'),
        body = document.querySelector("body");
    burger.onclick = function() {
        header.classList.toggle('menu-opened'),
        body.classList.toggle("no-scroll"),
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
            $(".header").removeClass("menu-opened");
            $("body").removeClass("no-scroll");
            $(".header__menu").removeClass("header__menu_fullscreen-height");
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
            var fldTxt = $(this).prev().text();
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
                            z = !!1;
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
        $('form[name=form]').on('submit', function(e){
            e.preventDefault();
            $('input', $(this)).blur();
            if (w && y && z) {
                var data = $(this).serialize();
                $.ajax({
                    'method': 'POST',
                    'url': "/service.php",
                    'dataType': 'json',
                    'data': {'data': data, 'req_type': 'send_email'},
                    'async': false,
                    'success': function(data) {
                        if(data['type'] == 'success') {
                            $('.js-overlay-thank-you .popup__text').text('Ваша заявка отправлена');
                            $("form[name=form] .form__item_input").val("");
                            w = false;
                            y = false;
                            z = false;
                        } else {
                            var errText = data['message'] || '';
                            $('.js-overlay-thank-you .popup__text').text('Ошибка отправки.' + errText);
                        }
                        $('.js-overlay-thank-you').fadeIn();
                        setTimeout(function(){
                            $('.js-overlay-thank-you').fadeOut();
                            $('.form__item_error').text('');
                            $('.form__item_input').css('border-bottom', '0.5px solid #fff');
                        }, 2700);

                            $('.js-close-thank-you').click(function() {
                                $('.js-overlay-thank-you').fadeOut();
                                $('.form__item_error').text('');
                                $('.form__item_input').css('border-bottom', '0.5px solid #fff');
                        });
                        $(document).on('click.closepopup', function (e) {
                            if($('.js-overlay-thank-you').is(':visible')) {
                                $('.js-overlay-thank-you').fadeOut();
                                $('.form__item_error').text('');
                                $('.form__item_input').css('border-bottom', '0.5px solid #fff');
                            }
                        });
                    },
                    'error': function(e,c) {
                        console.log(e);
                    }
                })
                return true;
            } else {
                return false;
            }
        });
    });
    //Form validation END
});

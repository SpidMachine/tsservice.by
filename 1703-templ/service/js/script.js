 $(document).ready(function() {
	 	 
	   var nav = $('.bottom-bar');
	   var bb_height = 100;	   
	   $(window).scroll(function () {
		if ($(this).scrollTop() > bb_height) {
			nav.addClass("bb-nav");
		} else {
			nav.removeClass("bb-nav");
		}
	});

	$(".overlay").on("click", function (e) {		
		e.preventDefault();		
		$('.overlay').hide();
		$('.send-success').hide();
		$('.send-error').hide();
		$('.send-popup').hide();
    });
		
	
	$('.popup_send_success_close').click(function(e){
		e.preventDefault();
	$('.overlay').hide();
	$('.send-success').hide();
	
});		

$('.popup_send_close').click(function(e){
		e.preventDefault();
	$('.overlay').hide();
	$('.send-popup').hide();	
});	

$('.popup_send_error_close').click(function(e){
	e.preventDefault();
	$('.overlay').hide();
	$('.send-error').hide();
});	

$('.popup-show-btn').click(function(e){
	e.preventDefault();
	$('.overlay').show();
	$('.send-popup').show();
	$('.send-form input[name=subject]').val($(this).data('subject'));
});	


$('.popup-send-btn').click(function(e){
	e.preventDefault();
	var name  = $('.send-form').find('input[name=name]').val();
	var phone = $('.send-form').find('input[name=phone]').val();
	var subject = $('.send-form').find('input[name=subject]').val();
	
	if(phone.length == 0){
		$('.send-popup .popup-header').html('<span>Для отправления заявки заполните все необходимые поля!</span>');
	}else{
		
	$.ajax({
      type: "POST",
      url: "ajax",
      data: {
        action: "sendOrder", 
		actionerClass: "Ajaxuser", 
		name: name,
		phone: phone,
		subject: subject,
      },
      dataType: "json",
      cache: false,
      success: function(response){
		  if(response == 'success'){
				$('.send-popup').hide();
				$('.send-success').show(); 	
				$('.send-form').find('input[type=text]').val('');			
		  }else{
			$('.send-success').show(); 
			$('.send-success .popup-header').html('<span>Для отправления заявки заполните все необходимые поля!</span>');
		  }	  		  
        }, 
	    error: function(response){
			$('.send-popup').hide();
			$('.send-error').show(); 
        }
		
      });
}

	});
	

$('.callback-button').click(function(e){
	e.preventDefault();
	var form_call = $(this).parents('.callback-form');
	var name  = form_call.find('input[name=name]').val();
	var phone = form_call.find('input[name=phone]').val();
	var subject = form_call.find('input[name=subject]').val();
	
	//alert(phone.length);
	
	if(phone.length == 0){
		$('.overlay').show();
		$('.send-success').show(); 
		$('.send-success .popup-header').html('<span>Для отправления заявки заполните все необходимые поля!</span>');
	}else{
	$.ajax({
      type: "POST",
      url: "ajax",
      data: {
        action: "sendOrder", 
		actionerClass: "Ajaxuser", 
		name: name,
		phone: phone,
		subject: subject,
      },
      dataType: "json",
      cache: false,
      success: function(response){
		  if(response == 'success'){
				$('.overlay').show();
				$('.send-success').show(); 						
				$('.callback-form').find('input[type=text]').val('');			
		  }else{
			$('.send-success').show(); 
			$('.send-success .popup-header').html('<span>Для отправления заявки заполните все необходимые поля!</span>');
		  }	  		  
        }, 
	    error: function(response){
			$('.overlay').show();
			$('.send-error').show(); 
        }
      });
	  
	}
	});			
	
 $(".top-menu-toggle").on("click", function () { 
	 $(".top-menu-block").toggleClass('opened');
 });	
 
  $(".top-menu-toggle-close").on("click", function () { 
	 $(".top-menu-block").toggleClass('opened');
 });

 if(document.body.clientWidth > 580){ 
 
 $(".top-menu-toggle").on("mouseover", function () { 
	 $(".top-menu-block").addClass('opened');
 });	
 
 $(".top-menu-block").on("mouseleave", function () { 
  $(".top-menu-block").removeClass('opened');
 });	
 
 }
 
//---------------------------------------------------
 $(".change-delivery-date-button").on("click", function () { 
	 $('.change-delivery-date-button').removeClass('unvizzible');
	 $(this).addClass('unvizzible');
	 $('.delivery-date-text').toggleClass('unvizzible');
	 $('.delivery-date-number').toggleClass('unvizzible');
	 $('.delivery-date-day').toggleClass('unvizzible');
 });
//----------------------------------------------------			
    var toggleOpenClass = function(button, parent){
        $(button).on("click", function () {
            $(this).parents(parent).toggleClass("open");
        });
    }

    toggleOpenClass(".menu-toggle", ".filter-block");
    toggleOpenClass(".menu-toggle", ".news-block");
    toggleOpenClass(".menu-toggle", ".menu-block");
    toggleOpenClass(".clock-icon", ".work-hours");
 //   toggleOpenClass(".top-menu-toggle", ".top-menu-block");
    toggleOpenClass(".mg-main-menu .toggle", "li");
	toggleOpenClass(".slider-btn", ".slider");

    $(".addToCompare").on("click", function () {
        $(this).addClass("active");
    });

    $(".mg-filter-item h4").on("click", function () {
        $(this).parents(".mg-filter-item").toggleClass("open");
    });

    $("body").on("click", ".toggle", function () {
        $(this).parents("li").toggleClass("open");
    });

    $("table").wrap("<div class='table-wrapper'/>");

    $(".products-wrapper .product-wrapper").each(function () {

        var variants = $(this).find(".block-variants");
        if (variants.length) {
            $(this).find(".product-image").prepend("<span class='variants-text'><i class='fa fa-bookmark-o'></i> Есть варианты</span>");
            $('.variants-text').show();
        }
    });

    $(".enter-on .open-link").on("click", function (e) {
        e.preventDefault();
        $(this).parent().toggleClass("open");
    });

    $('html').click(function (event) {

        var target = $(event.target).parents(".enter-on");

        if (!target.length) {
            $(".enter-on").removeClass("open");
        }
    });

    $(".zoom").on("click", function () {
        $(this).prev().trigger("click");
    });

    function tabs(container, tabs) {
        var tabContainers = $(container);
        tabContainers.hide().filter(':first').show();

        $(tabs).click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).fadeIn("fast");
            $(tabs).removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    }

    tabs('.product-tabs-container > div', '.product-tabs li a');
//    tabs('.contact-tabs-container > div', '.contact-tabs li a');

    $(".contact-tabs li a").on("click", function () {
        var icon = $(this).find("span").clone();
        $(".icon-holder").html(icon);
    });

    function rememberView() {
        var className = localStorage["class"];
        //localStorage.clear();

        if (className === undefined) {
            $(".btn-group .view-btn:first-child").addClass("active");
            localStorage.setItem('class', 'grid');
        }

        else {
            $('.btn-group .view-btn[data-type="' + className + '"]').addClass("active");
            $('.products-wrapper.catalog').addClass(className);
        }

        $(".btn-group .view-btn").on("click", function (e) {
            e.preventDefault();
            var currentView = $(this).data('type');
            var product = $('.products-wrapper.catalog');
            product.removeClass("list grid");
            product.addClass(currentView);
            $('.btn-group .view-btn').removeClass("active");
            $(this).addClass("active");
            localStorage.setItem('class', $(this).data('type'));
            return false;
        });
    }

    rememberView();

    $(".show-hide-filters").on("click", function () {
        $(this).parent(".filter-block").toggleClass("show");
    });

    $(".close-icon").on("click", function () {
        $("body").removeClass("locked");
        $(this).parents(".menu-block").removeClass("open");
    });

    $(".mobile-toggle").on("click", function () {
        $("body").toggleClass("locked");
        $(this).parent(".menu-block").toggleClass("open");
    });

    $("body").on("click", ".menu-block.open .toggle", function () {
        $(this).parents("li").toggleClass("open");
    });

    var owl = $(".m-p-products-slider-start");

    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1024, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [780, 2], //2 items between 600 and 0
        itemsMobile: [500, 1], // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        navigation: true,
		rewindNav: false
    });

    var owl2 = $(".related-slider-start");

    owl2.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1100, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [1000, 3], // betweem 900px and 601px
        itemsTablet: [730, 2], //2 items between 600 and 0
        itemsMobile: [500, 1], // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        navigation: true,
		rewindNav: false
    });
	
	
	var owl3 = $(".m-p-partners-slider-start");

    owl3.owlCarousel({
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [1100, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [1000, 4], // betweem 900px and 601px
        itemsTablet: [730, 3], //2 items between 600 and 0
        itemsMobile: [500, 1], // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        navigation: true,
		rewindNav: false
    });
	
	  var owl4 = $(".m-p-big-products-slider-start");

    owl4.owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1024, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [780, 1], //2 items between 600 and 0
        itemsMobile: [500, 1], // itemsMobile disabled - inherit from itemsTablet option
        pagination: false,
        navigation: true,
		rewindNav: false
    });
	

    var mobileMenuParent = $(".mg-menu > li").has("ul");
    mobileMenuParent.append('<span class="toggle"></span>');
    mobileMenuParent.addClass("has-menu");
    var horizontalMenuParent = $(".mg-main-menu > li").has("ul");
    horizontalMenuParent.append('<span class="toggle"></span>');

    var slider_width = $('.menu-block').width() + 2;
    var deviceWidth = $(window).width();

    /*Mobile menu*/
    $(".top-menu-list li .slider_btn").on("click", function () {
        $(this).parent("li").toggleClass("open");
    });

    $(".mg-main-menu-toggle").on("click", function () {
        $(this).parent(".mg-main-menu-holder").toggleClass("open");
    });

    /*Fix mobile top menu position if login admin*/
    if ($("body").hasClass("admin-on-site")) {
        $("body").find(".mobile-top-panel").addClass("position-fix");
    }
});
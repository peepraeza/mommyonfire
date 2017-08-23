/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


	/*----------------------------------------------------*/
	/*	Sticky Navigation
	------------------------------------------------------*/
   $(window).on('scroll', function() {

		var y = $(window).scrollTop(),
		    topBar = $('header');
     
	   if (y > 1) {
	      topBar.addClass('sticky');
	   }
      else {
         topBar.removeClass('sticky');
      }
    
	});
	

	/*-----------------------------------------------------*/
  	/* Mobile Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   toggleButton.on('click', function(event){
		event.preventDefault();

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
	});

  	if (toggleButton.is(':visible')) nav.addClass('mobile');

  	$(window).resize(function() {
   	if (toggleButton.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('#main-nav-wrap li a').on("click", function() {   

   	if (nav.hasClass('mobile')) {   		
   		toggleButton.toggleClass('is-clicked'); 
   		nav.fadeOut();   		
   	}     
  	});


   /*----------------------------------------------------*/
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------*/
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'

	});


	/*----------------------------------------------------*/
  	/* Flexslider
  	/*----------------------------------------------------*/

  	$(window).load(function() {

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: true,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      touch: true,
	   });
	   $('#play-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'fade',
	      controlNav: false,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 4000,
	      animationSpeed: 600,
	      randomize: false,
	      touch: true,
	   });
	   $('#select-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: "",
	      animation: 'slide',
	      controlNav: true,
	      directionNav: false,
	      slideshow: false,
	      smoothHeight: true,
	      randomize: false,
	      touch: true,
	   });
   });

  	$(function(){
  		var item = [];
  		$(".book1").click(function() {
  		$('.ami:checked').each(function(){
  			item.push($(this).val());
		});
		localStorage.setItem("book1", item);
		});
  	});

  	$('.js-value').text($("input[name='dropp']:checked").val());
  	
  	$(function(){
  		var a = 0;
  		var b = 0;
    $(".rad input").click(function() {     
    	a = $("input[name=emotion]:checked").val();
    });
    $(".rad2 input").click(function() {     
    	a = $("input[name=emotion]:checked").val();
    });
    $(".radi input").click(function() {     
    	b = $("input[name=doctors]:checked").val();
    });
    $(".book2").click(function() {     
    	localStorage.setItem("book2", b);
    });
    $(".book3").click(function() {     
    	if(a == 0){
    		alert("please select choice");
    	}else{
    		localStorage.setItem("book3", a);
    		$(this).attr("href", "booking4.html"); 		
    	} 
    });
    $(".book4").click(function() {     
    	localStorage.setItem("name", $("input[name=name]").val());
    	localStorage.setItem("tel", $("input[name=tel]").val());
    	localStorage.setItem("email", $("input[name=email]").val());
    	localStorage.setItem("addr", $("textarea[name=address]").val());
    	localStorage.setItem("date", $("input[name='dropp']:checked").val());
    	localStorage.setItem("day1", $('#date1').val());
    	localStorage.setItem("day2", $('#date2').val());
    });
	});

	if (localStorage.getItem("book1") != null) {
		$('.showja').text(localStorage.getItem("book1"));
	}

	if (localStorage.getItem("name")) {
		$('#datail1').text(localStorage.getItem("name"));
	}
	if (localStorage.getItem("tel")) {
		$('#datail2').text(localStorage.getItem("tel"));
	}
	if (localStorage.getItem("email")) {
		$('#datail3').text(localStorage.getItem("email"));
	}
	if (localStorage.getItem("addr")) {
		$('#datail4').text(localStorage.getItem("addr"));
	}
	if (localStorage.getItem("book1") != null) {
		$('#datail5').text(localStorage.getItem("book1"));
	}
	
	$('#datail6').text(localStorage.getItem("date"));
	
	if (localStorage.getItem("day1")) {
		$('#datail7').text(localStorage.getItem("day1"));
	}
	if (localStorage.getItem("day2")) {
		$('#datail8').text(localStorage.getItem("day2"));
	}
	if (localStorage.getItem("book3") != null) {
		$('#datail9').text(localStorage.getItem("book3"));
	}
	if (localStorage.getItem("book2") != null) {
		$('#datail0').text(localStorage.getItem("book2"));
	}
	

	/*---------------------------------------------------- */
	/*	Modal Popup
	------------------------------------------------------ */

    $('.video-link a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'       

    });
	
	$('.login-link a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'       

    });

    $(document).on('click', '.close-popup', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });

	$("#pee").click(function(){
    	$("#test").show();
    	$("#next1").hide();
    	$("#next2").show();
	});

  	$(window).load(function() {

	   $('#doctor-slider').flexslider({
	   	  namespace: "flex-",
	      //controlsContainer: $(".custom-controls-container"),
    	  //customDirectionNav: $(".custom-navigation a"),
    	  controlsContainer: ".container",
    	  controlNav: true,
    	  manualControls: ".rad input",
	      animation: 'slide',
	      directionNav: false,
	      slideshow: false,
	      smoothHeight: true,
	      randomize: false,
	      touch: true,
	   });
	   $('#doctor-slider2').flexslider({
	   	  namespace: "flex-",
	      //controlsContainer: $(".custom-controls-container"),
    	  //customDirectionNav: $(".custom-navigation a"),
    	  controlsContainer: ".container2",
    	  controlNav: true,
    	  manualControls: ".rad2 input",
	      animation: 'slide',
	      directionNav: false,
	      slideshow: false,
	      smoothHeight: true,
	      randomize: false,
	      touch: true,
	   });
   });
  	$(".rad input").click(function(){
    	$("#sub").show();
	});

  	$.fn.showHide = function (options) {
        var defaults = {
            speed: 1000,
            easing: '',
            changeText: 0,
            showText: 'Show',
            hideText: 'Hide'
        };
        var options = $.extend(defaults, options);
        $(this).click(function () {
            $('.toggleDiv').slideUp(options.speed, options.easing);
            var toggleClick = $(this);
            var toggleDiv = $(this).attr('rel');
            $(toggleDiv).slideToggle(options.speed, options.easing, function () {
                if (options.changeText == 1) {
                    $(toggleDiv).is(":visible") ? toggleClick.text(options.hideText) : toggleClick.text(options.showText);
                }
            });
            return false;
        });
    };

    //Initial Show/Hide portfolio element.
    $('div.toggleDiv').hide();
    $('.show_hide').showHide({
        speed: 500,
        changeText: 0,
        showText: 'View',
        hideText: 'Close'
    });
  	$('#portfolio-grid').mixitup({
        'onMixStart': function (config) {
            $('div.toggleDiv').hide();
        }
    });
	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*----------------------------------------------------*/
	/*  Placeholder Plugin Settings
	------------------------------------------------------*/ 

	$('input, textarea, select').placeholder()  
	/*---------------------------------------------------- */
   /* ajaxchimp
	------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});

})(jQuery);


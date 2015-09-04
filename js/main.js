/* 
 * ----------------
 * Skript: Germania 2015
 * Für meine liebe Germania 2015
 * Von : Marc Ernst
 * Firma : SkyIT Webdesign Darmstadt
 * Erstellt: 26.7.2015
 * ----------------
 * Version 0.0.1
 * ----------------
 */

jQuery(document).ready(function($)  {
	// Landing
	
	//$('.linkitem a').unwrap(); //.unwrap();
	
	// Höhe
	var parent = $('html');
	var celement = $('.content_right');
	
	function getHeightFixed() {
		if (parent.height() < $(window).height() ) {
			// top part 260px , footer 40px
		//	console.log("Html: " + parent.height() + " Window: " + $(window).height());
			var fixedsize = 276;
			
			var minheight = parent.height() - ( $('.bottom').height() + fixedsize );
			celement.css('min-height', minheight);
		}
	}
	getHeightFixed();
	
	// Social Share Part
	
	var socialopen = false;
	
	$('.social').click(function() {
	    if (!socialopen) {
			$('.socialbar .container').slideDown(500);
			/*$('.socialbar .container').css({visibility: "visible"});
			$('.socialbar .container').css({position: "relative"});
			$('.socialbar .container').css({"zIndex":"500"});
			$('.socialbar .container').animate({height: "30px"},500); */
			$('body.scrollfixed .top').animate({top: "30px"},500);
		//	$('body.scrollfixed .menu').animate({top: "170px"},500);
			socialopen = true;
		} else {
			$('.socialbar .container').slideUp(500);
			/*$('.socialbar .container').css({visibility: "hidden"});
			$('.socialbar .container').css({position: "absolute"});
			$('.socialbar .container').css({"zIndex":"-500"});
			$('.socialbar .container').animate({height: "0px"},500);*/
			$('body.scrollfixed .top').animate({top: "0px"},500);
		//	$('body.scrollfixed .menu').animate({top: "140px"},500);
			socialopen = false;
		}
	});
	
	// Burger Menu
	
	
	var burger = $('.burger');
	var menu = $('.menu');
	
	burger.click( function() {
		menu.slideToggle();
	});


	    $('.scrollup a').click(function(event){
	    	event.preventDefault();
	        $('html, body').animate({scrollTop:0}, 'slow');
	        return false;
	    });

	
	/**
	 * Menu Fix
	 */
	
	$(window).resize(function() {

		resizeImage();
		//getHeightFixed();
		
		if ($(window).width() >= 945) {
			$('.menu').slideDown('fast');
		} else {
			$('.menu').hide();
		}
	});
	
	
     /*
      * Fix Shortcode Height
      */
      
     var sc1 = $('.shortcodes_left .sc_item').height();
     var sc2 = $('.shortcodes_middle .sc_item').height();
     var sc3 = $('.shortcodes_right .sc_item').height();
     var max = sc1;
     
 //    console.log('Max: ' + max + " [sc1/2/3]: " + sc1 + " " + sc2 + " " + sc3);
     resizeShortcodes();
     
 	function resizeShortcodes () {

 		     //if ($().width() > 959 ){
			     if (sc2 > max) {			     	
					max = sc2;	
			//		 console.log('Max: ' + max );	     	
			     }
			     if (sc3 > max) {
			     	max = sc3;
		//	     	 console.log('Max: ' + max );
			     }
		    
		     	$('.shortcodes_left .sc_item').height(max);
		     	$('.shortcodes_middle .sc_item').height(max);
		     	$('.shortcodes_right .sc_item').height(max);
		     	
		   //  }
 	}
 	
     
     /**
      * Fixedmenu
      */
     
		var isTouchDevice = 'ontouchstart' in document.documentElement;
     checkScrollPosition();
       
    function checkScrollPosition() {
    	var y = $(document).scrollTop();
    	//console.log("Scroll at Y: " + y);
	    if (y > 0 && !isTouchDevice) //  &&  $(window).width() >= 959 ) 
	    {	
	        $('body').addClass('scrollfixed');
	       
	    } else {
	        $('body').removeClass('scrollfixed');
	     //   $('.menu').css({top: "0px"});
	    }
	   
    }

     
    $(document).scroll( function() { checkScrollPosition(); });	
    //$(document).resize( function() { checkScrollPosition(); });	

	/*
	 * Opacity Effekt ScrollUp Link
	 */ 
	$("#scrollup i").hover(
		function() {
			$('#scrollup i').fadeIn().addClass("opacity50");
		 },
		function() {		
			$('#scrollup i').fadeIn().removeClass("opacity50");
		}
	);

		
	/**
	 * Smooth Scrollup
	 */
	
	$(function() {
	  	$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 800);
		        return false;
	      	  }
	    	}
	  	});
	});
	



	
	var slider = $('.slider');
	var	img = $('.slider img');
	
	function resizeImage() {
		var sliderratio = slider.width() / slider.height();
		console.log ('SliderRatio: ' + sliderratio);
		var sliderw = slider.width();
		
		
		img.each(function (index){
			var imgwidth = $(this).actual( 'width' ) ;
			var imgratio = imgwidth / $(this).actual( 'height' );;
		//	console.log('ImgRatio('+index+'): ' + imgratio);
			var slideroffset = -0.5 * (imgwidth - sliderw);
			//console.log("Slideroffset" + slideroffset);			
				
			if (imgratio > sliderratio) {
				$(this).addClass("img_gt_slider");				
				$(this).css({left: slideroffset});
			} else {
				$(this).removeClass("img_gt_slider");
				$(this).css({left: "0px"});
			}
		});	
		//return true;
	}
	
	resizeImage(); 
	// Container animate
	
	
	// bxSlider

	
	var bxslider = $('.slider .bxslider').bxSlider({
		mode : 'fade',
		useCSS : 'false',
		preloadImages: 'all',
		infiniteLoop: 'true',
		//preventDefaultSwipeY: 'true',
		onSlideBefore: function(){
		 // animateContainer();
		},
		onSliderLoad: function() {
		//	$('.slider_load').fadeOut(500);	
		//	setTimeout(resizeImage,10);		
		}
		
	});	
	
	
	// Carousel
	
	

		var seslider = $('.y7-se-slider');
		
		seslider.each(function(index) {
			
			$(this).bxSlider({
			minSlides: 1,
			maxSlides: 20,
			moveSlides: 1,
			//easing: 'ease',
			slideWidth: 133,
			slideMargin: 0,
			infiniteLoop: false,
			hideControlOnEnd: true,
			preloadImages: 'visible',
			pager: false,
			autoHover: false,
			controls: true,
			useCSS: false,
			auto: false,
			pause: 0,
			speed: 1000,
			randomStart: false
		});
		
		});
	
	
	//$('.slider .bxslider img').unwrap().unwrap().unwrap(); //
	
	$('.slider .csc-textpic-text').wrapInner('<div class="inner"></div>');

	$('.slider .bxslider .csc-textpic-text').addClass('container');
	
		 
	

});

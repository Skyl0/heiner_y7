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
	// Burger Menu
	
	var burger = $('.burger');
	var menu = $('ul.mainmenu');
	
	burger.click( function() {
		menu.slideToggle();
	});


	    $('.scrollup a').click(function(event){
	    	event.preventDefault();
	        $('html, body').animate({scrollTop:0}, 'slow');
	        return false;
	    });
	/*var scrollup = ".scrollup a";
	
	$(".scrollup a").onClick( function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop: (element).offset().top + "px"});
	});*/
	/**
	 * Youtube Iframe Respo Fix 
	 */
	
	var iframe = $('.content_right iframe');
	var gmaps = $('.inner_cbQuickGoogleMap');
	
	function resizeIframe() {
		var gwidth = gmaps.width();
		var iwidth = iframe.width();
		var gheight = (gwidth / 4) * 3;
		var iheight = (iwidth / 4) * 3;
		gmaps.height(gheight);
		iframe.height(iheight);
	}
	
	resizeIframe();
	
	/**
	 * Menu Fix
	 */
	
	$(window).resize(function() {
		resizeIframe();
		resizeImage();
		getHeightFixed();
		
		if ($(window).width() >= 945) {
			$('ul.mainmenu').fadeIn('fast');
		} else {
			$('ul.mainmenu').hide();
		}
	});
	
	/*
	 * Footer Fix
	 */
	     
     $('.bottom_middle a').each(function () {     	
     	$(this).text(" " + $(this).text() + " "); 
     });
	

	 // Fix for Responsive Gallery
     
     
     $('.unwrapper div.csc-textpic-imagecolumn').unwrap();
     //.each(function () {
     $('.unwrapper div.csc-textpic-imagecolumn').addClass('galleryfix');
     //}
     // End Fix
	
	
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
     
        var header = $(".menu");
        var slider = $(".slider");
        var zirkel = $(".zirkel");
        var titlebar = $(".titlebar");
		var isTouchDevice = 'ontouchstart' in document.documentElement;
     checkScrollPosition();
       
    function checkScrollPosition() {
    	var y = $(document).scrollTop();
    	//console.log("Scroll at Y: " + y);
	    if (y >= 40 && !isTouchDevice) //  &&  $(window).width() >= 959 ) 
	    {	
	        $('body').addClass('scrollfixed');
	    } else {
	        $('body').removeClass('scrollfixed');
	    }
	    
	    if (y >= 350 && !isTouchDevice) {
	    	$('body').addClass('hide-container');
	    } else {
	    	$('body').removeClass('hide-container');
	    } 
    }

     
  //  $(document).scroll( function() { checkScrollPosition(); });	
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
	



	
	//var sliderview = $('.slider .bx-viewport');
	var	img = $('.slider img');
	
	function resizeImage() {
		var sliderratio = slider.width() / slider.height();
	//	console.log ('SliderRatio: ' + sliderratio);
		
		img.each(function (index){
			var imgratio = $(this).actual( 'width' ) / $(this).actual( 'height' );;
		//	console.log('ImgRatio('+index+'): ' + imgratio);
			
			if (imgratio > sliderratio) {
				$(this).addClass("img_gt_slider");
			} else {
				$(this).removeClass("img_gt_slider");
			}
		});	
		//return true;
	}
	
	resizeImage();
	// Container animate
	
	
	var container = $('.sliderimg .csc-textpic-text');
	
	function animateContainer() {
		container.css('left','-300px');
		container.css('opacity','0');
		container.animate({ left: "10px", opacity: "1", duration: "1500", easing: "swing" });
	}
	
	// bxSlider
	//console.log('Vor Slider');
	$('a#c55').remove();
	
		
	var bxslider = $('.bxslider').bxSlider({
		mode : 'fade',
		useCSS : 'false',
		preloadImages: 'all',
		infiniteLoop: 'true',
		//preventDefaultSwipeY: 'true',
		onSlideBefore: function(){
		  animateContainer();
		},
		onSliderLoad: function() {
			$('.slider_load').fadeOut(500);	
			setTimeout(resizeImage,10);		
		}
		
	});	
	
	$('#yt_iframe').addClass('bx-pager-link','bx-pager-item');
	$('#yt_iframe').on('click', function(event) {
		//$('.slider .bx-pager').hide();	
	//	console.log("Click Iframe !");
		bxslider.stopShow();
		$('.bx-pager').hide();
		//$('.slider .bx-pager').css({
		//	"left":"-9999"
		//});	
		console.log("Click Iframe End!");
	});
	
	// Carousel
	
	var imgslider = $('.imagebar .imgslider');
		
	if ( $.trim(imgslider.html() ) ) {	// wenn element nicht leer
		$('.imagebar').css('visibility','visible');
		$('.imagebar').css('border-top','3px solid #333');
	    $('.imagebar').css('border-bottom','3px solid #333');
	    $('.imagebar').css('height','150px');
	}
	

		var seslider = $('.y7-se-slider');
		
		seslider.each(function(index) {
			
			$(this).bxSlider({
			minSlides: 1,
			maxSlides: 20,
			moveSlides: 0,
			easing: 'linear',
			slideWidth: 150,
			slideMargin: 3,
			infiniteLoop: false,
			hideControlOnEnd: false,
			preloadImages: 'visible',
			pager: false,
			autoHover: false,
			controls: true,
			useCSS: false,
			auto: false,
			pause: 0,
			speed: 3000,
			randomStart: false
		});
		
		});
	
	
	$('.bxslider img').unwrap().unwrap().unwrap().unwrap().unwrap();
	//usnnötige Wraps entfernen.

	$('.bxslider .csc-textpic-text').addClass('container');
	
	//Parallax
	if (!isTouchDevice) {
		$('.slider .container').attr('data-parallax','{"y":550, "smoothness":9}');//, "scaleX": 0.8, "scaleY": 0.9}'); //,"duration":2000,"smoothness":10 }');
	}
	
	//$('.tx-jh-simple-youtube').addClass('sliderimg');
	//$('.slider .parallax-layer').parallax();
		
		
	//console.log('Ende');
		 
	

});

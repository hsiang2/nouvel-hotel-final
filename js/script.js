$(document).ready(function () {

    var mobile = window.matchMedia("(max-width:767px)");
    var tablet = window.matchMedia("(min-width:768px)");

	let $nav = $(".left-nav-list"),
		$menu = $(".nav__menu"),
        $navItem = $(".left-nav-item"),
        $navLink = $(".left-nav-link"),
        $othersBlock = $(".others-block"),
        $prev = $("#prev"),
        $next = $("#next"),
        indicator = ["#indicator1","#indicator2", "#indicator3", "#indicator4"];
    let i = 0;

    //nav
    $menu.click(function () {
		$nav.toggleClass("menu-click");
        $navItem.toggleClass('animate__animated animate__fadeIn');
	}); 

    $navLink.click(function(){
        if(mobile.matches){
            $(this).siblings().slideToggle();
            $(this).parent().siblings().children(".nav-sublist").slideUp();
        }
    });
   
    $navItem.hover(function(){
            if(tablet.matches){
                $(this).children(".nav-sublist").css("display","block");
            }
        }
        ,function(){
            if(tablet.matches){
                $(this).children(".nav-sublist").css("display","none");
            }
    });

    //others-carousel
    $next.on("click", function(){
        $(indicator[i*(-1)]).css("background-color", "rgb(67, 77, 85)");
        i--;
        if(i<-3){i = 0;}
        $othersBlock.css("transform", `translate(${i * 100}%)`);
        $(indicator[i*(-1)]).css("background-color", "rgb(255, 250, 241)");
    });

    $prev.on("click", function(){
        $(indicator[i*(-1)]).css("background-color", "rgb(67, 77, 85)");
        i++;
        if(i>0){i = -3;}
        $othersBlock.css("transform", `translate(${i * 100}%)`);
        $(indicator[i*(-1)]).css("background-color", "rgb(255, 250, 241)");
    });

    $(function(){
        new WOW().init();
    });

 });
    
 //============back_to_top====================

 $(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
});   
$(document).ready(function() {
	$("#features").waypoint(function(direction) {
		if (direction == "down") {
			$("#nav-div").addClass("sticky")
		} else {
			$("#nav-div").removeClass("sticky")
		}
	}, {
	offset: "60px"});

	/* Smooth scrolling for navigations */
	$(function() {
	  // $('a[href*=#]:not([href=#])').click(function() {
	  $('a[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 60
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	$("#main-nav i").click(function() {
		var nav = $("#main-nav ul li"); 
		var icon = $("#main-nav i"); 
		nav.slideToggle("slow");

		if (icon.hasClass("fa-bars")) {
			icon.removeClass("fa-bars"); 
			icon.addClass("fa-times-circle"); 
		} else {
			icon.addClass("fa-bars"); 
			icon.removeClass("fa-times-circle"); 
		}
	});

	// $("#main-nav li a").click(function() {
	// 	var nav = $("#main-nav ul li"); 
	// 	var icon = $("#main-nav i"); 
	// 	nav.slideToggle("slow");

	// 	if (icon.hasClass("fa-bars")) {
	// 		icon.removeClass("fa-bars"); 
	// 		icon.addClass("fa-times-circle"); 
	// 	} else {
	// 		icon.addClass("fa-bars"); 
	// 		icon.removeClass("fa-times-circle"); 
	// 	}
	// });


}); 


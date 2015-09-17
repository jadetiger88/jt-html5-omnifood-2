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
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});


}); 


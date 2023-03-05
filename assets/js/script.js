$(document).ready(function(){
  $('.header-burger').click(function(event) {
    $('.header-menu').toggleClass('active');
  });
});

$(document).ready(function($) {
	$('.sliderItem').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});




// $(document).ready(function(){
//   $('.sliderItem').click(function(event) {
//     $('.header_popup').toggleClass('active');
//   });
// });


// $(document).ready(function(){
//   $('.sliderItem').click(function(event) {
//     $('.shop_popup').toggleClass('active');
//   });
// });

// $(document).ready(function(){
//   $('.clouse').click(function(event) {
//     $('.shop_popup').removeClass('active');
//   });
// });


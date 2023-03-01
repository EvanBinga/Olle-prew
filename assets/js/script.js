$(document).ready(function(){
  $('.header-burger').click(function(event) {
    $('.header-menu').toggleClass('active');
  });
});


$(document).ready(function(){
  $('.sliderItem').click(function(event) {
    $('.header_popup').toggleClass('active');
  });
});

$(document).ready(function(){
  $('.header_popup_text_clouse').click(function(event) {
    $('.header_popup').toggleClass('active');
  });
});

$(document).ready(function(){
    $('.click').click(function(event) {
      $('.popup_box').addClass('active');
    });
  });

  $(document).ready(function(){
    $('.clouse').click(function(event) {
      $('.popup_box').toggleClass('active');
    });
  });



  $(document).ready(function(){
    $('.call').click(function(event) {
      $('.header_popup').toggleClass('active');
    });
  });

  $(document).ready(function(){
    $('.header_popup_text_clouse').click(function(event) {
      $('.header_popup').toggleClass('active');
    });
  });




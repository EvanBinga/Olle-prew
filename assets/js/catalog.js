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


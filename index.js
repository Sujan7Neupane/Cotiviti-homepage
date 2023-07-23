$(window).scroll(function(e){
    console.log($(window).scrollTop());
     var scroll = $(window).scrollTop();
    if (scroll > 100){
      $("#scroll").fadeIn();
    }
    else {
      $("#scroll").fadeOut();
    }
  });
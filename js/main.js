$(function(){

  var touchstart,touchmove,touchend,touchcancel;
  var isTouch = ('ontouchstart' in window);
    
  touchstart = (isTouch ? 'touchstart' : 'mousedown');
  touchmove = (isTouch ? 'touchmove' : 'mousemove');
  touchend = (isTouch ? 'touchend' : 'mouseup');

  document.addEventListener("touchstart", function(){
    event.preventDefault();    
  }, false);

  $(".UIButton").bind(touchstart,function(){  
    $(".UIButton").removeClass("UIButtonTouchDown");
    $(this).addClass("UIButtonTouchDown");
  });

  $(".UIButton").bind(touchmove,function(){ 
    $(this).removeClass("UIButtonTouchDown");
  });

  $(".UIButton").bind(touchend,function(){
    if ($(this).hasClass('UIButtonTouchDown')) {  }
    $(this).removeClass("UIButtonTouchDown");
  });
  
});



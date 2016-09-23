if ($.browser.webkit) {
  // yeah, sorry.. but this demo uses appearance:none which hasn't good support anywhere else.
  $('html').addClass('WebKit');
}

$('#show').change( function() {
  $('#animation').toggleClass('showRoll');
});


var labelSide = "right";

$('#duration-input').change( function() {
  var val = $(this).val();
  var valRounded = Math.round( val * 10 ) / 10;
  var mid = $(this).attr('max')/2;
  $('#frame').css("animation-duration", val + "s" );
  $('#roll').css("animation-duration", val + "s" );
  $('#duration-label').text( valRounded );
  
  if(val > mid && labelSide == "right") {
    labelSide = "left";
    $('#duration-label').removeClass("isRight").addClass("isLeft");
    
  } else if(val <= mid && labelSide == "left") {
    labelSide = "right";
    $('#duration-label').removeClass("isLeft").addClass("isRight");
  }
});
$(document).ready(function(){
  setTimeout(function(){
    $('#cookie-popup').fadeIn();
  }, 3000);  
  $('#closeBtn').click(function(){
    $('#cookie-popup').hide();
  });
});
$(document).ready(function(){
  $('.jumbotron').first().show();
  $('.nav a').click(function(e){
    //e.preventDefault();
    var block = $(this).attr('href');
    $('.jumbotron').hide();
    $(block).show();

  });
})
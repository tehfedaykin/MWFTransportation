$(document).ready(function(){
  $('.jumbotron').first().show();
  $('.nav a').click(function(e){
    //e.preventDefault();
    var block = $(this).attr('href');
    $('.jumbotron').hide();
    $(block).show();
    console.log('clicked');
  });

  $('#searchName').click(function(){
    var name = $('#name').val();
    var row = $('table').find('tr');
    for (var i = 0; i < row.length; i++) {
      var $row = $(row[i]);
      var string = $row.html().toString();
      console.log(string);
      if(string.indexOf(name) <0){
        if(string.indexOf('<th>') < 0){
          $row.hide();
        }
      }
      else{
        $row.show();
      }
    };
  });
})
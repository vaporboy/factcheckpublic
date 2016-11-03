$(document).ready(function(){

  // init jqueryui datepicker
  $(function() {
    $("#lsb-datepicker").datepicker({
      dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
    });
  });

  // add active class to panel-heading
  $(".panel-default .panel-heading").click(function(e){
    e.preventDefault();
    $(".panel-default .panel-heading").removeClass("active");
    $(this).addClass("active");
  });

});

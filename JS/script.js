$(document).ready(function(){
  


  $(".overlay, .para, .para2, .para3").hide();

      $('#HomeButton').click(function() {
      $(".overlay").hide();
	});

     $('#AboutButton').click(function() {
      $(".overlay").show();
      $(".para").show();
      $(".para2, para3").hide();
	});

     $('#CategorizeButton').click(function() {
      $(".overlay").show();
      $(".para2").show();
      $(".para, .para3").hide();
	});

     $('#SubmitButton').click(function() {
      $(".overlay").show();
      $(".para3").show();
      $(".para, .para2").hide();
	});


      $('.overlay').click(function() {
      $(".overlay").toggle();
	});
                

    });
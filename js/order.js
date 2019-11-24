var call = document.getElementById('call');
call.addEventListener('click', function (event) {
	event.preventDefault();
	var name = document.getElementById('name-p').value;
	var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').number; 
  
  //Beutiful form
	if (name === '' || email === '' || phone === '') {
		swal({
		  type: 'error',
		  title: 'Error',
		  text: 'Please fill all the required fields',
		})
	} else {
		swal(
			'Sent!',
			'Wait for our call',
			'success'
		)
    }
}
$(function() 
    
    {$("#display").click(function() {
      $(".hidden-area").css("display", "flex");
      $("#hide").css("display", "flex");
      $("#display").css("display", "none");
    });

    $("#hide").click(function() {
      $(".hidden-area").css("display", "none");
      $("#hide").css("display", "none");
      $("#display").css("display", "flex");
    });
});
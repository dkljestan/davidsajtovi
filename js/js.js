
$(document).ready(function(){
	$('#meni').on('click',function (e) {
      e.preventDefault();
      $('#ja').toggleClass('active');
    })
});
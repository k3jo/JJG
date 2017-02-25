$(document).ready(function(){


console.log('first');

	$('label').on('click', function(){
		$('.emoji-group').removeClass('selected-bg');
		$(this).find('.emoji-group').addClass('selected-bg');
	});

	console.log("hi there");




});

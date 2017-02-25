$(document).ready(function(){



	$('label').on('click', function(){
		$('.emoji-group').removeClass('selected-bg');
		$(this).find('.emoji-group').addClass('selected-bg');
	});

	$('label').on('click', function(){
		$('svg .picked').css('fill', '#58595B');
		$(this).find('.picked').css('fill', '#FFDE17');
	});


});

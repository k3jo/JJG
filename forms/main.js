$(document).ready(function(){

	$('label').on('click', function(){
		var groupClass = $(this).attr('class');
		$('.' + groupClass + ' .emoji-group').removeClass('selected-bg');
		$(this).find('.emoji-group').addClass('selected-bg');
		console.log(groupClass);
	});


	$('label').on('click', function(){

		var otherGroup = $(this).attr('class');
		 $('.' + otherGroup + ' .picked').css('fill', '#58595B');
		$(this).find('.picked').css('fill', '#FFDE17');
	});

});



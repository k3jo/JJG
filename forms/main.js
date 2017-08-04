$(document).ready(function(){

//background change
	$('label').on('click', function(){
		var groupClass = $(this).attr('class');
		$('.' + groupClass + ' .emoji-group').removeClass('selected-bg');
		$(this).find('.emoji-group').addClass('selected-bg');
	});
	//.row-2 .emoji-group

	//upon loading saved selections, toggled classes load in
	$('input').each(function(i){
		var superClass = $(this).parent().parent().attr('class');
		$('.' + superClass + ' .emoji-group').addClass('selected-bg');
		$('.' + superClass + ' .picked').css('fill', '#FFDE17');
		// console.log(i);
	});



//fill change
	$('label').on('click', function(){

		var otherGroup = $(this).attr('class');
		 $('.' + otherGroup + ' .picked').css('fill', '#58595B');
		$(this).find('.picked').css('fill', '#FFDE17');
	});

});



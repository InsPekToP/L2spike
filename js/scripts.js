$(document).ready(function() {
	$('.main_menu li a').click(function(event) {
	  if(!$(this).is('.active')) {
	    $('.main_menu li a').removeClass('active');
	    $(this).addClass('active');
	  } 
	});
	$('.button.donate').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('.modal_donate') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
			});
	});
	$('.fbutton.donate').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('.modal_donate') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
			});
	});
	
	$('#overlay,.close_modal').click( function(){
		$('.modal_donate')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){ 
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
	$('.file_dwnd').click( function(event){ 
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('.modal_files') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200);
			});
	});
	
	$('#overlay,.close_modal').click( function(){
		$('.modal_files')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){ 
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});
});
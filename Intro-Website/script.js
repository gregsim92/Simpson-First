$(document).ready(function() {
	$('button').on('click', function() {
		$(this).css({'background-color':'#e6e600'})
		});
	$('button').on('dblclick', function() {
		$(this).remove();
	});
});

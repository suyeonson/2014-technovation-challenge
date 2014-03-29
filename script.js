$(document).ready(function() {
	$('#checkin').click(function() {
		event.preventDefault();
		$('#map').append("<p>This area should populate with new points.</p>");
	});
});
function done () {
	$('input').keyup(function(event) {
		var value = $(this).val();
		var words = recommendWord(value, 10);

		var lis = '';
		for (var i in words) {
			lis += '<li>' + words[i] + '</li>';
		}
		$('.recommendation').html(lis);
	});
}
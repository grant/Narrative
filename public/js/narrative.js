$(function() {
    // Turn off automatic editor creation first.
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline('editable');

	$('.publishButton').click(function() {
		var content = CKEDITOR.instances.editable.getData();
		var postData = {
			author: 'Grant Timmerman',
			content: content,
			promptId: 123
		};

		$.post('api/narrative/add', postData, function() {
			console.log('publish success');
		});
	});
});
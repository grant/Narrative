$(function() {
    // Turn off automatic editor creation first.
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline('editable');

	$('.finalPublishButton').click(function() {
		var content = CKEDITOR.instances.editable.getData();
		var postData = {
			title: $('.titleName').val(),
			author: $('.authorName').val(),
			content: content,
			promptId: 123
		};

		$.post('api/narrative/add', postData, function() {
			console.log('publish success');
		});
	});
});
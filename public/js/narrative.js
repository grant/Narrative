$(function() {
    // Turn off automatic editor creation first.
    CKEDITOR.disableAutoInline = true;
    CKEDITOR.inline('editable');

	$('.finalPublishButton').click(function() {
		var content = CKEDITOR.instances.editable.getData();
		var postData = {
			promptId: $('.prompt').data('promptid'),
			title: $('.titleName').val(),
			author: $('.authorName').val(),
			content: content
		};

		$.post('api/narrative/add', postData, function() {
            window.location = '/narratives';
		});
	});
});
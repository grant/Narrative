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

		console.log('posting');
		$.post('api/narrative/add', postData, function(data) {
			console.log(data);
            window.location = '/narratives';
		});
	});
});
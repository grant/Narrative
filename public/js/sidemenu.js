    $('#the-thing-that-opens-your-alert').click(function () {
      $('#alert').addClass('in'); // shows alert with Bootstrap CSS3 implem
    });
    
    $('.close').click(function () {
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });


    $('#another-thing-that-opens-an-alert').click(function () {
    $('#alert2').addClass('in'); // shows alert with Bootstrap CSS3 implem
    });
    
    $('.close').click(function () {
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

    $('.changeButton').click(function() {
    	ChangeIt();
    });

	function ChangeIt() {
    	var totalCount = 18;
        var num =  Math.ceil( Math.random() * totalCount );
        document.body.background = '../img/cover/00'+num+'.jpg';
        document.body.style.backgroundColor = "black";
    }

    ChangeIt();
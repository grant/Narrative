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

    

    //Prompts modal dialog
    $('.publishButton').click(function(){
            $('.publishButton-modal').modal();
        }); //cancel-signup click

    $('.btn-abandon').click(function(){
        window.location = 'http://www.google.com';
    }); //Redirects to Google



	function ChangeIt() {
    	var totalCount = 18;
        var num =  Math.ceil( Math.random() * totalCount );
        document.body.background = '../img/cover/00'+num+'.jpg';
        document.body.style.backgroundColor = "black";
    }

    ChangeIt();
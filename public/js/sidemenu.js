    var prompt = 0;
    $('.changeButton2').click(function () {
      $('#alert').addClass('in'); // shows alert with Bootstrap CSS3 implem
    });

    $('.close').click(function () {
        prompt = 0;
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });


    $('.changeButton').click(function () {
    $('#alert2').addClass('in'); // shows alert with Bootstrap CSS3 implem
    });

    $('.close').click(function () {
        prompt = 0;
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

    $('#the-thing-that-opens-your-alert').click(function(){
        if (prompt == 0){
            var num = Math.ceil(Math.random() * 2);
            if ( num == 1) {
                $('#alert').addClass('in');
                prompt = 2;
            }
            else if (num == 2) {
                $('#alert2').addClass('in');
                prompt = 1;
            }
        }
        else {
            if ( prompt == 1) {
                $('#alert').addClass('in');
            }
            else if (prompt == 2) {
                $('#alert2').addClass('in');
            }
        }
    });

    $(function(){
        //Prompts modal dialog
        $('.publishButton').click(function(){
                $('.publish-modal').modal();
            }); //cancel-signup click

        $('.btn-abandon').click(function(){
            window.location = 'http://mynarrative.co/narratives';
        }); //Redirects to Google

    });
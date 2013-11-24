    var prompt = 0;
    $('.changeButton2').click(function () {
      $('#alert').addClass('in'); // shows alert with Bootstrap CSS3 implem
    });
    
    $('.close').click(function () {
        prompt = 0;
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

    var words = new Array();
        words[0] = "Contemplate";
        words[1] = "Brandish";
        words[2] = "Zip";
        words[3] = "Vanish";
        words[4] = "Itch";
        words[5] = "dangle";
        words[6] = "Resemble";
        words[7] = "Terrorize";
        words[8] = "Escape";
        words[9] = "Fix";
        words[10] = "Vortex";
        words[11] = "Meaning";
        words[12] = "Moonlight";
        words[13] = "Event";
        words[14] = "Music";
        words[15] = "Cobweb";
        words[16] = "Hook";
        words[17] = "Feather";
        words[18] = "Wilderness";
        words[19] = "Volcano";
        words[20] = "Futile";
        words[21] = "Remarkable";
        words[22] = "Ridiculous";
        words[23] = "Fundamental";
        words[24] = "Scary";
        words[25] = "Skeptical";
        words[26] = "Sneaky";
        words[27] = "Idyllic";
        words[28] = "Transparent";
        words[29] = "Uncomfortable";
        words[30] = "Dramatically";
        words[31] = "Randomly";
        words[32] = "Metaphorically";
        words[33] = "Blindly";
        words[34] = "Frantically";
        words[35] = "Naughtily";
        words[36] = "Shamelessly";
        words[37] = "Studiously";
        words[38] = "Wildly";
        words[39] = "Vaguely";

    var quotes = new Array();
        quotes[0] = "You must be the change you wish to see in the world.<br />-Mahatma Gandhi";
        quotes[1] = "I'm so happy because today I found my friends - they're in my head.<br />-Kurt Cobain";
        quotes[2] = "I'd rather be hated for who I am, than loved for who I am not.<br />-Kurt Cobain";
        quotes[3] = "If you change the way you look at things, the things you look at change.<br />-Wayne Dyer";
        quotes[4] = "Everyone thinks of changing the world, but no one thinks of changing himself.<br />-Leo Tolstoy";
        quotes[5] = "Think of all the beauty still left around you and be happy.<br />-Anne Frank";
        quotes[6] = "Do not go where the path may lead, go instead where there is no path and leave a trail.<br />-Ralph Waldo Emerson";
        quotes[7] = "Experience is not what happens to you; it's what you do with what happens to you.<br />-Aldous Huxley";
        quotes[8] = "To win, you must risk losing.<br />-Francesco Moser";
        quotes[9] = "I can accept failure, everyone fails at something. But I can't accept not trying.<br />-Michael Jordon";

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
                alert1();
                prompt = 2;
            }
            else if (num == 2) {
                alert2();
                prompt = 1;
            }
        }
        else {
            if ( prompt == 1) {
                alert1();
            }
            else if (prompt == 2) {
                alert2();
            }
        }
    });

    function alert1 () {
        $('#alert').addClass('in');
    }

    function alert2 () {
        $('#alert2').addClass('in');
    }

    
    $(function(){
        //Prompts modal dialog
        $('.publishButton').click(function(){
                $('.publish-modal').modal();
            }); //cancel-signup click

        $('.btn-abandon').click(function(){
            window.location = '/narratives';
        });

    });




	function ChangeIt() {
    	var totalCount = 18;
        var num =  Math.ceil( Math.random() * totalCount );
        document.body.background = 'https://s3.amazonaws.com/narrativeBlob/images/00'+num+'.jpg';
        document.body.style.backgroundColor = "black";
    }

    ChangeIt();

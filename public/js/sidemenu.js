    var prompt = 0;
    $('.changeButton2').click(function () {
      $('#alert').addClass('in'); // shows alert with Bootstrap CSS3 implem
    });
    
    $('.close').click(function () {
        prompt = 0;
      $(this).parent().removeClass('in'); // hides alert with Bootstrap CSS3 implem
    });

    var verbs = new Array();
        verbs[0] = "Contemplate";
        verbs[1] = "Brandish";
        verbs[2] = "Zip";
        verbs[3] = "Vanish";
        verbs[4] = "Itch";
        verbs[5] = "dangle";
        verbs[6] = "Resemble";
        verbs[7] = "Terrorize";
        verbs[8] = "Escape";
        verbs[9] = "Fix";

    var nouns = new Array();
        nouns[0] = "Vortex";
        nouns[1] = "Meaning";
        nouns[2] = "Moonlight";
        nouns[3] = "Event";
        nouns[4] = "Music";
        nouns[5] = "Cobweb";
        nouns[6] = "Hook";
        nouns[7] = "Feather";
        nouns[8] = "Wilderness";
        nouns[9] = "Volcano";

    var adjectives = new Array();
        adjectives[0] = "Futile";
        adjectives[1] = "Remarkable";
        adjectives[2] = "Ridiculous";
        adjectives[3] = "Fundamental";
        adjectives[4] = "Scary";
        adjectives[5] = "Skeptical";
        adjectives[6] = "Sneaky";
        adjectives[7] = "Idyllic";
        adjectives[8] = "Transparent";
        adjectives[9] = "Uncomfortable";

    var adverbs = new Array();
        adverbs[0] = "Dramatically";
        adverbs[1] = "Randomly";
        adverbs[2] = "Metaphorically";
        adverbs[3] = "Blindly";
        adverbs[4] = "Frantically";
        adverbs[5] = "Naughtily";
        adverbs[6] = "Shamelessly";
        adverbs[7] = "Studiously";
        adverbs[8] = "Wildly";
        adverbs[9] = "Vaguely";

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
        totalQuotes = 10;
        $('.helpfulquotes').html(quotes[Math.floor(Math.random() * totalQuotes)]);

    }

    function alert2 () {
        $('#alert2').addClass('in');
        totalWords = 10;
        var words = verbs[Math.floor(Math.random() * totalWords)] + "<br /></br>" + nouns[Math.floor(Math.random() * totalWords)] + "<br /></br>" + adjectives[Math.floor(Math.random() * totalWords)] + "<br /></br>" + adverbs[Math.floor(Math.random() * totalWords)];
        $('.helpfulwords').html(words);
        
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


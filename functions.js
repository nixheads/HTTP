$(document).ready(function() {

    setInterval ('cursorAnimation()', 900);

    var text = 'nixheads@TheInternet ~/ $ whois nixheads<br><br>Nixheads is a *nix community based on <a href="https://en.wikipedia.org/wiki/Internet_Relay_Chat">IRC</a> using the <a href="https://freenode.net/">Freenode</a> network.<br><br>The Nixheads community channel is called ##nixheads and can be accessed via <a href="https://webchat.freenode.net/">a web client</a> or your own installed IRC client.<br><br>The community is slowly growing and always welcoming new members of any skill level. The channel exists to provide support and to be a friendly place to talk to friends.<br><br><br>They welcome you to also join them on their reddit page<br>and take a look at their github projects; make contributions they are always appreciated.<br><br><br>nixheads@TheInternet ~/ $';
    type(text);
});

function type(text, new_caption_length) {
    captionLength = new_caption_length || 0;

    $('#caption').html(text.substr(0, captionLength++));
    if(captionLength < text.length+1) {
        setTimeout(function(){
            type(text, captionLength);
        }, 1);
    }
}

function erase() {
    caption = $('#caption').html();
    captionLength = caption.length;
    if(captionLength > 0){
        $('#caption').html(caption.substr(0, captionLength-1));
        setTimeout(function(){
            erase();
        }, 1);
    }

}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

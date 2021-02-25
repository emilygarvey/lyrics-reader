let apiBaseUrl = 'https://api.lyrics.ovh/v1/'

let synth = window.speechSynthesis;
let isMuted;

$('#get-lyrics').click(function() {
    let artist = $('#artist').val();
    let title = $('#title').val();

    getLyrics(artist, title).then(function(lyrics) {
        $('#lyrics').text(lyrics);

        speak(lyrics);
    });
});

function getLyrics(artist, title) {
    $('#lyrics').text('Loading...');

    return fetch(`${apiBaseUrl}${artist}/${title}`).then(function(response) {
        return response.json().then(function(result) {
            return result.lyrics;
        });
    });
}

$('#pause-resume').click(toggleSpeech);

function speak(text) {
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.volume = 1;
    synth.cancel();
    isMuted = false;
    synth.speak(utterance);
    $('#pause-resume').text('PAUSE');
}

function toggleSpeech() {
    let button = $('#pause-resume');

    if (isMuted) {
        synth.resume()
        isMuted = false;
        button.text('PAUSE');
    } else {
        synth.pause();
        isMuted = true;
        button.text('RESUME');
    }
}

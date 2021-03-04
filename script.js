let apiBaseUrl = "https://api.lyrics.ovh/v1/";

let synth = window.speechSynthesis;
let isMuted;
let utterance;
let volume = 0.5;
let voices;
let chosenVoice = 0;

setTimeout(() => {
  voices = synth.getVoices();
  voices = filterVoices(voices);
  console.log(voices);
  addVoiceButtons();
}, 500);

function filterVoices(voices) {
  return voices.filter((voice) => {
    if (voice.lang === "en-US") {
      return true;
    } else {
      return false;
    }
  });
}

function updateVoice(index) {
  chosenVoice = index;
}

function addVoiceButtons() {
  voices.forEach((voice, index) => {
    $(".voice-buttons").append(
      `<button onclick="updateVoice(${index})">${voice.name}</button>`
    );
  });
}

$("#get-lyrics").click(function () {
  let artist = $("#artist").val();
  let title = $("#title").val();

  getLyrics(artist, title).then(function (lyrics) {
    $("#lyrics").text(lyrics);

    speak(lyrics);
  });
});

function getLyrics(artist, title) {
  $("#lyrics").text("Loading...");

  return fetch(`${apiBaseUrl}${artist}/${title}`).then(function (response) {
    return response.json().then(function (result) {
      return result.lyrics;
    });
  });
}

$("#pause-resume").click(toggleSpeech);

function speak(text) {
  utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.volume = volume;
  utterance.voice = voices[chosenVoice];
  synth.cancel();
  isMuted = false;
  synth.speak(utterance);
  $("#pause-resume").text("PAUSE");
}

function toggleSpeech() {
  let button = $("#pause-resume");

  if (isMuted) {
    synth.resume();
    isMuted = false;
    button.text("PAUSE");
  } else {
    synth.pause();
    isMuted = true;
    button.text("RESUME");
  }
}

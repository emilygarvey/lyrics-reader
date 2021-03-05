let apiBaseUrl = "https://api.lyrics.ovh/v1/";

let synth = window.speechSynthesis;
let isMuted;
let utterance;
let volume = 0.5;
let voices;
let chosenVoice = 0;

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

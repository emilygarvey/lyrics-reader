let apiBaseUrl = "https://api.lyrics.ovh/v1";

let synth = window.speechSynthesis;
let utterance;
let volume = 0.5;
let voices;
let chosenVoice = 0;

// Write code here
$("#get-lyrics").click(function () {
  let artist = $("#artist").val();
  let song = $("#title").val();
  fetch(`${apiBaseUrl}/${artist}/${song}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $("#lyrics").text(data.lyrics);
      speak(data.lyrics);
      console.log(data.lyrics);
    });
});

// Do not change below here
function speak(text) {
  utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.volume = volume;
  utterance.voice = voices[chosenVoice];
  synth.speak(utterance);
}

$("#stop").click(function () {
  synth.cancel();
  $("#lyrics").text("");
});

// Extension: complete updateVoices and addVoiceButtons
function updateVoice(index) {
  chosenVoice = index;
}

function addVoiceButtons() {}

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

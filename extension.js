//Copy this code into script.js to begin working on the voice changer extentsion

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

function addVoiceButtons() {}

/*functions declared to get audio by id and play*/
function no() {
  stopSongs();
  document.getElementById("No").currentTime = 0;
  document.getElementById("No").play();
}
function Aboot() {
  stopSongs();
  document.getElementById("aBoot").currentTime = 0;
  document.getElementById("aBoot").play();
}
function tenPast5() {
  stopSongs();
  document.getElementById("tenPast5").currentTime = 0;
  document.getElementById("tenPast5").play();
}
function firstClass() {
  stopSongs();
  document.getElementById("firstClass").currentTime = 0;
  document.getElementById("firstClass").play();
}
function getRidOfIt() {
  stopSongs();
  document.getElementById("getRidOfIt").currentTime = 0;
  document.getElementById("getRidOfIt").play();
}
function idiot() {
  stopSongs();
  document.getElementById("idiot").currentTime = 0;
  document.getElementById("idiot").play();
}
function idLoveTo() {
  stopSongs();
  document.getElementById("idLoveTo").currentTime = 0;
  document.getElementById("idLoveTo").play();
}
function mentalist() {
  stopSongs();
  document.getElementById("mentalist").currentTime = 0;
  document.getElementById("mentalist").play();
}
function nirvana() {
  stopSongs();
  document.getElementById("nirvana").currentTime = 0;
  document.getElementById("nirvana").play();
}
/*function to stop songs/audio files */
function stopSongs() {
  document.getElementById("No").pause();
  document.getElementById("aBoot").pause();
  document.getElementById("tenPast5").pause();
  document.getElementById("firstClass").pause();
  document.getElementById("getRidOfIt").pause();
  document.getElementById("idLoveTo").pause();
  document.getElementById("idiot").pause();
  document.getElementById("mentalist").pause();
  document.getElementById("nirvana").pause();
}
/*function declared to convert text in to speech*/
function textToSpeech() {
  let msg = document.getElementById("text-Audio").value;
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.cancel(speech);
  window.speechSynthesis.speak(speech);
}

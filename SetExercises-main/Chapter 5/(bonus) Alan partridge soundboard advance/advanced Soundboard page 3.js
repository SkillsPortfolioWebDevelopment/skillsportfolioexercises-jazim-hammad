/*functions declared to get audio by id and play*/ function Ok() {
  stopSongs();
  document.getElementById("ok").currentTime = 0;
  document.getElementById("ok").play();
}
function Bugger() {
  stopSongs();
  document.getElementById("bugger").currentTime = 0;
  document.getElementById("bugger").play();
}
function Striker() {
  stopSongs();
  document.getElementById("striker").currentTime = 0;
  document.getElementById("striker").play();
}
function thirdTime() {
  stopSongs();
  document.getElementById("Thirdtime").currentTime = 0;
  document.getElementById("Thirdtime").play();
}
function toughOne() {
  stopSongs();
  document.getElementById("Toughone").currentTime = 0;
  document.getElementById("Toughone").play();
}
function Um() {
  stopSongs();
  document.getElementById("um").currentTime = 0;
  document.getElementById("um").play();
}
function What() {
  stopSongs();
  document.getElementById("what").currentTime = 0;
  document.getElementById("what").play();
}
function Why() {
  stopSongs();
  document.getElementById("why").currentTime = 0;
  document.getElementById("why").play();
}
function yeahSoDoI() {
  stopSongs();
  document.getElementById("Yeahsodoi").currentTime = 0;
  document.getElementById("Yeahsodoi").play();
}
/*function to stop songs/audio files */
function stopSongs() {
  document.getElementById("ok").pause();
  document.getElementById("bugger").pause();
  document.getElementById("striker").pause();
  document.getElementById("Thirdtime").pause();
  document.getElementById("Toughone").pause();
  document.getElementById("um").pause();
  document.getElementById("what").pause();
  document.getElementById("why").pause();
  document.getElementById("Yeahsodoi").pause();
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

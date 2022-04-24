/*functions declared to get audio by id and play*/ function AhHa() {
  stopSongs();
  document.getElementById("Ah-Ha").currentTime = 0;
  document.getElementById("Ah-Ha").play();
}
function BackOfTheNet() {
  stopSongs();
  document.getElementById("BackOfTheNet").currentTime = 0;
  document.getElementById("BackOfTheNet").play();
}
function BangOutOfOrder() {
  stopSongs();
  document.getElementById("BangOutOfOrder").currentTime = 0;
  document.getElementById("BangOutOfOrder").play();
}
function Dan() {
  stopSongs();
  document.getElementById("Dan").currentTime = 0;
  document.getElementById("Dan").play();
}
function Goal() {
  stopSongs();
  document.getElementById("Goal").currentTime = 0;
  document.getElementById("Goal").play();
}
function JurassicPark() {
  stopSongs();
  document.getElementById("jurassicPark").currentTime = 0;
  document.getElementById("jurassicPark").play();
}
function KissMyFace() {
  stopSongs();
  document.getElementById("KissMyFace").currentTime = 0;
  document.getElementById("KissMyFace").play();
}
function SmellMyCheese() {
  stopSongs();
  document.getElementById("SmellMyCheese").currentTime = 0;
  document.getElementById("SmellMyCheese").play();
}
function HelloPartridge() {
  stopSongs();
  document.getElementById("HelloPartridge").currentTime = 0;
  document.getElementById("HelloPartridge").play();
}
/*function to stop songs/audio files */
function stopSongs() {
  document.getElementById("Ah-Ha").pause();
  document.getElementById("BackOfTheNet").pause();
  document.getElementById("BangOutOfOrder").pause();
  document.getElementById("Dan").pause();
  document.getElementById("Goal").pause();
  document.getElementById("jurassicPark").pause();
  document.getElementById("KissMyFace").pause();
  document.getElementById("SmellMyCheese").pause();
  document.getElementById("HelloPartridge").pause();
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

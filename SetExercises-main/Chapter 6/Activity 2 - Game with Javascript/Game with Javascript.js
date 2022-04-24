//defining variables for character,block and counter.
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var topScore = 0;
var highestScore = 0;
//Function for jump of the character declared.
function jump() {
  //checking the condition if the class is not created yet, in order to avoid creating classes again.
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  //the character will only jump once because the class is set, in order to remove that, we will set a timeout.
  setTimeout(function () {
    character.classList.remove("animate");
  }, 720);
}
//creating a function to check the values for the character and block and comparing them in order to determine if the game is over or not
var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  //stopping the animation once the two blocks colliding
  if (blockLeft < 42 && blockLeft > -42 && characterTop >= 365) {
    block.style.animation = "none";
    //setting the math to calculate the scores
    alert("Game Over. score: " + Math.floor(counter / 100));
    if (topScore > counter) {
      topScore = topScore;
    } else {
      topScore = counter;
    }
    highestScore = counter;
    counter = 0;
    block.style.animation = "block 3s infinite linear";
  } else {
    counter++;
    //adding the scores if the blocks are not colliding.
    document.getElementById("highestScore").innerHTML = Math.floor(
      highestScore / 100
    );
    document.getElementById("topScore").innerHTML = Math.floor(topScore / 100);
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 30);

//Getting the xwing from its id.
let xwing = document.querySelector("#xwing");
let moveBy = 20;
//making the xwing move by using the up,down,left,right keys.
window.addEventListener("load", () => {
  xwing.style.position = "relative";
  xwing.style.left = 0;
  xwing.style.top = 0;
});
//adding event listeners to detect key presses and making the xwing move.
window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      xwing.style.left = parseInt(xwing.style.left) - moveBy + "px";
      break;
    case "ArrowRight":
      xwing.style.left = parseInt(xwing.style.left) + moveBy + "px";
      break;
    case "ArrowUp":
      xwing.style.top = parseInt(xwing.style.top) - moveBy + "px";
      break;
    case "ArrowDown":
      xwing.style.top = parseInt(xwing.style.top) + moveBy + "px";
      break;
  }
});

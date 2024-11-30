alert("habib");


let buttons = document.querySelectorAll("button");
let resetButton = document.querySelector(".reset-button"); // assuming the reset button has a class of 'reset-button'
let turno = true; // player x, player o

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// assuming you have a variable 'boxes' to hold the tic-tac-toe boxes
let boxes = document.querySelectorAll(".box"); // assuming each box has a class of 'box'

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");

    if (turno) {
      box.innerText = "O"; // changed to uppercase 'O'
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled=true;
    checkwinner();
  });
});

const checkwinner=()=>{
    for(pattern of winPatterns);
    console.log(pattern);
    
}



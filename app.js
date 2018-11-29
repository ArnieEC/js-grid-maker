document.addEventListener('DOMContentLoaded', function(){
  // Add code here
  // want it as a function, want a 3x3 grid. think about loops, turn 2D into 3D
  // think bout how we will append things to the grid // USE appendChild or appendNode
  const board = document.getElementById('board');
  const block = grid();
  const row = document.getElementById("board")

  function random() {
      let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let rgb = "rbg(" + r + "," + g + "," + b + ")"
    }

  // function grid() {
  //   board.classList.add("row");
  //   board.classList.add("col");
  // };

  for (let i = 0; i < 3; i=i+1) {

  }
  
  //     function () => {
  //         for (let i = 0; i < 3; i=i+1) {
  // }

  

  board.addEventListener("click", () => {
    board.style.backgroundColor="white"
  })
  
 

});

// const squares = document.getElementsByClassName("innerSquare");
 
// const rollSequences = [
// [4],
// [0, 8],
// [0, 4, 8],
// [0, 2, 6, 8],
// [0, 2, 4, 6, 8],
// [0, 2, 3, 5, 6, 8]
// ];
 
// let dotSequence = null;
 
// function rollDice() {
// clearDice();
// let roll = getRoll();
// dotSequence = rollSequences[roll - 1];
// addDots();
// }
 
// function clearDice() {
// for (let i = 0; i < squares.length; i++) {
// squares[i].classList.remove("dot");
// }
// }
 
// function getRoll() {
// return Math.ceil(Math.random() * 6);
// }
 
// function addDots() {
// for (let i = 0; i < dotSequence.length; i++) {
// squares[dotSequence[i]].classList.add("dot");
// }
// }

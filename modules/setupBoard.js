const chessBoard = document.getElementById("chessBoard");

//Add alternating squares, square white and square black
function setupBoard() {
  for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
      const square = document.createElement("div");
      square.classList.toggle("square");
      if ((i + j) % 2) {
        square.classList.toggle("white");
      } else {
        square.classList.toggle("black");
      }
      chessBoard.appendChild(square);
    }
  }
}

//if 2nd or 7th rank, all pawns
//if 1st or 8th rank, go in order, but for d/e swap order of king and queen
//TODO
function addPieces() {}

setupBoard();

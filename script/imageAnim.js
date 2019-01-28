(() => {
	// variables always come first 
	// set up the puzzle pieces and boards
	

	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");


	// functions go in the middle
	function createPuzzlePieces(pictureIndex) {
		// generate puzzle pieces for left and right side
		// debugger;
		pieces.forEach((piece, index) => {
			let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

			piecesBoard.innerHTML += newPuzzlePiece;

		});

		puzzleBoard.style.backgroundImage = `url(./images/background${pictureIndex}.jpg)`;
	} 



	function resetPuzzlePieces() {
		// empty the thumbnail container
		piecesBoard.innerHTML = "";
		createPuzzlePieces(this.dataset.puzzleref);
	}

	// event handling down here
	puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

	createPuzzlePieces(0);
	
	
	
})();


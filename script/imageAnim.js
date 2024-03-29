(() => {
  // set up the puzzle pieces and boards
  const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

  let piecesBoard = document.querySelector(".puzzle-pieces"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzleSelectors = document.querySelectorAll("#buttonHolder img");

  let dropZones = document.querySelectorAll(".drop-zone");

  // functions go in the middle
  function createPuzzlePieces(pictureIndex) {
    // generate puzzle pieces for left and right side

    pieces.forEach((piece, index) => {
      let newPuzzlePiece = `<img draggable id="piece${index}" class="puzzle-image" src="images/${
        piece + pictureIndex
      }.jpg" alt="thumbnail">`;

      piecesBoard.innerHTML += newPuzzlePiece;
    });

    puzzleBoard.style.backgroundImage = `url(./images/background${pictureIndex}.jpg)`;

    initDrag();
  }

  // drag and drop functionality goes here

  function initDrag() {
    piecesBoard.querySelectorAll("img").forEach((img) => {
      img.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", this.id);
      });
    });
  }

  // handle dragover and drop

  dropZones.forEach((zone) => {
    zone.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
  });

  dropZones.forEach((zone) => {
    zone.addEventListener("drop", function (e) {
      let zoneContent = zone.innerHTML;
      if (!zoneContent) {
        let piece = e.dataTransfer.getData("text/plain");
        e.target.appendChild(document.querySelector(`#${piece}`));
      } else {
        e.preventDefault();
      }
    });
  });

  function resetPuzzlePieces() {
    // empty the thumbnail container
    piecesBoard.innerHTML = "";
    dropZones.forEach((zone) => (zone.innerHTML = ""));
    createPuzzlePieces(this.dataset.puzzleref);
  }

  // event handling down here
  puzzleSelectors.forEach((puzzle) =>
    puzzle.addEventListener("click", resetPuzzlePieces)
  );

  createPuzzlePieces(0);
})();

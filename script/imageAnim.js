(() => {
	// select the elements that you want to work with
	let theButton = document.querySelector("#buttonHolder img");
	// window.addEventListener("load", changeHeaderText);

	// functions go in the middle
	function changeHeaderText(){
		document.querySelector("h1").textContent = "Changing with JS"
	}


	// event handling goes at the bottom

	theButton.addEventListener("click", changeHeaderText);
	// set up the puzzles and pieces and boards
	
	
})();


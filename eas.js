const container = document.querySelector('.container');
const frame = document.querySelector('.frame');
const gridSizeBtn = document.querySelector('#change-size');

let gridSize = 16;
setGridSize();

gridSizeBtn.addEventListener('click', () => {
	clearGrid();
	gridSize = prompt(
		'How large do you want your Etch-a-Sketch grid to be? Please enter a number between 10 and 100'
	);
	checkGridSize();

	function checkGridSize() {
		if (gridSize > 9 && gridSize < 101) {
			setGridSize();
		} else if (gridSize < 10 || gridSize > 100) {
			gridSize = prompt(
				'No can do. Like I said before, please enter a number between 10 and 100.'
			);
			checkGridSize();
		}
	}
});

function setGridSize() {
	// This creates a number of divs (let's say total 16) that will become the rows for the grid.
	// This also assigns the div with a class of "row" and appends them to "frame."
	for (let i = 1; i <= gridSize; i++) {
		const row = document.createElement('div');
		row.classList.add('row');
		frame.appendChild(row);
	}

	// This selects all of the elements with the class of "row."
	const allRows = document.querySelectorAll('.row');

	// This function will create 16 divs for the rows when called.
	// These divs will act as the individual cells.
	function fillRows(rowToFill) {
		for (let i = 0; i < gridSize; i++) {
			const div = document.createElement('div');
			div.classList.add('square');
			rowToFill.appendChild(div);
		}
	}

	// Code for looping through the function:
	for (let i = 0; i < allRows.length; i++) {
		fillRows(allRows[i]);
	}

	// Alternative syntax for the for loop above:
	// allRows.forEach((row) => {
	// 	fillRows(row);
	// });

	const squares = document.querySelectorAll('.square');

	// This adds a fill effect to each div on a click.
	squares.forEach((square) => {
		square.addEventListener('mouseover', (event) => {
			event.target.style.backgroundColor = 'black';
		});
	});
}

function clearGrid() {
	while (frame.firstChild) {
		frame.removeChild(frame.lastChild);
	}
}

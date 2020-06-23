// Select color input
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// Select size input
const hight = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(event) {
    // If there are already colored squares in the grid, clicking the Submit button clears them out.
    pixelCanvas.innerHTML = '';
    //Pervents the form element from making its default server request.
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
// Your code goes here!
//nested loops to create the grid.
    for ( i = 0; i < hight.value; i++) {
        const row = pixelCanvas.insertRow(0);
            for ( j = 0; j < width.value; j++) {
                const cell = row.insertCell(0);
                // add the Event listeners to the grid squares immediately after creating it, instead of writing a separate function.
                    cell.addEventListener('click', function respondToTheClick(evt)
                {   cell.style.backgroundColor = colorPicker.value;
               }
               )
            }

}
};

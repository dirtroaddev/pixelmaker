// Select color input
const color = document.getElementById("colorPicker");

// Select size input
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
const submitButton = document.getElementById("sizePicker");

// Creates a variable that contains the table to input the content
const canv = document.getElementById("pixelCanvas");


function makeGrid() {

// Your code goes here!

    // Loops over the Width
    for(let i = 0; i < gridWidth.value; i++) {
        
        // Creates a TR to put inside the table
        const tr = document.createElement('tr');
        
        // Appends the TR to the table
        canv.appendChild(tr)

        // Loops over the Height
        for(let j = 0; j < gridHeight.value; j++) {
            
            // Creates a TD to put inside of the TR
            let td = document.createElement('td')

            // Adds a TD to the TR inside the table
            tr.appendChild(td)

            // Creates an event listener for each TD
            td.addEventListener('click', (e) => {
                
                // Grabs the event target and adds the color to the background of it.
                e.target.style.backgroundColor = color.value
            });
        }
 
    }

}


// Calls an event when the submit button is pushed
submitButton.addEventListener("submit", (e) => {
    // Resets the canvas to being empty
    canv.innerHTML = ''

    // Stops the reload from erasing the content
    e.preventDefault();

    // Creates the canvas
    makeGrid();
    
});





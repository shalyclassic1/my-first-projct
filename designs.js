
// This allows the user to create size of the columns/rows
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWeight');
const pixelCanvas = document.querySelector('#pixelCanvas');


// Colour select  by user input
var colorInput = document.querySelector("#colorPicker");


// When clicked, this allows the user to select colour
function clickedBox(event) {
  const color = colorInput.value;
  event.target.style.backgroundColor = color;
  
}

// MakeGrid is called, When size is submitted by the user
function makeGrid() {

  pixelCanvas.innerHTML = '';
	
	
  // This builds the rows and columns
  var fragment = document.createDocumentFragment();
	
  for (let i = 0; i < height.value; i++) {
    var tr = document.createElement('tr');

    for (let j = 0; j < width.value; j++) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }

    tr.addEventListener('click', clickedBox);
    fragment.appendChild(tr);
	
  }
  
  
  
  // Push grid onto DOM
  pixelCanvas.appendChild(fragment);
  
};

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});

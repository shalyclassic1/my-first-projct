
// This allows the user to create size of the columns/rows
var height = document.querySelector('#inputHeight');
var width = document.querySelector('#inputWeight');
var canvas = document.querySelector('#pixelCanvas');


// Colour select  by user input
var colorInput = document.querySelector("#colorPicker");


// When clicked, this allows the user to select colour
function clickedBox(event) {
  const color = colorInput.value;
  event.target.style.backgroundColor = color;
  
}

// MakeGrid is called, When size is submitted by the user
function makeGrid() {

  canvas.innerHTML = '';
	
	
  // This builds the rows and columns
  var fragment = document.createDocumentFragment();
	
  for (let a = 0; a < height.value; a++) {
    var tr = document.createElement('tr');

    for (let b = 0; b < width.value; b++) {
      var td = document.createElement('td');
      tr.appendChild(td);
    }

    tr.addEventListener('click', clickedBox);
    fragment.appendChild(tr);
	
  }
  
  
  
  // Push grid onto DOM
  canvas.appendChild(fragment);
  
};

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});

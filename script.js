const CANVAS_WIDTH = 960;
const DEFAULT_BLOCKS = 16;
var numRows = 16;

let container = document.getElementById('canvas-container');
let btnRGB = document.getElementById('btn-RGB');
let btnBlack = document.getElementById('btn-Black');
let btnErase = document.getElementById('btn-Erase');
let btnClear = document.getElementById('btn-Clear');
let cellSlider = document.getElementById('cellslider');

function createGrid(gridSize) {
    
    // let blockSize = Math.floor(CANVAS_WIDTH/gridSize);
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;   
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (var i = 0; i < gridSize**2; i++) {
        let blockDiv = document.createElement('div');

        blockDiv.classList.add('canvas');
        blockDiv.style.backgroundColor = 'white';
        container.appendChild(blockDiv);
    }
    
    drawBlack();
}

function clearGrid(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    console.log(numRows);
    createGrid(numRows); //change to update based on slider
}

function drawBlack() {
    let blockDivs = document.querySelectorAll('.canvas');
    blockDivs.forEach(blk => {
        blk.addEventListener('mouseover', () => {
            blk.style.backgroundColor = 'rgb(71, 71, 71)';
        })
    })
}

function erase() {
    let blockDivs = document.querySelectorAll('.canvas');
    blockDivs.forEach(blk => {
        blk.addEventListener('mouseover', () => {
            blk.style.backgroundColor = 'white';
        })
    })
}

function drawRGB() {
    let blockDivs = document.querySelectorAll('.canvas');
    blockDivs.forEach(blk => {
        blk.addEventListener('mouseover', () =>{
            randR = Math.floor(Math.random() * 256);
            randG = Math.floor(Math.random() * 256);
            randB = Math.floor(Math.random() * 256);
            blk.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
        })
    })
}

function drawColour(colour) {
    let blockDivs = document.querySelectorAll('.canvas');
    switch (colour) {
        case 'red':
            colour = 'rgba(228, 35, 61, 0.836)';
            break;
        case 'orange':
            colour = 'rgb(255, 157, 65)';
            break;
        case 'yellow':
            colour = 'rgb(255, 222, 75)';
            break;
        case 'green':
            colour = 'rgba(73, 202, 94, 0.925)';
            break;
        case 'blue':
            colour = 'rgb(51, 127, 226)';
            break;
        case 'purple':
            colour = 'rgb(100, 45, 230)';
            break;
    }

    blockDivs.forEach(blk => {
        blk.addEventListener('mouseover', () => {
            blk.style.backgroundColor = colour;
        })
    })
}

createGrid(25);

// Event Listeners
btnRGB.addEventListener('click', () => {
    drawRGB();
})

btnBlack.addEventListener('click', () => {
    drawBlack();
})

btnClear.addEventListener('click', () => {
    clearGrid();
})

btnErase.addEventListener('click', () => {
    erase();
})

cellSlider.addEventListener('mouseup', () => {
    numRows = cellSlider.value;
    clearGrid();
    console.log(numRows);
})

btnRed = document.querySelector('.red');
btnRed.addEventListener('click', () => {
    drawColour('red');
})

btnOrange = document.querySelector('.orange');
btnOrange.addEventListener('click', () => {
    drawColour('orange');
})

btnYellow = document.querySelector('.yellow');
btnYellow.addEventListener('click', () => {
    drawColour('yellow');
})

btnGreen = document.querySelector('.green');
btnGreen.addEventListener('click', () => {
    drawColour('green');
})

btnBlue = document.querySelector('.blue');
btnBlue.addEventListener('click', () => {
    drawColour('blue');
})

btnPurple = document.querySelector('.purple');
btnPurple.addEventListener('click', () => {
    drawColour('purple');
})
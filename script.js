const CANVAS_WIDTH = 960;
const DEFAULT_BLOCKS = 16;

let container = document.getElementById('canvas-container');
let btnRGB = document.getElementById('btn-RGB');
let btnBlack = document.getElementById('btn-Black');
let btnErase = document.getElementById('btn-Erase');
let btnClear = document.getElementById('btn-Clear');
let cellSlider = document.getElementById('cellslider');

function createGrid(numRows) {
    let blockSize = Math.floor(CANVAS_WIDTH/numRows);
    container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;   
    container.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;

    for (var i = 0; i < numRows**2; i++) {
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
    createGrid(16); //change to update based on slider
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

createGrid(16);

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
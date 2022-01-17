const CANVAS_WIDTH = 960;
const DEFAULT_BLOCKS = 16;

let container = document.getElementById('canvas-container');

function createGrid(numRows) {
    let blockSize = Math.floor(CANVAS_WIDTH/numRows);
    

    for (var i = 0; i < numRows**2; i++) {
        let blockDiv = document.createElement('div');

        blockDiv.classList.add('canvas');
        blockDiv.style.backgroundColor = 'white';
        // blockDiv.style.border = '1px solid black';
        // blockDiv.style.width = blockSize;
        // blockDiv.style.height = blockSize;

        // canvasContainer_div.style.setProperty('--grid-rows', numOfBlocks);
        // canvasContainer_div.style.setProperty('--grid-cols', numOfBlocks);
        
        drawBlack();
        container.appendChild(blockDiv);

        container.style.gridTemplateColumns = `repeat(${numRows}, minmax(0, 1fr))`;   
        container.style.gridTemplateRows = `repeat(${numRows}, minmax(0, 1fr))`;
        
    }
}

function clear(){
    for (var i = 0; i < numOfBlocks**2; i++) {
        blockDiv.style.backgroundColor = 'white';
    }
}

// EVENT LISTENERS
createGrid(16);

function drawBlack() {
    let blockDivs = document.querySelectorAll('.canvas');
    blockDivs.forEach(blk => {
        blk.addEventListener('mouseover', () => {
            blk.style.backgroundColor = 'rgb(71, 71, 71)';
        })
    })
}
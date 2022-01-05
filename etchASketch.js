function addBoxes (dim) {
    let numBoxes = dim ** 2;
    const drawBoard = document.querySelector('.drawBoard');
    for (i=0; i<numBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = 'white';
        drawBoard.appendChild(box);
    }
}

function createGrid(dim) {
    const drawBoard = document.createElement('div');
    drawBoard.classList.add('drawBoard');
    const container = document.querySelector('.container');
    container.appendChild(drawBoard);

    drawBoard.removeAttribute('grid-template-columns');
    drawBoard.removeAttribute('grid-template-rows');

    let boxDim = 750/dim;
    drawBoard.style.cssText = `
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    align-self:start;
    display: grid;
    grid-template-columns: repeat(${ dim }, ${ boxDim }px);
    grid-template-rows: repeat(${ dim }, ${ boxDim }px);
    border-top: 7px solid rgb(230, 230, 230);
    border-left: 7px solid rgb(230, 230, 230);
    `;

    addBoxes(dim);
}

function addBoxHover(color='black') {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => { // hovering listeners
        box.addEventListener('mouseover', (e) => {
            box.style.background = `${color}`;
        });
    })
}

function zeroGrid() {
    const drawBoard = document.querySelector('.drawBoard');
    while (drawBoard.firstChild) {
        drawBoard.removeChild(drawBoard.firstChild);
    }
    const container = document.querySelector('.container');
    container.removeChild(drawBoard);
}

function customGrid(userDims,color) {
    zeroGrid();
    createGrid(userDims);
    addBoxHover(color);
}

function clearBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.background='white'
    });
}

function initializeClearButton() {
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => clearBoxes());
}

function initialize() {
    createGrid(16);
    addBoxHover('black');
    initializeClearButton();
}

window.onload = initialize();

let colorInput = document.querySelector('#color-selector');
let color = colorInput.value;
colorInput.addEventListener('input', () => {
    color = colorInput.value;
    addBoxHover(color);
})

var rangeslider = document.getElementById("sliderRange");
let resolution = document.getElementById("resolution");
resolution.innerHTML = `${rangeslider.value} x ${rangeslider.value}`;

rangeslider.oninput = function() {
  resolution.innerHTML = `${this.value} x ${this.value}`;
  rangeslider.addEventListener('mouseup', () => customGrid(this.value, color))
}


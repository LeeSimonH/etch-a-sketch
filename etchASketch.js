function addBoxes (dim) {
    let numBoxes = dim ** 2;
    const container = document.querySelector('.container');
    for (i=0; i<numBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = 'white';
        container.appendChild(box);
    }
}

function createGrid(dim) {
    const container = document.createElement('div');
    container.classList.add('container');
    const body = document.querySelector('body');
    body.appendChild(container);

    container.removeAttribute('grid-template-columns');
    container.removeAttribute('grid-template-rows');

    let boxDim = 900/dim;
    container.style.cssText = `
    align-self:center;
    display:grid;
    grid-template-columns: repeat(${ dim }, ${ boxDim }px);
    grid-template-rows: repeat(${ dim }, ${ boxDim }px);
    `;

    addBoxes(dim);
}

function addBoxHover() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => { // hovering listeners
        box.addEventListener('mouseover', (e) => {
            box.style.background='black';
            // box.style.border='1px solid #ddd';
        });
    })
}

function zeroGrid() {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const body = document.querySelector('body');
    body.removeChild(container);
}

function customGrid() {
    let userDims = prompt("What dimensions you want bro? ");
    userDims = parseInt(userDims);
    console.log(userDims);
    if (isNaN(userDims)) {
        let userDims = prompt("Please enter a valid number. ");
    } else {
        zeroGrid();
        createGrid(userDims);
        addBoxHover();
    }
}

function clearBoxes() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.background='white'
    });
}

function addButtonHover() {
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener('mouseover', (e) => {
            e.target.classList.toggle('hovering');
        });
        button.addEventListener('mouseout', (e) => {
            e.target.classList.toggle('hovering');
        })
    })
}

function initializeResetButton() {
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', () => {customGrid()});
}

function initializeClearButton() {
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', () => {clearBoxes()});
}

function initialize() {
    createGrid(16);
    addBoxHover();
    initializeClearButton();
    initializeResetButton();
    addButtonHover();
}

window.onload = initialize();
const body = document.querySelector('body');

const container = document.querySelector('.container')

function createGrid() {
    for (i=0; i<16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add(`${i}`);
        row.style.cssText='display:flex; height: 50px; width: 800px;'
        container.appendChild(row);
        for (j=0; j<16; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.cssText='width:5vw; background-color:black;';
            row.appendChild(box);
        }
    }
}

createGrid();
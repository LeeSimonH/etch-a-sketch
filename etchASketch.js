const body = document.querySelector('body');

const container = document.querySelector('.container')

// function createGrid() {
//     for (i=0; i<16; i++) {
//         const row = document.createElement('div');
//         row.classList.add('row');
//         row.classList.add(`${i}`);
//         row.style.cssText=''
//         container.appendChild(row);
//         for (j=0; j<16; j++) {
//             const box = document.createElement('div');
//             box.classList.add('box');
//             box.style.cssText='height:50px; width: 50px; background-color:black;';
//             row.appendChild(box);
//         }
//     }
// }

function createGrid() {
    for (i=1; i<257; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = (' ')
        container.appendChild(box);
    }
}

createGrid();

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => { // hovering listeners
    box.addEventListener('mouseover', (e) => {
        box.style.background='orange';
    });

    // box.addEventListener('mouseout', (e) => {
    //     e.target.classList.toggle('hovering');
    //     box.style.background='white';
    // })
})

function clearBoxes() {
    boxes.forEach((box) => {
        box.style.background='white'
    })
}

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('mouseover', (e) => {
    resetButton.classList.toggle('hovering');
})
resetButton.addEventListener('mouseout', (e) => {
    resetButton.classList.toggle('hovering');
})
resetButton.addEventListener('click', () => {clearBoxes()})
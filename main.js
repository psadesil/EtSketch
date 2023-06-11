const body = document.querySelector('body');
const container = document.querySelector('#container');

makeGrid();

function makeGrid(){
    for (let i = 0 ; i <16; i ++ ){
        for (let j = 0; j<16; j++){
            const cell = document.createElement('div');
            cell.classList.add('gridCell');
            container.appendChild(cell);
        }
    }
}
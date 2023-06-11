const body = document.querySelector('body');
const container = document.querySelector('#container');
const newGridButton = document.getElementById('new-grid-button');

newGridButton.addEventListener('click',askGridSize);

function askGridSize(){
    let gridSize = parseInt(
        prompt('Enter a grid Size max 100')
    );

    clearGride();
    const cellWidth = Math.floor(container.clientWidth/ gridSize);
    makeGrid(gridSize,cellWidth);
}

function clearGride(){
    while (container.firstChild) {
        container.firstChild.remove();
      }
}

function makeGrid(gridSize,cellWidth){
    for (let i = 0 ; i < gridSize; i ++ ){
        for (let j = 0; j< gridSize; j++){
            const cell = document.createElement('div');
            cell.classList.add('gridCell');
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellWidth}px`;
            cell.addEventListener("mouseover",function(e){
                cell.style.backgroundColor = "black";
            })
            container.appendChild(cell);
        }
    }
}
/*
#container {
    position: relative;
    top: 30px;
    outline: 2px solid #000;
    font-size: 0;
    margin: auto;
    height: 960px;
    width: 960px;
    padding: 0;
    border: none;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  }

  .gridCell {
    flex-basis: 6.25%;
    margin: 0;
    padding: 0;
    border: 1px solid black;
    box-sizing: border-box;
  }

.gridCell:hover{
    background-color: aqua;
} */
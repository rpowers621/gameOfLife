const cols = 50;
const rows = 50;


function makeGrid(){
  let grid = document.querySelector('#grid');
  let table = document.createElement('TABLE');
  table.setAttribute('id','tableGrid');

  for (var i =0; i <rows; i++){
    let tr = document.createElement('TR');
    for (var j = 0; j < cols; j++) {
      let grid_cell = document.createElement('TD');
      tr.appendChild(grid_cell);
      grid_cell.addEventListener('click', clicked)
      grid_cell.setAttribute('class','isDead');
      grid_cell.setAttribute('id',i + ' ' + j);

    }
    table.appendChild(tr);
  }
  grid.appendChild(table);
}

function clicked(){
  let cell = this.id.split(" ");
  let col = cell[0];
  let row = cell[1];

  if (this.className =='isAlive') {
    this.setAttribute('class','isDead')
  }else{
    this.setAttribute('class','isAlive')
  }
}

function startGame(){

}

function stopGame(){

}

function inc1(){

}

function inc23(){

}
function resetGame(){
  
}

window.onload=()=>{
  makeGrid();
}

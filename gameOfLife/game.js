var rowCount = 50;
var colCount = 50;
        
var grid = make2DArray(rowCount, colCount);
        
var cyclesPerRun = 23;
var generation = 0;
var cyclesToRun = 0;
        
function make2DArray(rowCount, colCount) { 
    var result = new Array(rowCount); 
    for (var r = 0; r < rowCount; r++) { 
        result[r] = new Array(colCount); 
        for (var c = 0; c < colCount; c++) { 
            result[r][c] = 0; 
        } 
    } 
    return(result); 
} 

function logGrid(){
    LogLine("");
    for (var row = 0; row < rowCount; row++){
        for (var col = 0; col < colCount; Col++){
            if (grid[row][col] == 1){
                Log("[X]");
            }else{
                Log("[_]");
            }
        }
        LogLine("");
    }
}
        
function Log(Message){
    LogDiv.innerHTML += Message;
}

function LogLine(Message){
    LogDiv.innerHTML += "<br />" + Message;
}

function nextGeneration(){
    var newGrid = make2DArray(rowCount, colCount);
    for (var row = 0; row < rowCount; row++){
        for (var col = 0; col < colCount; col++){
            newGrid[row][col] = isAlive(row, col);
        }
    }
    grid = newGrid;
    refresh();
    generation++;
    setStatus("Generation " + generation);
}

function isAlive(row, col){
    var result = 0;
    var neighbors = countNeighbors(row, col);
    if (grid[row][col] == 0){
        if (neighbors == 3){
            result = 1;
        }
    }else{
        if (neighbors == 2 || neighbors == 3){
            result = 1;
        }
    }
    return result;
}

function countNeighbors(row, col){
    var result = 0;
    result += isAliveAt(row - 1, col - 1, grid);
    result += isAliveAt(row - 1, col, grid);
    result += isAliveAt(row - 1, col + 1, grid);
    result += isAliveAt(row, col - 1, grid);
    result += isAliveAt(row, col + 1, grid);
    result += isAliveAt(row + 1, col - 1, grid);
    result += isAliveAt(row + 1, col, grid);
    result += isAliveAt(row + 1, col + 1, grid);
    return result; 
}

function isAliveAt(row, col){
    var result = 0;
	//edge cases
    if (row < 0 || col < 0 || row >= rowCount || col >= colCount){
        // out of range
    }else{
		if (grid[row][col] == 1){
            result = 1;
        }
    }
    return result;
}

function setup(rows, cols){
    rowCount = rows;
    colCount = cols;
	
    grid = make2DArray(rowCount, colCount);

	// Delete the old table content
	var board = document.getElementById('grid');
	if (board == null){
	    alert("Grid not found");
	}
	
	while(board.firstChild) { 
		board.removeChild(board.firstChild); 
	}
	
	var body = document.createElement('tbody');

	// Create new row
	for (r = 0; r < rowCount; r++){
		var newRow = document.createElement('tr');
		newRow.id = "Row" + r;		
		// Create new cell
		for (c = 0; c < colCount; c++){
			var newCell = document.createElement('td');
			var ID = "R" + r + "C" + c;
			newCell.id = ID;
            newCell.onclick = new Function("clicked('" + ID + "'," + r + "," + c + ");"); 
        	newCell.className = 'boardcell';
			newRow.appendChild(newCell);
		}	
		body.appendChild(newRow);
	}
	board.appendChild(body);
}

function clicked(ID, row, col){
    var cell = document.getElementById(ID);
    if (grid[row][col] == 1){
        cell.style.backgroundColor = "";
        grid[row][col] = 0;
	}else{
        cell.style.backgroundColor = "#228B22";
        grid[row][col] = 1;
    }
    generation = 0;
    setStatus("");
}
    
function Test(XID){
    alert('Test XID=' + XID);
}

function commandClear(){
    grid = make2DArray(rowCount, colCount);
    refresh();
    generation = 0;
    setStatus("");
}

function next(){
    nextGeneration();
    refresh();
}
        
function refresh(){
	for (r = 0; r < rowCount; r++){
		for (c = 0; c < colCount; c++){
			var ID = "R" + r + "C" + c;
            var cell = document.getElementById(ID);
            if (grid[r][c] == 1){
                cell.style.backgroundColor = "#228B22";
            }else{
                cell.style.backgroundColor = "";
            }
        }
    }
}
        
function run(){
    nextGeneration();
    cyclesToRun--;
    if (cyclesToRun > 0){
        setTimeout("run()",100);
    }
}
        
function start(){
    var iterCount = document.getElementById("IterCount");
    var count = iterCount.value;
    if (count > 0){
        cyclesPerRun = (count * 1);
    }
    cyclesToRun += cyclesPerRun;
    if (cyclesToRun > 23){
    }
    if (cyclesToRun > 0){
        setTimeout("run()",100);
    }
}
        
function stop(){
    cyclesToRun = 0;
}
        
function load(){
    setup(50, 50);
    glider();
}

function glider(){
    var RO = Math.round((rowCount-1)/2 - 2);
    var CO = Math.round((colCount-1)/2 - 2);
    grid = make2DArray(rowCount, colCount);
    grid[RO][CO+1] = 1;
    grid[RO+1][CO+2] = 1;
    grid[RO+2][CO] = 1;
    grid[RO+2][CO+1] = 1;
    grid[RO+2][CO+2] = 1;
    refresh();
    generation = 0;
    setStatus("");
}

function setStatus(StatusText){
    try{
        var StatusBox = document.getElementById('DivStatus');
        StatusBox.innerHTML = StatusText;
    }
    catch (err){
    }
}

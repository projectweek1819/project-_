// Sketch
var grid;
var rijen = 8;
var kolommen = 8;

// Basis functies
function setup() {
    createCanvas(200,200);
    maakGrid(rijen,kolommen);
}

function draw() {
    background(165,177,216);
    drawGrid();
}

// Grid
function maakGrid(aantal_rijen,aantal_kolommen){
    grid = new Array(aantal_rijen);
    for(let row = 0; row < grid.length; row++){
        grid[row] = new Array(aantal_kolommen);
        for(let column = 0; column < grid[row].length;column++){
            grid[row][column] = new Jewel(200/5*row +200/10,200/5*column+200/10,20,20);
        }
    }
}

function drawGrid(){
    for (let row = 0; row < grid.length; row++) {
        for (let colomn = 0; colomn < grid[row].length; colomn++) {
            grid[row][colomn].print();
        }
    }
}

// Andere
function ingedrukteMuis(){

}

function maakSelectie() {

}

function drawSelectie(){

}

function swap(jewel1,jewel2){
    var x1 = jewel1.x; var y1 = jewel1.y;
    var x2 = jewel2.x; var y2 = jewel2.y;
    jewel1.x = x2; jewel1.y = y2;
    jewel2.x = x1; jewel2.y = y1;
    grid[x2][y2] = jewel1;
    grid[x1][y1] = jewel2;
}

// Sketch
    var grid;
    var rijen = 8;
    var kolommen = 8;
    var geselecteerdejewelX = null;
    var geselecteerdejewelY = null;

// Basis functies
    function setup() {
        createCanvas(200,200);
        maakGrid(rijen,kolommen);
    }

    function draw() {
        background(165,177,216);
        drawGrid();
        if(geselecteerdejewelX != null && geselecteerdejewelY != null){
            drawSelectie();
        }
    }

// Grid
    function maakGrid(aantal_rijen,aantal_kolommen){
        grid = new Array(aantal_rijen);
        for(let row = 0; row < grid.length; row++){
            grid[row] = new Array(aantal_kolommen);
            for(let column = 0; column < grid[row].length;column++){
                var randomcolornummer = Math.floor((Math.random() * 4) + 1);
                grid[row][column] = new Jewel(200/5*row +200/10,200/5*column+200/10,20,20,randomcolornummer);
                while((row >=2) && (grid[row-1][column].colorgetal == grid[row][column].colorgetal) && (grid[row-2][column].colorgetal == grid[row][column].colorgetal)){
                    var randomcolornummer2 = Math.floor((Math.random() * 4) + 1);
                    grid[row][column] = new Jewel(200/5*row +200/10,200/5*column+200/10,20,20,randomcolornummer2);
                }
                while((column >=2) && (grid[row][column-1].colorgetal == grid[row][column].colorgetal) && (grid[row][column-2].colorgetal == grid[row][column].colorgetal)){
                    var randomcolornummer3 = Math.floor((Math.random() * 4) + 1);
                    grid[row][column] = new Jewel(200/5*row +200/10,200/5*column+200/10,20,20,randomcolornummer3);
                }
            }
        }
    }

    function drawGrid(){
        for (let row = 0; row < grid.length; row++) {
            for (let colomn = 0; colomn < grid[row].length;colomn++) {
                grid[row][colomn].print();
            }
        }
    }

// Selectie
    function mousePressed(){
        for(var row = 0; row < grid.length; row++){
            for(var column = 0; column < grid[row].length; column++){
                if(grid[row][column].geselecteerd(mouseX, mouseY)){
                    geselecteerdejewelX = row;
                    geselecteerdejewelY = column;
                }
            }
        }
    }

    function drawSelectie(){
        noFill();
        stroke(0,0,0);
        rect(200/8*geselecteerdejewelX +200/11,200/5*geselecteerdejewelY+200/10,30,30);
        // 200/5*DING+200/10
    }

// Swap
    function geldigeSwap(jewel1,jewel2) {
        if(Math.abs(jewel1.x-jewel2.x) <= 25 && Math.abs(jewel1.y-jewel2.y) <= 25) return true;
    }

    function swap(jewel1,jewel2){
        if(geldigeSwap(jewel1,jewel2)){
            var x1 = jewel1.x; var y1 = jewel1.y;
            var x2 = jewel2.x; var y2 = jewel2.y;
            jewel1.x = x2; jewel1.y = y2;
            jewel2.x = x1; jewel2.y = y1;
            grid[x2][y2] = jewel1;
            grid[x1][y1] = jewel2;
        }
    }

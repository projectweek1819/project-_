let rows = 5;
let coloms = 5;

function setup() {
    createCanvas(200,200);
    background(125,63,200);
}

function draw() {
    maakJewels();
}

function maakJewels(){
    for(let row = 0; row < rows; row++) {
        for(let colom = 0; colom < coloms; colom++){
            new Jewel(200/5*row +200/10,200/5*colom+200/10,20,20);
            // ellipse(200/5*row +200/10,200/5*colom+200/10,20,20);
            //.print(20,20);
            //fill(255);
        }
    }
}


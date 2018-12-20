// Jewel klasse

class Jewel {

    constructor(x_coordinaat,y_coordinaat,width,height){
        this.x = x_coordinaat;
        this.y = y_coordinaat;
        this.color = this.setColor();
        this.width = width;
        this.height = height;
    }

    setColor(){
        var randomgetal = random(1,4);
        if(randomgetal === 1){
            // Rood
            return fill(255,95,0);
        }
        else if(randomgetal === 2){
            // Blauw
            return fill(0,0,128);
        }
        else if(randomgetal === 3){
            // Geel
            return fill(255,255,0);
        }
        else if(randomgetal === 4){
            // Groen
            return fill(107,142,135);
        }

    }

    selected(xPos,yPos){
        var distance = dist(xPos, yPos, 50+60*this.x, 50+60*this.y);

        if(distance <= 25){
            console.log("clicked jewel: " + this.x + " " + this.y);
            return true;
        }

    }

    print(){
        ellipse(this.x, this.y, this.width, this.height);
        this.setColor()
    }
}
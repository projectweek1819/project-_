// Jewel klasse

class Jewel {

    constructor(x_coordinaat,y_coordinaat,width,height,colorgetal){
        this.x = x_coordinaat;
        this.y = y_coordinaat;
        this.color = this.setColor(colorgetal);
        this.colorgetal = colorgetal;
        this.width = width;
        this.height = height;
    }

    setColor(getal){
        if(getal === 1){
            // Rood
            return fill(255,95,0);
        }
        else if(getal === 2){
            // Blauw
            return fill(0,0,128);
        }
        else if(getal === 3){
            // Geel
            return fill(255,255,0);
        }
        else if(getal === 4){
            // Groen
            return fill(107,142,135);
        }

    }

    print(){
        noStroke();
        ellipse(this.x, this.y, this.width, this.height);
        this.setColor(this.colorgetal);
    }

    geselecteerd(andereX,andereY){
        let afstand = dist(this.x,this.y,andereX,andereY);
        if(afstand <= 25) return true;
    }
}
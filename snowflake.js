

class snowflake{
    constructor(){
        let x = random(width);
       let y = random(0,-10);
        this.pos = createVector(x,y);
        this.vel = createVector(random(-2,2),2);
        //this.vel = createVector(0)
        this.acc = createVector();
      //  this.r = getRandomSize();
        //this.terminalV = this.r;

        //this.Image = loadImage("pics/snow.jpg");
    }

    update(){
        
        //this.acc = gravity;
        //this.vel.add(this.acc);
        this.pos.add(this.vel);

    }

render(){
    stroke(255);
    strokeWeight(4);
    point(this.pos.x,this.pos.y)
}
}


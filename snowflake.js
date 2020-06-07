

class snowflake{
    constructor(){
       let x = random(width);
       let y = random(-400,-400);
        this.pos = createVector(x,y);
        this.vel = createVector(random(-1,1),1);
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


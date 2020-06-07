
//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine, world;
let snow = [];
//let gravity;

function setup() {
  createCanvas(1000,1200);
  //engine = Engine.create();

//gravity = createVector(0,0.03);

//santa1 = new santa(windowWidth/2,windowHeight/8);
}

function draw() {
  background(0);
  //Engine.update(engine);

  snow.push(new snowflake())

//santa1.display()
for(flake of snow){
  //flake.applyForce(gravity);
  flake.update();
  flake.render();
}

//for(let i = snow.length-1; i >=0; i--){
  //if(snow[i].offScreen()){
    //snow.splice(i,1);
  //}
//}
//textSize(35)
//fill("white");
//print("SCROLL DOWN TO SEE THE FLAKES",400,200)
}

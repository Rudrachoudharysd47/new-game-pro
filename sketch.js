
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=0

function setup() {
  createCanvas(400,400);

   engine = Engine.create();
   world = engine.world;
   
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ball2 = Bodies.circle(310,10,20,ball_options);
  World.add(world,ball2)

 ground2 = Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,ground2);

wedge = Bodies.rectangle(100,200,100,20,ground_options)

World.add(world,wedge)

}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill("blue")
  ellipse(ball.position.x,ball.position.y,20);
  fill("green")
  rect(ground.position.x,ground.position.y,400,20);
 fill("red")
  ellipse(ball2.position.x,ball2.position.y,20);
 fill("yellow")
   rect(ground2.position.x,ground2.position.y,200,20);

 Matter.Body.rotate(wedge,angle)
  angle=angle+0.1
   push()
    translate(wedge.position.x,wedge.position.y)
     rotate(angle)
      rect(0,0,100,20)
       pop()

    
}


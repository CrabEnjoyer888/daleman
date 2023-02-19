
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var friedchickenball

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballopt = {isStatic:false,
	resitution:0.3,
	friction:0,
	density:1.2}


	friedchickenball = Bodies.circle(300,620,20,ballopt)
	World.add(world,friedchickenball)

	groundbod = new Ground(650,650,1300,20)
	kfcbucket1 = new Ground(900,566,20,150)
	kfcbucket2 = new Ground(1125,566,20,150)

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
  fill("#c59401")
  ellipse(friedchickenball.position.x,friedchickenball.position.y,50,50)

  drawSprites();
	groundbod.display()
	kfcbucket1.display()
	kfcbucket2.display()

	
}


function keyPressed(){
	if (keyCode == 32){
		console.log("123")
		Matter.Body.applyForce(friedchickenball,friedchickenball.position,{x:70,y:-70})
	}
}

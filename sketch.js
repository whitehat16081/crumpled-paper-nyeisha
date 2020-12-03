
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,dustbin1,dustbin2,dustbin3,paper1

function preload()
{
    paperimage = loadImage("paper.png")
}

function setup() {
	
	
	var canvas = createCanvas(1300, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
//	dustbin1 = new Dustbin(1100,495,150,15);
//	dustbin2 = new Dustbin(1185,420,15,170);
//	dustbin3 = new Dustbin(1015,420,15,170);
	dustbin4=new Dustbin(1050,435,160,155)
	ground1 = new Ground(700,600,1400,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	
	ground1.display();
//	dustbin3.display();
//	dustbin1.display();
	dustbin4.display();
	paper1.display();
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



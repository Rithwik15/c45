let ground;
let plane
let plane_img;
let bg_img;
let asteroid, asteroid_img;

var vx = 0;
var g = 0.05;
var vy = 0;


function preload()
{
plane_img = loadImage("plane.png");
bg_img = loadImage("galaxy.jpg");	

}

function setup() {
	createCanvas(1000, 700);
plane = createSprite(width/2, height-100);
plane.addImage("plane",plane_img);
plane.scale =0.3;

asteroid1 = new Asteroid(Math.round(random(100,900)),0);
asteroid2 = new Asteroid(Math.round(random(100,900)),0);
asteroid3 = new Asteroid(Math.round(random(100,900)),0);
asteroid4 = new Asteroid(Math.round(random(100,900)),0);



	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
   background(bg_img);
   rectMode(CENTER);
   if(keyDown("RIGHT_ARROW")){
	plane.x +=1;}
	if(keyDown("LEFT_ARROW")){
	plane.x -=1;	
	}
	asteroid1.display();
	asteroid2.display();
	asteroid3.display();
	asteroid4.display();
  drawSprites();
 
}




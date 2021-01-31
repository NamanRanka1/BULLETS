var bullet,speed,weight;
var wall,thickness;

function setup(){
  // creating canvas
  createCanvas(1600,400);

  // creating wall and assigning its properties
  thickness=Math.round(random(22,83));
  wall=createSprite(1200,200,thickness,200);
  wall.shapeColor="darkgrey";

  // creating bullet and assigning its properties
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));

  bullet=createSprite(100,200,weight,20);
  bullet.shapeColor="white";
  bullet.velocityX=speed;
}

function draw(){
  background("black")
  0
  if (bullet.isTouching(wall)){
    bullet.velocityX=bullet.velocityX*0;
    signals();
  }

  drawSprites();
}

function signals(){

var colloision=0.5*(weight*speed*speed)/(thickness*thickness*thickness);

if (colloision>10){
  wall.shapeColor=("green")
}

if (colloision<10){
   wall.shapeColor=("red")
}

}
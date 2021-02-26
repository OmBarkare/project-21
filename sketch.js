var bullet, wall;
var speed, bulletWeight, bulletVelocity;
var damage, collide;
var width, dist;
function setup() {
  createCanvas(800,400);
  //bullet = createSprite(50, 400, 50, 50);
  speed = random(223,321);
  bulletVelocity = speed/5;
  bullet = createSprite(100,200,30,5);
  bullet.velocityX = bulletVelocity;
  width = random(20,85);

  rectMode(CENTER);
  wall = createSprite(700,200,width,200);
  wall.shapeColor = "lightgrey";
  bulletWeight = random(30,55);
  damage = ((0.5*bulletWeight*speed*speed) / (width*width*width))
}

function draw() {
  
  background("black");

  dist = (wall.x - bullet.x)

  bullet.collide(wall);
  //text("bullet",bullet.x - 10,180);

  if(dist < 60){  
    if(damage < 10){
      wall.shapeColor = "green";
      text("this wall will",640,80);
      text("stop the bullet!",640,92);
    }

   if(damage > 10){
      wall.shapeColor = "red";
      text("use another material!",640,80);
    }
  }

  text("damage to wall "+damage,500,350);

  drawSprites();
}
var bullet,wall,thickness;
var bulletSpeed,bulletWeight;
var damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50,200,20,5);

  bulletSpeed = random(223,321);
  bulletWeight = random(30,52);
  
  bullet.velocityX = bulletSpeed;

  wall.shapeColor = "grey";
  bullet.shapeColor = "white";

}

function draw() {
  background("black");
  
 if (wall.x-bullet.x<(bullet.width+wall.width)/2)
 {
    bullet.velocityX = 0;
   damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/thickness*thickness*thickness;
  
  if (damage<10){
    wall.shapeColor = "green";
    }
  
  if (damage>10){
    wall.shapeColor = "red";
   }
}

  drawSprites();
}
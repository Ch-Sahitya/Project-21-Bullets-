var thickness,wall;
var bullet,speed,weight;




function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(23,61);
  weight = random(30,52);
  
  bullet = createSprite(50,200,60,30);
  bullet.velocityX = speed;
  bullet.shapeColor = "black";
  wall = createSprite(1200,200,thickness,height/2);

}

  function draw() { 
  background("pink");  

  if (hascollided(bullet,wall))
   {
     bullet.velocityX = 0;
     var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
     if(damage > 10){

      wall.shapeColor = "green";
     }

     if(damage < 10){
       wall.shapeColor = "red";
     }
     }
      
     drawSprites();

     }
  
     function hascollided(lbullet,lwall){
       bulletRightEdge = lbullet.x + lbullet.width;
       wallLeftEdge = lwall.x;
       
       if(bulletRightEdge>= wallLeftEdge){
         return true;
       }
         return false;
     }
 

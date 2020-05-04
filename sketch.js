var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect.debug = true;
  fixedRect.velocityX = 5;
  movingRect.velocityX = -5;
}
  

function draw() {
  background(255,255,255);
  console.log("x " + movingRect.x);
  console.log("y " +movingRect.y);
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  */
  
  if(fixedRect.x - movingRect.x < (fixedRect.width/2)+ (movingRect.width/2)
  && movingRect.x - fixedRect.x < (fixedRect.width/2)+ (movingRect.width/2)
  && fixedRect.y - movingRect.y < (fixedRect.height/2)+ (movingRect.height/2)
  && movingRect.y - fixedRect.y < (fixedRect.height/2)+ (movingRect.height/2)){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  /*else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  */

  drawSprites();
}

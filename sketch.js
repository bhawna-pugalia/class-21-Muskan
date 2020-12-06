var fixedRect, movingRect,object1,object2,object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(100,100,50,50)
  object2=createSprite(200,100,50,50)
  object3=createSprite(300,100,50,50)
  object1.shapeColor="green"
  object2.shapeColor="green"
  object3.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if(isTouching(object1,movingRect)){  //Arguments
    object1.shapeColor="blue"
    movingRect.shapeColor="blue"
  }
  else{
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
 
  drawSprites();
}
function isTouching(obj1,obj2){  //Parameters-local variables
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    return true;
}
else {
    return false;
}
}
//BOOLEAN VALUES
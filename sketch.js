
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var SurvivalTime
var ground

function preload(){
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstaceImage = loadImage("obstacle.png");
}

function setup() {
createCanvas(500, 400);

monkey = createSprite(70,300,20,50);
monkey.addAnimation("running", monkey_running);
monkey.scale = 0.2;
  
// obstacle = createSprite(300,200,20,50);
// obstacle.addAnimation("obstacle", obstaceImage);
// obstacle.scale = 0.2;

ground = createSprite(410,390,800,20);
ground.shapeColor = "darkGreen";
ground.x = ground.width /2;
  
obstaclesGroup = createGroup();
FoodGroup = createGroup();
  
SurvivalTime = 0;
}

function draw() {
background("lightblue");
  
fill("black");
textSize(20);
stroke("black");
stroke(5);
text("Survival Time: "+ SurvivalTime, 180,50);
  
ground.velocityX = -3;
if (ground.x < 100){
  ground.x = ground.width/2;
}

SurvivalTime = SurvivalTime + Math.round(getFrameRate()/60);
  
if(keyDown("space")&& monkey.y >= 310) {
monkey.velocityY = -15;
}
monkey.velocityY = monkey.velocityY + 0.5
monkey.collide(ground);
  
drawSprites();
obstacles();
food();
}

function obstacles(){  
if (frameCount % 300 === 0){
   var obstacle = createSprite(410,340,20,50);
   obstacle.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,1));
    switch(rand) {
      case 1: obstacle.addImage(obstaceImage);
              break;
              default: break;
    }
  
    obstacle.scale = 0.3;
    obstacle.lifetime = 200;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}
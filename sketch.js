
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
function preload(){

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,400);  
monkey=createSprite(100,360,20,20);
monkey.addAnimation("running", monkey_running);
monkey.scale=0.2;
ground=createSprite(200,380,800,20);
ground.velocityX=-3; 
score = 0;
FoodGroup=new Group();
obstacleGroup=new Group();

}


function draw() {
background("skyblue");
ground.x = ground.width /2;
monkey.collide(ground);
//displaying score
 text("LifeTime: "+ score, 200,90); 
    
if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -12;
  }
  //add gravity
monkey.velocityY = monkey.velocityY + 0.8
  if(obstacleGroup.isTouching(monkey)){
obstacleGroup.destroyEach();
     score=score-1;
   }
  
    if(FoodGroup.isTouching(monkey)){
FoodGroup.destroyEach();

      score=score+1;
}
  spawnBanana();
  spawnObstacles();
  drawSprites();
}
function spawnBanana(){
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,10,10);
    banana.y = Math.round(random(180,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
   //assign lifetime to the variable
   banana.lifetime = 200;
 FoodGroup.add(banana);
  }
}
function spawnObstacles(){
 if (frameCount % 180 === 0){
   var obstacle = createSprite(500,340,10,10);
   obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
   obstacle.velocityX =-4;
   //assign lifetime to the variable
   obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
   }
}




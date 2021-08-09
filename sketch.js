var ship1, ship2, ship3, ship4;
var sea;

function preload(){

SeaImg = loadImage ("sea.png");
  
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  
}

function setup(){
  createCanvas(400,400);
  //create ship Sprites 
     ship = createSprite(200,160,20,50);
     ship.addAnimation("shipImg1" , shipImg1);
     ship.scale = 0.4;
     
 
}
function draw(){
  //set backrgound colour to blue
  background("blue");
  drawSprites();
  
  

}

var truck,helicopter,parcel;
var backgroundImage;

function preload(){
 


}

function setup(){
  truck = createSprite(100,600,300,200);
  helicopter = createSprite(700,400,150,100);
  parcel = createSprite(720,420,30,30);

}


function draw(){
  createCanvas(800,800);
 
  truck.velocityX = mouseX;
 helicopter.velocityX = 2;
 parcel.velocityY = 2;

 






}

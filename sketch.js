var bg
var boy
var boyimg
var ground

function preload(){
 bg = loadImage("snow1.jpg")
 boyimg = loadImage("boy.png")
}

function setup() {
  createCanvas(800,400);
  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boyimg)
  boy.scale = 0.2
  ground = createSprite(400, 390, 800, 20)
  ground.visible = false
}

function draw() {
  background(bg);  

  if(keyDown("space")){
    boy.velocityY = - 10
  }
  if(keyDown(LEFT_ARROW)){
    boy.velocityX = - 10
  }
  if(keyDown(RIGHT_ARROW)){
    boy.velocityX =  10
  }


  boy.velocityY = boy.velocityY+0.5
  boy.collide(ground)

  drawSprites();


}
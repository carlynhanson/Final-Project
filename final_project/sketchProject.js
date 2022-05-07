let starX = 0
let starY = 0

let starX1 = 0
let starY1 = 0

let starX2 = 0
let starY2 = 0

let ballX
let ballY
let ballSpeedX
let ballSpeedY

let ellipseX1 = 250
let ellipseY1 = 200

let ellipseX2 = 900
let ellipseY2 = 400

let ellipseX3 = 700
let ellipseY3 = 600

let ellipseX4 = 200
let ellipseY4 = 500

let ellipseX5 = 300
let ellipseY5 = 600

let ellipseX6 = 750
let ellipseY6 = 150

let rocket

let score = 0

let crash


let mouseCollide

function preload(){
  rocket = loadImage('images/rocketship.png')
  crash = loadSound("Audio/crash.mp3")
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  ballX = random(15, windowWidth - 15)
  ballY = random(15, windowHeight - 15)
  ballSpeedX = 2
  ballSpeedY = 2

  textAlign(CENTER)
  imageMode(CENTER)

  starX = random(starX, windowWidth)
  starY = random(starY, windowHeight)

  starX1 = random(starX1, windowWidth)
  starY1 = random(starY1, windowHeight)

  starX2 = random(starX2, windowWidth)
  starY2 = random(starY2, windowHeight)

}

function draw() {
  background(0)

image(rocket, mouseX, mouseY, 50, 50)
  cursor(rocket)

  if (mouseX < 50 || mouseX > 1100 || mouseY > 700 || mouseY < 20){
    fill(40, 30, 200)
    textSize(50)
    fill(200, 40, 50)
    text("Stay in the Solar System!", 600, 400)
  }
  else {


  fill(250, 200, 100) //orange ellise
  stroke(150, 100, 100)
  strokeWeight(5)
  ellipse(ellipseX1, ellipseY1, 130, 130)

  fill(250, 200, 100, 110)
  strokeWeight(3)
  ellipse(ellipseX1, ellipseY1, 200, 45)

  fill(154, 118, 243) //big purple
  stroke(50, 70, 250)
  ellipse(ellipseX2, ellipseY2, 200, 200)

  fill(154, 118, 243, 110)
  strokeWeight(3)
  ellipse(ellipseX2, ellipseY2, 320, 55)

  fill(38, 83, 247) //small blue
  stroke(30, 54, 92)
  ellipse(ellipseX3, ellipseY3, 60, 60)

  fill(20, 150, 30) //green planet
  stroke(10, 90, 87)
  ellipse(ellipseX4, ellipseY4, 150, 150)

  fill(255, 180, 150) //mars
  stroke(10, 20, 100)
  ellipse(ellipseX5, ellipseY5, 70, 70)

  fill(155, 80, 150) //Jupiter
  stroke(70, 80, 100)
  ellipse(ellipseX6, ellipseY6, 140, 140)

  stroke(0)
  strokeWeight(0)
  fill(255)

  ellipse(starX, starY, 5, 5)

  ellipse(starX1, starY1, 5)

  ellipse(starX2, starY2, 5)

  ellipse(700, 500, 5, 5)

  ellipse(40, 600, 5)

  ellipse(200, 700, 5)

  ellipse(800, 200, 5)

  ellipse(500, 400, 5)

  ellipse(1000, 80, 5)

  ellipse(300, 500, 5)

  ellipse(400, 550, 5)

  ellipse(600, 100, 5)

  ellipse(900, 700, 5)

  ellipse(1100, 650, 5)

  ellipse(1000, 500, 5)

  ellipse(1150, 300, 5)

  ellipse(100, 100, 5)

  ellipse(150, 300, 5)

  ellipse(450, 300, 5)

  ellipse(550, 200, 5)

  ellipse(800, 500, 5)

  fill(200, 100, 200)
  textSize(50)
  text("Asteroid Collisions: " + score, windowWidth/4.5, 70)

  mouseCollide = dist(ballX, ballY, mouseX, mouseY)

  //change the speed of the balll
  ballX = ballX + ballSpeedX
  ballY = ballY + ballSpeedY

  //change the direction of the ball
  if(ballX >= windowWidth - 15 || ballX <= 15){
      ballSpeedX = ballSpeedX * -1
  }
  if(ballY >= windowHeight - 15 || ballY <= 15){
      ballSpeedY = ballSpeedY * -1
  }
  //if ball gets tagged, replace ball and add to Score
  if(mouseCollide < 15){
    score = score + 1 //could also do score++ for incremental increase of 1
    ballX = random(15, windowWidth - 15)
    ballY = random(15, windowHeight - 15)
  }

  if(mouseCollide < 120){
    fill(200, 40, 40)
    textSize(20)
    text("Watch out for the asteroid!", 300, 400)
  }

  if(dist(mouseX, mouseY, ellipseX1, ellipseY1) < 65){
  textSize (15)
  text("This is Mecury!", ellipseX1, ellipseY1)
  }

  if(dist(mouseX, mouseY, ellipseX2, ellipseY2) < 100){
  textSize (15)
  fill(30, 45, 39)
  text("This is Saturn!", ellipseX2, ellipseY2)
  }

  if(dist(mouseX, mouseY, ellipseX3, ellipseY3) < 60){
  textSize (8)
  text("This is Pluto!", ellipseX3, ellipseY3)
  }

  if(dist(mouseX, mouseY, ellipseX4, ellipseY4) < 90){
  textSize (13)
  fill(38, 83, 247)
  text("This is Earth!", ellipseX4, ellipseY4)
  }

  if(dist(mouseX, mouseY, ellipseX5, ellipseY5) < 30){
  textSize (9)
  fill(190, 93, 97)
  text("This is Mars!", ellipseX5, ellipseY5)
  }

  if(dist(mouseX, mouseY, ellipseX6, ellipseY6) < 90){
  textSize (14)
  fill(250, 13, 197)
  text("This is Jupiter!", ellipseX6, ellipseY6)

  }

  strokeWeight(1)
  fill(90, 90, 90)
  ellipse(ballX, ballY, 30, 30)

  if (mouseIsPressed == true){
    image(rocket, mouseX, mouseY, 100, 100)


  }

  if(dist(mouseX, mouseY, ballX, ballY) < 20){
    crash.play()
  }

}
}

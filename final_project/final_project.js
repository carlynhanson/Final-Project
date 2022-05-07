let canvas
let table
let selectMenu
let day
let submitButton

let dayArray = []
let weekdayArray = []
let phoneArray = []
let compArray = []

let capture
let tracker
let swirl1
let swirl2


let w = 600
    h = 600


function preload(){
  table = loadTable('final_data.csv', 'csv', 'header')

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style("z-index", "-1")
  background(200, 20, 50, 150)
  fill(25)
  imageMode(CENTER)
  textAlign(CENTER)


  selectMenu = createSelect()
  selectMenu.option('Select Date')
  submitButton = createButton('Submit')

  for(let i = 0; i < table.getRowCount(); i++){

    let day = table.getString(i, 'Day')

    let week = table.getString(i, 'Week Day')

    let phone = table.getString(i, 'Phone')

    let computer = table.getString(i, 'Computer')


    selectMenu.option(day)

  }

  submitButton.mousePressed(dayChange)

  capture = createCapture({
      audio: false,
      video: {
          width: w,
          height: h
      }
  }, function() {
      console.log('capture ready.')
  });
  capture.elt.setAttribute('playsinline', '');
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();
  colorMode(HSB);
  swirl1 = loadImage("images/Hypnosis.png")
  swirl2 = loadImage("images/Hypnosis.png")
  //face tracking object
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);



}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}

function dayChange(){
  background(200, 45, 10, 11)
  fill(255)
  stroke(10)
  strokeWeight(10)
  textSize(30)
  for(let i = 0; i < table.getRowCount(); i++){
    if(selectMenu.value() == table.getString(i, 'Day')){
      text('Day of the Week: ' + table.getString(i, 'Week Day'), 250, 100)
      text('Phone Screen Time: ' + table.getString(i, 'Phone'), 250, 150)
      text('Computer Screen Time: ' + table.getString(i, 'Computer'), 250, 200)
    }

  }

}


function draw() {
    imageMode(CORNERS);
    image(capture, 100, 600, w, h);
    var positions = tracker.getCurrentPosition();
    imageMode(CENTER);
    noFill();
    stroke(255);


    if (positions.length > 0) {
        var mouthLeft = createVector(positions[44][0], positions[44][1]);
        var mouthRight = createVector(positions[50][0], positions[50][1]);
        var smile = mouthLeft.dist(mouthRight);
        // uncomment the line below to show an estimate of amount "smiling"
        // rect(20, 20, smile * 3, 20);
        print(smile)
        // uncomment for a surprise
        // noStroke();
        fill(0, 255, 255);
        image(swirl1, positions[5][0], positions[67][1], 65, 65);
        image(swirl2, positions[67][0], positions[67][1], 65, 65);
    }
    stroke(1)
    strokeWeight(1)
    ellipse(550, 20, 15, 15)

}

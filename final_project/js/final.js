let canvas
let table
let selectMenu
let date

let dateArray = []
let phoneArray = []
let compArray = []

let capture
let tracker
let swirl1
let swirl2


let w = 500,
    h = 500;



function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0, 0)
    canvas.style("z-index", "-1")

    imageMode(CENTER)

    selectMenu = createSelect()





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

function draw() {
    imageMode(CORNERS);
    image(capture, 0, 0, w, h);
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
    ellipse(470, 20, 15, 15)


}

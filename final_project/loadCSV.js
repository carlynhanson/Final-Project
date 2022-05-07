let canvas
let table
let selectMenu
let day
let submitButton

let dayArray = []
let weekdayArray = []
let phoneArray = []
let compArray = []


function preload(){
  table = loadTable('final_data.csv', 'csv', 'header')

}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style("z-index", "-1")
  background(200, 20, 50, 150)
  fill(255)
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
}

function windowResized(){
resizeCanvas(windowWidth,windowHeight)

}

function dayChange(){
  background(20, 45, 10, 11)
  fill(255)
  stroke(10)
  textSize(40)
  for(let i = 0; i < table.getRowCount(); i++){
    if(selectMenu.value() == table.getString(i, 'Day')){
      text('Day of the Week: ' + table.getString(i, 'Week Day'), windowWidth/2, 100)
      text('Phone Screen Time: ' + table.getString(i, 'Phone'), windowWidth/2, 150)
      text('Computer Screen Time: ' + table.getString(i, 'Computer'), windowWidth/2, 200)
    }

  }

}


function draw() {


}



    selectMenu.option(day)

    dayArray.push(table.getString(i, 'Day'))

    weekdayArray.push(table.getString(i, 'Week Day'))

    phoneArray.push(table.getString(i, 'Phone'))

    compArray.push(table.getString(i, 'Computer'))


    text(dayArray[i], windowWidth/2, 50)
    text(weekdayArray[i], windowWidth/2, 70)
    text(phoneArray[i], windowWidth/2, 90)
    text(compArray[i], windowWidth/2, 110)


let table
let companyMenu
let create
let imageArray = []

function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/personalData.csv', 'csv', 'header')

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  background(0);
  fill(255)


  companyMenu = createSelect()
  companyMenu.option('Select Company')

  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
      imageArray[i] = loadImage("images/" + table.getString(i, 'image'))
    //grab each of the dates

    let date = table.getString(i, 'date')

    let company = table.getString(i, 'company')

    companyMenu.option(company)

    //print dates on the screen
    //text(date, 50, (i*40)+40)
    //text(company, 100, (i*40)+40)
  }
print (imageArray)
  companyMenu.changed(changeData)
}


function changeData(){
  background(0)
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER)
  for (let i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value() == table.getString(i, 'company')){
      text(table.getString(i, 'company'), windowWidth/2, 50)
      text(table.getString(i, 'date'), windowWidth/2, 90)
      text(table.getString(i, 'location'), windowWidth/2, 130)
      text(table.getString(i, 'service'), windowWidth/2, 170)
      text(table.getString(i, 'frequency'), windowWidth/2, 200)
    for (let j = 0; j < table.getString(i, 'frequency'); j++){
      image(imageArrat[i], random(windowWidth), random(windowHeight), 30, 30)
    }
  }
  }


}

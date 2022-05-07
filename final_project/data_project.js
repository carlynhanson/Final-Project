
let timeData
let time
let timeArray = []

let canvas


function preload(){
  timeData = loadTable('time_data.csv', 'csv', 'header')
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  canvas.id("myChart")


  for (var i = 0; i < timeData.getRowCount(); i++){
    time = timeData.getString(i, 'Day');

  }
  loadGraph();

}


function draw(){

}

function loadGraph(){

  let ctx = document.getElementById('myChart').getContext('2d');

  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: timeArray,
      datasets: [{
        label: 'Day',
        fill: false,
        data: timeArray,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  }
}

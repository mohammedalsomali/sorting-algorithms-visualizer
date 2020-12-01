var canvas;
var ctx;
var canvasWidth;
var canvasHeight; 
var lines = new Array();
var myd = document.getElementById("mydiv");
var adiv = document.createDocumentFragment();
window.onload = function () {
  //InitTests();
  //getRandomInt();
  // document.getElementById("btn").addEventListener("click", InitTests);
  document.getElementById("btn").addEventListener("click", getRandomInt);
  // document.getElementById("btn").addEventListener("click", InitTests);
  // document.getElementById("btn").addEventListener("click", getRandomInt);
  document.getElementById("btn2").addEventListener("click", sort);
  // getRandomInt();
}




function InitTests() {
  canvas = document.getElementById('mycanvas');
  ctx = canvas.getContext('2d');
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  id = ctx.getImageData(0, 0, 2, 2);
}

function clearall() {
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  lines.length = 0;
}

function getRandomInt() {
  InitTests();
  clearall();
  for (var i = 0; i < canvasWidth / 10; ++i) {
    lines[i] = (Math.random() * canvasHeight);
    

  }
  //console.log(lines)
  makedata();
  return 
}
 function draw(a,b, i, j){
  ctx.fillRect(i * 10, 0, 10, canvasHeight);
  ctx.fillRect((i + j) * 10, 0, 10, canvasHeight);
  ctx.beginPath();
  ctx.moveTo(i * 10 , canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i * 10 , a);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo((j + i) * 10 , canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo((j+i) * 10 , b);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  

}



function makedata() {
  ctx = canvas.getContext("2d");
  for (var i = 0; i < canvasWidth / 10; ++i) {
    ctx.beginPath();
    ctx.moveTo(i * 10 , canvasHeight);
    ctx.lineWidth = 10;
    ctx.lineTo(i * 10 , lines[i]);
    ctx.strokeStyle = "pink";
    ctx.stroke();
    //console.log(h[i])
  }

}


function changecolor() {
  return document.getElementById("mycanvas").style.backgroundColor = 'red';

}




// function devide( arr, start, end){
//   var pv = arr[end];
//   var pi = start;
//   for (var i; i < pv; ++i){
//     if (arr[i] > pv){
//       ++pi
//       swap(arr[i], arr[end])
//     }
//     swap(arr[i])

//   }

// }

function sort() {
  //ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  for (var i = 0; i <= lines.length - 1; ++i) {
    for (var j = 0; j <= lines.length - i; ++j) {
      if (lines[i] > lines[i + j]) {
        temp = lines[i];
        lines[i] = lines[j + i];
        lines[i + j] = temp;
        //submit(lines[i], lines[i + j], i, j);
        setInterval(draw, 10, lines[i],lines[i+j],i,j);
        
       }
      }
    }
    //console.log(h)
    //makedata();
  }

 
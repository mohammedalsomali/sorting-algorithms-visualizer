var canvas;
var ctx;
var canvasWidth;
var canvasHeight;
var h= new Array();

window.onload = function () {
  InitTests();
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
  h.length = 0;
}

function getRandomInt() {
  clearall();
  InitTests();
  for (var i = 0; i < canvasWidth / 10; ++i) {
    h[i] = (Math.random() * canvasHeight);
    

  }
  console.log(h)
  makedata();
  return 
}


function makedata() {
  ctx = canvas.getContext("2d");
  for (var i = 0; i < canvasWidth / 10; ++i) {
    ctx.beginPath();
    ctx.moveTo(i * 10, canvasHeight);
    ctx.lineWidth = 10;
    ctx.lineTo(i * 10, h[i]);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    //console.log(h[i])
  }

}

function changecolor() {
  return document.getElementById("mycanvas").style.backgroundColor = 'red';

}


// function quicksort( arr, start, end){
//   if (start <= end){
//     var i = devide(arr, start, end);
//     quicksort(arr, start, i - 1);
//     quicksort(arr, i + 1, end);

//   }
  

// }

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
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  for (var i = 0; i <= h.length - 1; ++i) {
    for (var j = 0; j <= h.length - i; ++j) {

      if (h[i] > h[i + j]) {
        temp = h[i];
        h[i] = h[j + i];
        h[i + j] = temp;
       }
      }
    }
    //console.log(h)
    makedata();
  }
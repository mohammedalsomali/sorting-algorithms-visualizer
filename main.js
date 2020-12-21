var canvas;
var ctx;
var canvasWidth;
var canvasHeight;
var lines = new Array();
var data = [3,4,58,9,5,2,6,5,4];

window.onload = function () {
  canvas = document.getElementById('mycanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.9;
  ctx = canvas.getContext('2d');
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  document.getElementById("btn").addEventListener("click", getRandomInt);
  document.getElementById("btn2").addEventListener("click", sort);
  document.getElementById("btn2").addEventListener("click", Quicksort(lines));

  
}

function interval(){
  setInterval(sort, 100);
}



function clearall() {
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  lines.length = 0;
}

function getRandomInt() {
  clearall();
  for (var i = 0; i < canvasWidth / 10; ++i) {
    lines[i] = (Math.random() * canvasHeight);


  }
  
  makedata();
  
}




function makedata() {
  ctx = canvas.getContext("2d");
  ctx.fillRect(0,0, canvasWidth, canvasHeight);
  for (var i = 0; i < canvasWidth / 10; ++i) {
    ctx.beginPath();
    ctx.moveTo(i * 10, canvasHeight);
    ctx.lineWidth = 10;
    ctx.lineTo(i * 10, lines[i]);
    ctx.strokeStyle = "purple";
    ctx.stroke();
    i = i + 1;
    

  }

}


function changecolor() {
  return document.getElementById("mycanvas").style.backgroundColor = 'red';

}



  


async function sort() {
  
  for (var i = 0; i < lines.length ; ++i) {
    await draw(lines[i], i);
    
    for (var j = 0; j < lines.length - i; ++j) {
      await draw(lines[i+j], i+ j);
      
      if (lines[i] > lines[i + j]) {
        temp = lines[i];
        lines[i] = lines[j + i];
        lines[i + j] = temp;
        await swap(lines[i] ,lines[i + j], i, i + j );
        await drawback(lines[i+j], i+j);
      
      }
      else{
         
        await drawback(lines[i + j], i + j);
        
      }
        
      j = j + 1;
      
    }
    await drawback(lines[i], i);
    i = i + 1;
  }
  
  
}

async function draw(b,i){
  
  ctx.beginPath();
  ctx.moveTo(i * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i * 10, b);
  ctx.strokeStyle = "red";
  ctx.stroke();
  await timer(10);
  
}

async function drawback(b,i){
  ctx.beginPath();
  ctx.moveTo(i  * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i  * 10, b);
  ctx.strokeStyle = "purple";
  ctx.stroke();
  await timer(10);
  

}



async function swap(a,b, i,j) {
  ctx.clearRect(i * 10, 0, 10, canvasHeight);
  ctx.beginPath();
  ctx.moveTo(i * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i * 10, a);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.clearRect( (j-1) * 10, 0, 20, canvasHeight);
  ctx.beginPath();
  ctx.moveTo(j * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(j * 10, b);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  await timer(100);
  
}


function Quicksort(data) {
  pivot_piont = data.lenght;
  pivot_vlaue = data[pivot_piont];
  for (var i = 0; i <= pivot_piont; i++) {
    if ((data[i] >= pivot_vlaue) && (pivot_piont >= i)) {
      temp = data[i];
      data[i] = pivot_vlaue;
      pivot_vlaue = temp;
      pivot_piont = i;
      console.log(data);

    }
  }


}



function timer(ms){return new Promise(res => setTimeout(res, ms));}
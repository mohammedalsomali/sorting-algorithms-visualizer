var canvas;
var ctx;
var canvasWidth;
var canvasHeight;
var lines = new Array();


window.onload = function () {
  canvas = document.getElementById('mycanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.95;
  ctx = canvas.getContext('2d');
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  document.getElementById("btn").addEventListener("click", getRandomInt);
  document.getElementById("btn2").addEventListener("click", sort);
  
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
  //console.log(lines)
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
    //console.log(h[i])
    

  }

}


function changecolor() {
  return document.getElementById("mycanvas").style.backgroundColor = 'red';

}



  


async function sort() {
  
  for (var i = 0; i < lines.length ; ++i) {
    // ctx.beginPath();
    // ctx.moveTo(i * 10, canvasHeight);
    // ctx.lineWidth = 10;
    // ctx.lineTo(i * 10, lines[i]);
    // ctx.strokeStyle = "red";
    // ctx.stroke();
    // await timer(10 );
    await draw(lines[i], i);
    
    for (var j = 0; j < lines.length - i; ++j) {
      // ctx.fillstyle = "red";
      // ctx.fillRect((i +j) * 10, 0, 10, canvasHeight);
      // await timer(30 * j);
      //await timer(i * 10); 
      await draw(lines[i+j], i+ j);
      
      if (lines[i] > lines[i + j]) {
        // ctx.fillRect((i +j-1) * 10, 0, 20, canvasHeight);
        temp = lines[i];
        lines[i] = lines[j + i];
        lines[i + j] = temp;
        //await timer( 10);
        await drawnew(lines[i] ,lines[i + j], i, i + j );
        await drawback(lines[i+j], i+j);
      //   // ctx.fillstyle = "black";
      //   // ctx.fillRect(i * 10, 0, 11, canvasHeight);
      //   // await timer(30);
      //   // ctx.fillstyle = "black";
      //   // ctx.fillRect((j + i) * 10, 0, 11, canvasHeight);
      //   // await timer(30 * j);
        
      //   // ctx.fillstyle = "blue";
      //   // ctx.fillRect(i * 10, 0, 10, canvasHeight);
      //   // ctx.fillstyle = "blue";
      //   // ctx.fillRect((j + i) * 10, 0, 10, canvasHeight);
      //   // await timer(30 * j);
      }
      else{
         
        await drawback(lines[i + j], i + j);
        
      //   // ctx.fillstyle = "pink";
      //   // ctx.fillRect(i * 10, 0, 11, lines[i]);
      //   // await timer(5 * j); 
      //   // ctx.fillstyle = "pink";
      //   // ctx.fillRect((j + i) * 10, 0, 11, lines[i+j]);
      //   // await timer(5 * j); 


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
  //ctx.clearRect(1 - i * 10, 0, 10, canvasHeight);
  ctx.beginPath();
  ctx.moveTo(i  * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i  * 10, b);
  ctx.strokeStyle = "purple";
  ctx.stroke();
  await timer(10);
  

}



async function drawnew(a,b, i,j) {
  ctx.clearRect(i * 10, 0, 10, canvasHeight);
  ctx.beginPath();
  ctx.moveTo(i * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i * 10, a);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  await timer(10 );
  ctx.clearRect( (j-1) * 10, 0, 20, canvasHeight);
  ctx.beginPath();
  ctx.moveTo(j * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(j * 10, b);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  await timer(100);
  // await drawback(b, j);
  
}

function timer(ms){return new Promise(res => setTimeout(res, ms));}
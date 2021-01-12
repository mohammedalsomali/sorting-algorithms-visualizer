var canvas;
var ctx;
var canvasWidth;
var canvasHeight;
var lines = new Array();

window.onload = function () {
  canvas = document.getElementById('mycanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.9;
  ctx = canvas.getContext('2d');
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  document.getElementById("GenarateRandom").addEventListener("click", getRandomInt);
  document.getElementById("Basicsort").addEventListener("click", sort);
  document.getElementById("Quicksort").addEventListener("click", runQuick);

  
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
  for (var i = -1; i < canvasWidth / 10; ++i) {
    ctx.beginPath();
    ctx.moveTo(i * 10, canvasHeight);
    ctx.lineWidth = 10;
    ctx.lineTo(i * 10, lines[i]);
    ctx.strokeStyle = "purple";
    ctx.stroke();
    i += 1;
    

  }

}




  


async function sort() {
  
  for (var i = -1; i < lines.length ; ++i) {
    await draw_colums(lines[i], i);
    
    for (var j = 0; j < lines.length - i; ++j) {
      await draw_colums(lines[i+j], i+ j);
      
      if (lines[i] > lines[i + j]) {
        temp = lines[i];
        lines[i] = lines[j + i];
        lines[i + j] = temp;
        await swap_colums(lines[i] ,lines[i + j], i, i + j );
        await drawback_colums(lines[i+j], i+j);
      
      }
      else{
         
        await drawback_colums(lines[i + j], i + j);
        
      }
        
      j = j + 1;
      
    }
    await drawback_colums(lines[i], i);
    i = i + 1;
  }
  
  
}

async function draw_colums(b,i){
  
  ctx.beginPath();
  ctx.moveTo(i * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i * 10, b);
  ctx.strokeStyle = "red";
  ctx.stroke();
  await timer(10);
  
}

async function drawback_colums(b,i){
  ctx.beginPath();
  ctx.moveTo(i  * 10, canvasHeight);
  ctx.lineWidth = 10;
  ctx.lineTo(i  * 10, b);
  ctx.strokeStyle = "purple";
  ctx.stroke();
  await timer(10);
  

}



async function swap_colums(a,b, i,j) {
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


function swap(items, leftIndex, rightIndex){
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
async function partition(items, left, right) {
  var mid = Math.floor((right + left) / 2);
  var pivot   = items[mid], //middle element
      i       = left, //left pointer
      j       = right; //right pointer
      await draw_colums(pivot, mid)
  while (i <= j) {
      await draw_colums(items[i], i)
      while (items[i] < pivot) {
          i++;
      }
      await drawback_colums(items[i], i)
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j); //sawpping two elements
          i++;
          j--;
      }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right);
      }
  }
  return items;
}


function runQuick(){
  let x = quickSort(lines, 0, lines.length -1);
  console.log(x)
}
function timer(ms){return new Promise(res => setTimeout(res, ms));}
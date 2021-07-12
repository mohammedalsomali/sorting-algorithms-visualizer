var container = document.getElementById("array");
var slider = document.getElementById("myRange");
var slider1 = document.getElementById("myRange1");
var flag = 0;

var num = slider.value; // Display the default slider value
var delay = slider1.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  flag = 1;
  num = this.value;
  // console.log(num);
  generatearray();
  updateTextInput(num);
}

function updateTextInput(a) {
  // console.log(a);
  document.getElementById("columsInput").value = "number of colums " + a; 
}


function updateTextInput1() {
  document.getElementById("delayInput").value = "delay time in ml " + delay; 
}

slider1.oninput = function () {
  delay = this.value;
  updateTextInput1();
}


window.onload = function () {
    var blocks = document.querySelectorAll(".block");
    
    document.getElementById("GenarateRandom").addEventListener("click", generatearray);
    document.getElementById("Basicsort").addEventListener("click", Bubble_sort);
    document.getElementById("Quicksort").addEventListener("click", Sort);
  
    
  }

// Function to delete existing array of blocks
function ClearAll(){
  container.innerHTML = "";//remove all child elements inside of container
  count_container.innerHTML = "";//remove all child elements inside of count_container



}
  
// Function to generate the array of blocks
function generatearray() {
  ClearAll();
  for (var i = 0; i <= num ; i++) {
    // Return a value from 1 to 100 (both inclusive)
    var value = Math.ceil(Math.random() * 100);
  
    // Creating element div
    var array_ele = document.createElement("div");
  
    // Adding class 'block' to div
    array_ele.classList.add("block");
  
    // Adding style to div
    array_ele.style.height = `${value * 3}px`;
    array_ele.style.transform = `translate(${i * 30}px)`;
  
    // Creating label element for displaying
    // size of particular block
    var array_ele_label = 
    document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
  
    // Appending created elements to index.html
    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
    // console.log(i, num);

   
  }
  generate_idx();
}
  
// Function to generate indexes
var count_container = 
document.getElementById("count");
function generate_idx() {
  for (var i = 0; i <= num ; i++) {
    // Creating element div
    var array_ele2 = document.createElement("div");
  
    // Adding class 'block2' to div
    array_ele2.classList.add("block2");
  
    // Adding style to div
    array_ele2.style.height = `${20}px`;
    array_ele2.style.transform = `translate(${i * 30}px)`;
  
    // Adding indexes
    var array_ele_label2 = 
    document.createElement("label");
    array_ele_label2.classList.add("block_id3");
    array_ele_label2.innerText = i;
  
    // Appending created elements to index.html
    array_ele2.appendChild(array_ele_label2);
    count_container.appendChild(array_ele2);
    // console.log(i, num);
  }
}
// claing the QuickSort function
function Sort(){
  return QuickSort(0,num, delay)
}

// Asynchronous QuickSort function
async function QuickSort(l, r, delay) {
  if (l < r) {
    // Storing the index of pivot element after partition
    var pivot_idx = await lometo_partition(l, r);
    // Recursively calling quicksort for left partition
    await QuickSort(l, pivot_idx - 1);
    // Recursively calling quicksort for right partition
    await QuickSort(pivot_idx + 1, r);
  }
}


async function lometo_partition(l, r, delay1) {
  flag = 0
  var blocks = document.querySelectorAll(".block");
  // console.log(Number(blocks[0].childNodes[0].innerHTML))
  
  // Storing the value of pivot element
  var pivot = 
  Number(blocks[r].childNodes[0].innerHTML);
  var i = l - 1;
  blocks[r].style.backgroundColor = "red";
  document.
  getElementsByClassName("range")[0].innerText = `[${l},${r}]`;
  
  for (var j = l; j <= r - 1; j++) {
    // To change background-color of the
    // blocks to be compared
    blocks[j].style.backgroundColor = "yellow";
    // To wait for 700 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    var value = 
    Number(blocks[j].childNodes[0].innerHTML);
    //  kill condition to stop the function 
    if (flag == 1){
      return 
    }
    // To compare value of two blocks
    if (value < pivot) {
      i++;
      draw_comparison(i, j, blocks);
      
      //To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    } else blocks[j].style.backgroundColor = "pink";
  }
  // Swapping the ith with pivot element
  i++;
  
  draw_swaping(i, r, blocks);

  // To wait for 2100 milliseconds
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay * 3)
  );
  document.getElementsByClassName("range")[0].innerText = "";
  for (var k = 0; k <= num ; k++) 
  if (flag == 1){
    return 
  }
  blocks[k].style.backgroundColor = "#6b5b95";
  return i;
}


  
// comparing to columns 
function draw_comparison(i, j, blocks){
  var temp1 = blocks[i].style.height;
  var temp2 = blocks[i].childNodes[0].innerText;
  blocks[i].style.height = blocks[j].style.height;
  blocks[j].style.height = temp1;
  blocks[i].childNodes[0].innerText =
  blocks[j].childNodes[0].innerText;
  blocks[j].childNodes[0].innerText = temp2;
  blocks[i].style.backgroundColor = "orange";
  if (i != j) blocks[j].style.backgroundColor = "pink";
}




function draw_swaping(i, r, blocks) {
  var temp1 = blocks[i].style.height;
  var temp2 = blocks[i].childNodes[0].innerText;
  blocks[i].style.height = blocks[r].style.height;
  blocks[r].style.height = temp1;
  blocks[i].childNodes[0].innerText =
  blocks[r].childNodes[0].innerText;
  blocks[r].childNodes[0].innerText = temp2;
  blocks[r].style.backgroundColor = "pink";
  blocks[i].style.backgroundColor = "green";
}






async function Bubble_sort() {
  var blocks = document.querySelectorAll(".block");
  
  flag = 0


  for (var i = 0; i <= num; ++i) {
    blocks[i].style.backgroundColor = "red";
    
    for (var j = 1; j <= num - i; ++j) {
      if (flag == 1){
        return ;
      }
      blocks[j + i].style.backgroundColor = "orange";
      document.getElementsByClassName("range")[0].innerText = `[${i},${j}]`;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      if (Number(blocks[i].childNodes[0].innerHTML) > Number(blocks[i + j].childNodes[0].innerHTML)) {

        await draw_swaping(i, j + i, blocks);
        // drawback_colums(lines[i + j], i + j);
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );


      }

      else {


        blocks[j + i].style.backgroundColor = "pink";

      }


    }
    blocks[i].style.backgroundColor = "#6b5b95";
  }



}


// neeeded to add 2 more sorting algho's
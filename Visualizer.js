var div = document.getElementById("mydiv");
var body = document.getElementById("body");
var divwidth;
var divheight;
var lines = new Array();

window.onload = function() {
    div.offsetwidth = window.innerWidth ;
    div.offsetheight = window.innerheight;
    divwidth = div.offsetWidth;
    divheight = div.offsetHeight;
    console.log(divheight);
    document.getElementById("btn2").addEventListener("click", getRandomInt);

}

function getRandomInt() {
    //clearall();
    for (var i = 0; i < divwidth / 10; ++i) {
      lines[i] = (Math.random() * divheight);
  
  
    }
    //console.log(lines)
    makedata();
    
  }

function makedata() {
    var new1 = document.createDocumentFragment();
    for (var i = 0; i < divwidth / 10; ++i) {
        var rect = document.createElement("div");
        rect.style.width = 10 + "px";
        rect.style.height = lines[i] + "px";
        rect.style.left = 5 + "px";
        //rect.style.top = height * i + "px";
        rect.style.position = "relative";
        rect.style.backgroundColor = "blue";
        new1.appendChild(rect);
        console.log(lines[i]);

    }
    div.appendChild(new1);
}
let color = `rgb(0,0,0)`;
let gameMode = "standar";
let rows = 16;

const board = document.querySelector(".board");
const size = document.querySelector(".board").clientHeight;
const sizeInput = document.querySelector("#size");
const clrInput = document.querySelector("#clr");
const resetBtn = document.querySelector(".reset");
const rainbow = document.querySelector(".random");
const erase = document.querySelector(".erase");
const darker =document.querySelector(".darker");
const brighter =document.querySelector(".brighter");

let mouseDown = "false";
document.body.onmousedown = () => (mouseDown="true");
document.body.onmouseup = () => (mouseDown="false");

// funtion that bills the board with divs //

function randomNum (n) {
    return Math.floor(Math.random()*n);
}

function fillBoard(n){
    if (n > 64){
        n = 64;
    }
    let nSquare = n*n;
    let b = ((size-9)/n);
    for (var i = 0; i < nSquare ; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "square";
        newDiv.style.height = `${b}px`;
        newDiv.style.width = `${b}px`;
        newDiv.style.backgroundColor = "rgb(255,255,255)";
        board.appendChild(newDiv);
        console.log("\${b}px");    
    }
}

// function to color with a color //

function paint (e) { 
    if (e.type === "mouseover" && mouseDown == "false")return
    else if(gameMode == "standar"){
        e.target.style.backgroundColor = color;
        board.style.backgroundColor ="rgb(255,255,255)";
    }
    else if(gameMode == "rainbow"){
        let red = randomNum (255);
        let green = randomNum (255);
        let blue = randomNum (255);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        board.style.backgroundColor ="rgb(255,255,255)";
    }
    else if(gameMode == "erase"){
        e.target.style.backgroundColor = "rgb(255,255,255)";
        board.style.backgroundColor ="rgb(255,255,255)";
    }
    else if(gameMode=="darker"){
        let oldColor = e.target.style.backgroundColor;
        const arr = oldColor.split("(");
        arr.shift();
        let rgbColString = arr.toString();
        const rgbCol =rgbColString.split(")");
        rgbCol.pop();
        const rgbfin = rgbCol.toString().split(",");
        let red = parseInt(rgbfin[0]);
        let green = parseInt(rgbfin[1]);
        let blue = parseInt(rgbfin[2]);
        red *=0.9;
        green*=0.9;
        blue*=0.9;
        red = parseInt(red);
        green = parseInt(green);
        blue = parseInt(blue);
        if (red<0){
            red = "0";
        }
        if (blue<0){
            blue= "0";
        }
        if (red<0){
            red="0";
        }
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        board.style.backgroundColor ="rgb(255,255,255)";    
    }
    else if(gameMode=="brighter"){
        let oldColor = e.target.style.backgroundColor;
        const arr = oldColor.split("(");
        arr.shift();
        let rgbColString = arr.toString();
        const rgbCol =rgbColString.split(")");
        rgbCol.pop();
        const rgbfin = rgbCol.toString().split(",");
        let red = parseInt(rgbfin[0]);
        let green = parseInt(rgbfin[1]);
        let blue = parseInt(rgbfin[2]);
        red *=1.1;
        green*=1.1;
        blue*=1.1;
        red = parseInt(red);
        green = parseInt(green);
        blue = parseInt(blue);
        if(red <= 6){
            red = "10";
        }
        if (green <= 6){
            green = "10";
        }
        if (blue <= 6){
            blue = "10";
        }
        if (red>255){
            red = "255";
        }
        if (blue>255){
            blue= "255";
        }
        if (red>255){
            red="255";
        }
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        board.style.backgroundColor ="rgb(255,255,255)";    
    }
}

function reset (){
    const divs = document.querySelectorAll(".square");
    divs.forEach(square => {
        square.style.backgroundColor = "rgb(255,255,255)";        
    });
}



//event listener to add drawing functionality//

board.addEventListener("mouseover", paint);
board.addEventListener("mousedown", paint);
rainbow.addEventListener("click",() => (gameMode="rainbow"));
resetBtn.addEventListener("click",reset);
erase.addEventListener("click",() => (gameMode="erase"));
clrInput.addEventListener("change",function (event){gameMode="standar";color = event.target.value;});
sizeInput.addEventListener("change",function (){board.innerHTML="";fillBoard(sizeInput.value);});
darker.addEventListener("click",() => (gameMode="darker"));
brighter.addEventListener("click",() => (gameMode="brighter"));

fillBoard(16);







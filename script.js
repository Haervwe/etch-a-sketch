let color = `#000000`;
let gameMode = "standar";

const board = document.querySelector(".board");
const size = document.querySelector(".board").clientHeight;
const sizeInput = document.querySelector("#size");
const clrInput = document.querySelector("#clr");
const resetBtn = document.querySelector(".reset");
const rainbow = document.querySelector(".random");
const erase = document.querySelector(".erase");

let mouseDown = "false";
document.body.onmousedown = () => (mouseDown="true");
document.body.onmouseup = () => (mouseDown="false");

// funtion that bills the board with divs //

function randomNum (n) {
    return Math.floor(Math.random()*n);
}

function fillBoard(n){
    let nSquare = n*n;
    let b = ((size-9)/n);
    for (var i = 0; i < nSquare ; i++) {
        var newDiv = document.createElement("div");
        newDiv.className = "square";
        newDiv.style.height = `${b}px`;
        newDiv.style.width = `${b}px`;
        board.appendChild(newDiv);
        console.log("\${b}px");    
    }
}

// function to color with a color //

function paint (e) { 
    if (e.type === "mouseover" && mouseDown == "false")return
    else if(gameMode == "standar"){
        e.target.style.backgroundColor = color;
        board.style.backgroundColor ="white";
    }
    else if(gameMode == "rainbow"){
        let red = randomNum (255);
        let green = randomNum (255);
        let blue = randomNum (255);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        board.style.backgroundColor ="white";
    }
    else if(gameMode == "erase"){
        e.target.style.backgroundColor = "white";
        board.style.backgroundColor ="white";
    }
}

function reset (){
    const divs = document.querySelectorAll(".square");
    divs.forEach(square => {
        square.style.backgroundColor = "white";        
    });
}


//event listener to add drawing functionality//

board.addEventListener("mouseover", paint);
rainbow.addEventListener("click",() => (gameMode="rainbow"));
resetBtn.addEventListener("click",reset);
erase.addEventListener("click",() => (gameMode="erase"));
clrInput.addEventListener("change",function (event){gameMode="standar";color = event.target.value;});



fillBoard(16);







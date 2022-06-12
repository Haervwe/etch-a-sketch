let color = "#ffffff";


const board = document.querySelector(".board");
const size = document.querySelector(".board").clientHeight;
const sizeInput = document.querySelector("#size");
const clrInput = document.querySelector("#clr");

let mouseDown = "false";
document.body.onmousedown = () => (mouseDown="true");
document.body.onmouseup = () => (mouseDown="false");

// funtion that bills the board with divs //

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
    else{
        console.log(mouseDown);
        e.target.style.backgroundColor = "black";
        board.style.backgroundColor ="white";
    }
}

//function to add drawing functionality //

board.addEventListener("mouseover", paint);



fillBoard(16);







const board = document.querySelector(".board");
const size = document.querySelector(".board").clientHeight;
const sizeInput = document.querySelector("#size");
const clrInput = document.querySelector("#clr");
let color = "#ffffff";


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

function paint (div,a,b,c) {
    
}

//function to add drawing functionality //

board.addEventListener("hover", function (){
    const newDiv = document.querySelectorAll(".square");
    newDiv.foreach (square =>{
        square.addEventListener("hover",function (){square.style.backgroundColor = "black";});
    });
    
});



fillBoard(16);







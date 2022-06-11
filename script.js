const board = document.querySelector(".board");
const size = document.querySelector(".board").clientHeight;



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

fillBoard(16);







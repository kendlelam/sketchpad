let container = document.getElementsByClassName("container")[0];

function createDivs(numSquares) {
    for (let i = 0; i < Math.pow(numSquares,2); i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        newSquare.style.height = 500/numSquares +'px';
        newSquare.addEventListener("mouseover", (event)=> {
            if (event.buttons == 1){
                newSquare.style["background-color"] = "black";
            }
            
        });
        container.appendChild(newSquare);
    }
}

createDivs(16);

let button = document.getElementsByClassName("prompt")[0];
button.addEventListener("click", askSquares);

let clearButton = document.getElementsByClassName("pane")[0];
clearButton.addEventListener("click", clearPad);

function askSquares() {
    let num = prompt("Enter number of squares for side of grid: (Maximum 100)");
    if (num){
        if (num > 100) {
            alert("Error: too high of a number.");
        } else {
            while(container.firstChild) {
                container.removeChild(container.firstChild);
            }
            createDivs(num);
        }
        
    }

}

function clearPad(){
    let squares = container.children;
    for (let i = 0; i < squares.length; i++){
        squares[i].style["background-color"] = "white";
    }
}
let container = document.getElementsByClassName("container")[0];

createDivs(16);

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
        newSquare.addEventListener("click", (event)=> {

                newSquare.style["background-color"] = "black";
            
        });
        container.appendChild(newSquare);
    }
}




let button = document.getElementsByClassName("prompt")[0];
button.addEventListener("click", askSquares);

let clearButton = document.getElementsByClassName("pane")[0];
clearButton.addEventListener("click", clearPad);

function askSquares() {
    let num = prompt("Enter number of squares for side of grid: (Must be between 10 and 100)");
    if (!isNaN(num)){
        if (num > 100 || num < 10) {
            alert("Out of bounds. Must be from 10 to 100");
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
let container = document.getElementsByClassName("container")[0];

function createDivs(numSquares) {
    for (let i = 0; i < Math.pow(numSquares,2); i++){
        let newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        newSquare.style.height = 500/numSquares +'px';
        newSquare.addEventListener("mouseover", (event)=> {
            newSquare.style["background-color"] = "black";
        });
        container.appendChild(newSquare);
    }
}

createDivs(16);

let button = document.getElementsByClassName("prompt");
button[0].addEventListener("click", askSquares)

function askSquares() {
    let num = prompt("Enter number of squares for side of grid:");
    if (num){
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createDivs(num);
    }

}


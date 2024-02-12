var restart = document.querySelector("#b")
var squares = document.querySelectorAll("td")

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].bgColor = "white"
    }
}

function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

restart.addEventListener('click', clearBoard);

function changeColor() {
    this.bgColor = randomColor();
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseenter', changeColor)
    squares[i].addEventListener('touchmove', changeColor)
}


var gameBoard = document.getElementById("game-board")

function createBoard() {
    for (let i = 1; i <= 10; i++) {
        let button = document.createElement("button")
        button.classList.add("card", "flipped")
        gameBoard.appendChild(button)
    }
}

createBoard()

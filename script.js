var gameBoard = document.getElementById("game-board")

const imgs = [
    "url('./imgs/ryan-1.jpg')",
    "url('./imgs/ryan-2.jpg')",
    "url('./imgs/ryan-3.jpg')",
    "url('./imgs/ryan-4.jpg')",
    "url('./imgs/ryan-5.jpg')",
    "url('./imgs/ryan-1.jpg')",
    "url('./imgs/ryan-2.jpg')",
    "url('./imgs/ryan-3.jpg')",
    "url('./imgs/ryan-4.jpg')",
    "url('./imgs/ryan-5.jpg')",
];


function flipCard(id, index) {
    
    let button = document.getElementById(id)
    button.classList.remove("flipped")
    button.style.backgroundImage = imgs[index - 1]
}

function createBoard() {
    for (let i = 1; i <= 10; i++) {
        let button = document.createElement("button")
        button.classList.add("card", "flipped")
        button.id = i
        button.type = "button"
        button.addEventListener('click', function() {
            flipCard(this.id, i); // Envie o ID do botão como parâmetro
        })
        gameBoard.appendChild(button)
    }
}

function resetCards() {
    for(let i = 1; i <= 10; i++) {
        let button = document.getElementById(i)
        button.classList.add("flipped")
        button.style.backgroundImage = ""
    }
}


createBoard()

var gameBoard = document.getElementById("game-board")
var match = []
var wait = false

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
    "url('./imgs/ryan-5.jpg')"
];


function checkForMatch(id) {
    buttonA = document.getElementById(match[0])
    buttonB = document.getElementById(id)

    if (buttonA.style.backgroundImage === buttonB.style.backgroundImage) {
        correctGuesses++
    } else {
        unflip(buttonA, buttonB)
    }

    match.shift()
}

function flipCard(id, index) {
    if (wait) {
        wait = false
        return null
    }
    let button = document.getElementById(id)
    button.classList.remove("flipped")

    button.style.transform = "rotatey(180deg)"
    button.style.transition = "transform 1s"
    button.style.backgroundImage = imgs[index - 1];

    button.setAttribute("disabled", "true")

    if (match.length < 1) {
        match.push(id)
    } else {
        wait = true
        setTimeout(checkForMatch, 1000, id)
    }
}

function shuffle() {
    for (let i = imgs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgs[i], imgs[j]] = [imgs[j], imgs[i]];
    }
}

function createBoard() {
    shuffle()
    for (let i = 1; i <= 10; i++) {
        let button = document.createElement("button")
        button.classList.add("card", "flipped")
        button.id = i
        button.type = "button"

        button.addEventListener('click', function() {
            flipCard(this.id, i);
        })

        gameBoard.appendChild(button)
    }
}


function resetCards() {
    for(let i = 1; i <= 10; i++) {
        let button = document.getElementById(i)
        button.classList.add("flipped")
        button.style.transform = ""
        button.style.backgroundImage = ""
        button.removeAttribute("disabled")
    }
    shuffle()
}


createBoard()

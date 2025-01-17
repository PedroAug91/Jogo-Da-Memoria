var gameBoard = document.getElementById("game-board")
var match = []
var correctGuesses = 0
var wait = false

const imgs = [
    "url('./imgs/ryan-1.jpg')",
    "url('./imgs/ryan-2.jpg')",
    "url('./imgs/ryan-3.jpg')",
    "url('./imgs/ryan-4.jpg')",
    "url('./imgs/ryan-5.jpg')",
    "url('./imgs/ryan-6.jpg')",
    "url('./imgs/ryan-7.jpg')",
    "url('./imgs/ryan-8.jpg')",
    "url('./imgs/ryan-9.jpg')",
    "url('./imgs/ryan-10.jpg')",
    "url('./imgs/ryan-1.jpg')",
    "url('./imgs/ryan-2.jpg')",
    "url('./imgs/ryan-3.jpg')",
    "url('./imgs/ryan-4.jpg')",
    "url('./imgs/ryan-5.jpg')",
    "url('./imgs/ryan-6.jpg')",
    "url('./imgs/ryan-7.jpg')",
    "url('./imgs/ryan-8.jpg')",
    "url('./imgs/ryan-9.jpg')",
    "url('./imgs/ryan-10.jpg')"
];

function unflipCards(buttonA, buttonB) {
    buttonA.classList.add("flipped");
    buttonB.classList.add("flipped");
    buttonA.style.transform = 'rotateY(0deg)';
    buttonB.style.transform = 'rotateY(0deg)';
    buttonA.style.transition = "transform 1s";
    buttonB.style.transition = "transform 1s";
    buttonA.style.backgroundImage = ""; 
    buttonB.style.backgroundImage = ""; 
    buttonA.removeAttribute("disabled"); 
    buttonB.removeAttribute("disabled"); 
}

function checkForMatch(id) {
    buttonA = document.getElementById(match[0])
    buttonB = document.getElementById(id)

    if (buttonA.style.backgroundImage === buttonB.style.backgroundImage) {
        correctGuesses++
    } 
    else {
        setTimeout(() => {
            unflipCards(buttonA, buttonB);
        }, 100); 
    }

    if (correctGuesses === imgs.length / 2) {
        document.getElementById("won").style.display = "flex"
    }

    match.shift();
    wait = false;
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
    for (let i = 1; i <= 20; i++) {
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
    for(let i = 1; i <= 20; i++) {
        let button = document.getElementById(i)
        button.classList.add("flipped")
        button.style.transform = ""
        button.style.backgroundImage = ""
        button.removeAttribute("disabled")
    }
    shuffle()
}

function resetGame() {
    document.getElementById("won").style.display = "none"
    resetCards();
    correctGuesses = 0;
    match = [];
    wait = false;
}

createBoard()

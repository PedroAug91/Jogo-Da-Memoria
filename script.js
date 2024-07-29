var gameBoard = document.getElementById("game-board")

function createBoard() {
    for (let i = 1; i <= 10; i++) {
        let button = document.createElement("button")
        button.classList.add("card", "flipped")
        gameBoard.appendChild(button)
    }
}

const creatCard = () =>{
    const grid = document.createElement('div');
    const frente = document.createElement('div');
    const verso = document.createElement('div');

    grid,className = 'grid';
    frente.className = 'frente';
    verso.className = 'verso';

    card.appendChild(frente);
    card.appendChild(verso);
    grid.appendChild(card);


}

const imgs = [
'ryan-1',
'ryan-2',
'ryan-3',
'ryan-4',
'ryan-5'
];

createBoard()
creatCard()

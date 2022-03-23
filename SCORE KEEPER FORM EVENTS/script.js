/* ############## SELECTORES Y VARIABLES ############## */
let scoreP1 = 0;
let scoreP2 = 0;

const selectBestOf = document.querySelector('#bestOf');
const buttonsDiv = document.querySelector('#buttons');
const playerOneButton = buttonsDiv.elements.playerOneButton;
const playerTwoButton = buttonsDiv.elements.playerTwoButton;
const resetButton = buttonsDiv.elements.resetButton;

const spanP1 = document.querySelector('#p1Span');
const spanP2 = document.querySelector('#p2Span');

let bestOf = parseInt(selectBestOf.value);
let isGameOver = false;

/* ############## FUNCIONES ############## */
addScore = (playerNum) =>{
    if(!isGameOver){
        if(playerNum === 1){
            scoreP1++;
            spanP1.textContent = scoreP1;
        } else if(playerNum === 2) {
            scoreP2++;
            spanP2.textContent = scoreP2;
        }
    }

    if(scoreP1 === bestOf){
        isGameOver = true;
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        spanP1.classList.add('winner');
        spanP2.classList.add('loser');

    }
    if(scoreP2 === bestOf){
        isGameOver = true;
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;
        spanP2.classList.add('winner');
        spanP1.classList.add('loser');

    }
}

reset = () => {
    scoreP1 = 0;
    scoreP2 = 0;
    spanP1.textContent = scoreP1;
    spanP2.textContent = scoreP2;
    isGameOver = false;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    spanP1.classList.remove('winner','loser');
    spanP2.classList.remove('winner','loser');
}


/* ############## MANEJADORES DE EVENTO ############## */

// Manejador de eventos para el elemento SELECT
selectBestOf.addEventListener('change', (e) => {
    bestOf = parseInt(e.target.value);
    reset();
    spanP1.textContent = scoreP1;
    spanP2.textContent = scoreP2;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
});

// Manejador de eventos para el BOTON PLAYER 1
playerOneButton.addEventListener('click', (e) => {
    e.preventDefault();
    addScore(1);
});

// Manejador de eventos para el BOTON PLAYER 2
playerTwoButton.addEventListener('click', (e) => {
    e.preventDefault();
    addScore(2);
});

// Manejador de eventos para el BOTON RESET
resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    reset();
});

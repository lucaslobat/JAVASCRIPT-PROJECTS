/* SELECTORS AND VARIABLES*/

let scoreP1 = 0;
let scoreP2 = 0;

const selectBestOf = document.querySelector('#bestOf');
const buttonsDiv = document.querySelector('#buttons');
const playerOneButton = buttonsDiv.elements.playerOneButton;
const playerTwoButton = buttonsDiv.elements.playerTwoButton;
const resetButton = buttonsDiv.elements.resetButton;

const spanP1 = document.querySelector('#player1');
const spanP2 = document.querySelector('#player2');



let bestOf = parseInt(selectBestOf.value);
let isGameOver = false;



/* LISTENERS AND FUNCTIONS */
selectBestOf.addEventListener('change', (e) => {
    bestOf = parseInt(e.target.value);
    reset();
    spanP1.textContent = scoreP1;
    spanP2.textContent = scoreP2;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
});


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


    //MUY IMPORTANTE LA COMPARACIÓN CON ===
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



playerOneButton.addEventListener('click', (e) => {
    e.preventDefault();
    addScore(1);
});


playerTwoButton.addEventListener('click', (e) => {
    e.preventDefault();
    addScore(2);
});


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


resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    reset();
});


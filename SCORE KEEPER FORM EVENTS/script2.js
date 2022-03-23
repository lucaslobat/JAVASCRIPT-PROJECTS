/* ------------ VARIABLES ------------ */
const playerOne = {
    score: 0,
    button: document.querySelector("#p1Button"),
    span: document.querySelector("#p1Span")
}
const playerTwo = {
    score: 0,
    button: document.querySelector("#p2Button"),
    span: document.querySelector("#p2Span")
}

const selectBestOf = document.querySelector("#bestOf")
let isGameOver = false;
let bestOfNumber = parseInt(selectBestOf.value);
const resetButton = document.querySelector("#resetButton");

/* ------------ EVENT LISTENERS ------------ */
selectBestOf.addEventListener('change', (e) => {
    e.preventDefault();
    bestOfNumber = parseInt(e.target.value);
    reset();
})


playerOne.button.addEventListener('click', (e) => {
    e.preventDefault();
    addScore(playerOne,playerTwo);
    console.log(bestOfNumber);
})

playerTwo.button.addEventListener('click', (e) => {
    e.preventDefault();
    addScore(playerTwo,playerOne);
})

resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    reset();
})


/* ------------ FUNCTIONS ------------ */

const addScore = (firstPlayer,secondPlayer) => {
    if(!isGameOver){
        firstPlayer.score++;
        firstPlayer.span.textContent = firstPlayer.score;

        if(firstPlayer.score === bestOfNumber){
            isGameOver = true;
            firstPlayer.button.disabled = true;
            firstPlayer.button.disabled = true;
            
            firstPlayer.button.classList.add('disabled');
            secondPlayer.button.classList.add('disabled');


            firstPlayer.span.classList.add('winner');
            secondPlayer.span.classList.add('loser');
        }
    }
}

const reset = () => {
    playerOne.score = 0;
    playerTwo.score = 0;

    playerOne.span.textContent = playerOne.score;
    playerTwo.span.textContent = playerTwo.score;
    playerOne.button.classList.remove('disabled');
    playerTwo.button.classList.remove('disabled');
    playerOne.button.disabled = false;
    playerTwo.button.disabled = false;

    playerOne.span.classList.remove('winner');
    playerTwo.span.classList.remove('loser');

    isGameOver = false;
}
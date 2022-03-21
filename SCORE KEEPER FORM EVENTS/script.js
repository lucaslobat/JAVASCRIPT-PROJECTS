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



selectBestOf.addEventListener('change', (e) => {
    bestOf = parseInt(e.target.value);
});


addScore = (playerNum) =>{

    if(playerNum === 1){
        scoreP1++;
        spanP1.textContent = scoreP1;
    } else {
        scoreP2++;
        spanP2.textContent = scoreP2;
    }



    //MUY IMPORTANTE LA COMPARACIÓN CON ===
    if(scoreP1 === bestOf || scoreP2 === bestOf){
        playerOneButton.disabled = true;
        playerTwoButton.disabled = true;

        //Añadir clases de winner or loser a spanP1 y spanP2
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


resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    scoreP1 = 0;
    scoreP2 = 0;

    spanP1.textContent = scoreP1;
    spanP2.textContent = scoreP2;


    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;

    // Removerle las clases de spanP1 y spanP2
});


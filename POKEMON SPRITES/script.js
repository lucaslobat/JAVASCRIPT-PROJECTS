let urlPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const mainContainer = document.querySelector(".main__container");
for (let i = 1; i <=151;i++){
    //Creates a new div,image and span.
    const newDiv = document.createElement('div');
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');

    // Add class to the div
    newDiv.classList.add('pokemon__div');
    newSpan.innerHTML = `#${i}`;
    newImg.src = `${urlPokemon}${i}.png`;
    newDiv.append(newImg,newSpan);


    mainContainer.append(newDiv);
    

}
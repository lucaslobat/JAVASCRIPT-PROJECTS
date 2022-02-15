/* Variable para manejar qué es lo que quiere hacer el usuario */
let userInput; 

/* Array dónde se almacenarán los TODO's */
let todosArray = [];

/* Variable para manejar el todo introducido por el usuario */
let todoTitle;

/* Vairable para manejar el índice del elemento dentro del array
que el usuario quiere eliminar */
let deleteIndex;

/* Mientras el usuario no introduce "quit" se le pregunta qué quiere hacer */
while (userInput !== "quit"){
    userInput = prompt(`Type what would you like to do:`);
    //Si el usuario introduce "add" se le pregunta el título del todo y lo agrega a un array.
    if(userInput === "add"){
        /* Se almacena el input del usuario y depués se añade al
        array de todos con el método array.push() */
        todoTitle = prompt("Introduce a new todo:");
        todosArray.push(todoTitle);
    } else if (userInput === "list"){
        /* Si no hay nada dentro del array se envia el mensaje */
        if(todosArray.length == 0){
            console.log("The todos list is empty at the moment. Type 'add' to introduce a new todo");
        }
        /* Si el usuario teclea "list" se recorre todos los elementos del array y se muestran */
        for(let i = 0; i < todosArray.length; i++){
            console.log(`${i}: ${todosArray[i]}`);
        }
    } else if (userInput === "delete"){
        deleteIndex = parseInt(prompt("Introduce the todo's index you desire to delete:"));
        if(Number.isNaN(deleteIndex)){
            console.log("Please introduce a valid number.");
        } else {
            console.log(`"${todosArray[deleteIndex]}" removed.`)
            todosArray.splice(deleteIndex,1);
        }

    } else {
            console.log("Please introduce one of the options available. Nothing else.")
    }
}

console.log("Thanks for using our app");
import promptSync from "prompt-sync";

let prompt = promptSync();

let userInput = prompt("Enter a number between 0 to 9 (must be integer) ");
userInput = Number(userInput);

console.log(userInput);
console.log(typeof(userInput));

let compInput = Math.floor(Math.random() * 10);

console.log(compInput);
console.log(typeof(compInput));

if (userInput <= 9) {

    if (userInput === compInput){
        console.log("The number you entered and computer picked are same. It's a draw");
    } else if (userInput > compInput){
        console.log("The number you entered is greater than the number computer picked");
    } else {
        console.log("The number you entered is less than the number computer picked");
    }
} else {
    console.log("Wrong Input");
}


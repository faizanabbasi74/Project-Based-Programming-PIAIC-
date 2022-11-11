// Program for taking input for JS file in Node just like prompt in browser

import promptSync from "prompt-sync";

const prompt = promptSync();

let name = prompt("What is your name? ");

console.log(name);

let age = Number(prompt("What is your age? "));
console.log(age);

console.log(`You will be ${age + 4} years older after four years.`);


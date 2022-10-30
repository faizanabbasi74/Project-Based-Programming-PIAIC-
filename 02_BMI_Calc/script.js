// BMI Calculator

let inchToCm = 2.54;
let poundToKg = 1/2.2046;

// Ask user for height in inches

let height = prompt("Please enter your height in inches");
console.log(height,"inches");

// Ask user for weight in pounds

let weight = prompt("Please enter your weight in pounds");
console.log(weight,"pounds");

// Use the conversion factor to convert height into centimeters and weight into kilograms

let heightInCm = (height * inchToCm).toFixed(2);
console.log(heightInCm,"centimeters");

let weightInKg = (weight * poundToKg).toFixed(2);
console.log(weightInKg, "kilograms");


let heightInM = heightInCm / 100;

let bMI = (weightInKg / heightInM**2).toFixed(2);

let output = `Your height is ${heightInM} meters, weight ${weightInKg} kilograms and BMI is ${bMI}.`
console.log(output)



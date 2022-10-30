// Conversion factor for miles to kilometers

let mToKm = 1.60934;

// Ask user for data input in Miles

let miles = prompt("Please enter distance in Miles");
console.log(miles,"miles");

// Use the conversion factor to convert Miles into Kilometers

let kilometers = miles * mToKm;
console.log(kilometers, "kilometers")

let output = `The distance of ${miles} miles is equal to ${kilometers} kilometers.`
document.write(output)



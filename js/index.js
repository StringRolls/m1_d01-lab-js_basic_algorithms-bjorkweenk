// Iteration 1: Names and Input
// were defining two names. Witht he variable names (hacker1 and hacker 2) We print the names. Hacker1 is a driver and hacker2 is a navigator. 

let hacker1 = "Bill"
let hacker2 = "Phill"

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
// You're going to check which one has the longest name. We use an else statement because we have different options. 3 options. It coudl be longer (bigger), shorter (smaller) or equal. Then we print the solution. 

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker1.length<hacker2.length){
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters`);

} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have the euqually long names , it has ${hacker1.length} characters`);
    
}

// Iteration 3: Loops
//3.1 we want to have the name drivers name in capital letters and we want some spaces in between the characters. 

let capitalName = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalName.trim())

//3.2 Print all the characters of the navigators name in reverse order. 

let reverseName = "";
for (let rev = hacker2.length - 1; rev >= 0; rev--) {
  reverseName += hacker2[rev];
}
console.log(reverseName);

//3.3 Depending on the [lexicographic order]
// check in alphabetic order which name goes first. 

if (hacker1 > hacker2){
console.log(`The driver's name goes first.`);

} else if (hacker1 < hacker2){ 
    console.log (`Yo, the navigator goes first definitely.` );

} else if (hacker1 === hacker2){
    console.log(`What?! You both have the same name?`);
}

//bonus 2 

let text = "racecar";
let backwardsText = "";

for (let h = text.length - 1; h >= 0; h--) {
  backwardsText += text[h];
}

if (text.toLowerCase() === backwardsText.toLowerCase()) {
  console.log(`${text} is a Palindrome`);
} else {
  console.log(`${text} is not a Palindrome`);
}
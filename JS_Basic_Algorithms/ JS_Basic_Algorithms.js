// Test
console.log("I'm ready!");

// Instructions
hacker1 = "Kayla"
console.log(`The driver's name is ${hacker1}`);
hacker2 = "Rachel"
console.log(`The navigator's name is ${hacker2}`);

// Conditionals
console.log(hacker1.length);
console.log(hacker2.length);

// 2.1
if (hacker1.length > hacker2.length){
  console.log(`The Driver has the longest name, it has ${hacker1} characters`);
} else if (hacker1.length < hacker2.length){
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length){
  console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
}

//Loops
// 3.1
let upperName = "";
for (let i=0; i < hacker1.length; i++){
  upperName += `${hacker1[i]} `
}
console.log(upperName.toUpperCase());

//  3.2
let newName = "";
for (let i = hacker1.length -1; i>=0; i--){
  newName += hacker1[i]
}
console.log(newName);

// 3.3 

if ((hacker1.localeCompare(hacker2)) === -1) {
      console.log("Yo, the navigator goes first definitely.")
    } else if ((hacker1.localeCompare(hacker2)) === 1){
      console.log("The driver's name goes first.")
    } else if ((hacker1.localeCompare(hacker2)) === 0){
      console.log("What?! You both got the same name?")
    };

//BONUS: Generate 3 paragraphs. Store the text in a variable    type of string. Make your program count the number of words in the string. Make your program count the number of times the Latin word et appears.

console.log("===================")

let lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

console.log(lorem1)

function WordCount(lorem1) { 
  return lorem1.split(" ").length;
  }
console.log(WordCount(lorem1));

console.log(lorem1.split("et").length-1)


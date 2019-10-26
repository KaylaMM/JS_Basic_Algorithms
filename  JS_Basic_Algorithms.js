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

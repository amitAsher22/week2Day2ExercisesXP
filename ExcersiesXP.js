

// Exercise 1: Simple If/Else Statement

// Instructions
// 1.Create 2 variables, x and y. Each of them should have a different numeric value.
// 2.Write an if/else statement that checks which number is bigger.

let x = 10;
let y = 44;

if(x >= y){
    // console.log(`the number (x) ${x}  is : bigger or Equal to this number (y) ${y} `);
}else{
    // console.log(`the number (y) ${y}  is : bigger or Equal to this number (x) ${x} `);
}

/////////////////////////////////////////////////////////////////////////////////


// Exercise 2: Chihuahua

// Instructions
// 1.Create a variable called newDog where it’s value is “Chihuahua”.
// 2.Check and display how many letters are in newDog.
// 3.Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// 4.Check if the variable newDog is equal to “Chihuahua”
//     if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
//     else, console.log ‘I dont care, I prefer cats’

// 2.Check and display how many letters are in newDog.
let newDog = "Chihuahua";
let Chihuahua = "Chihuahua";
let numberOfLetters = newDog.length;

//3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).

let uppercaseWord = newDog.toUpperCase()
let lowercaseWord = newDog.toLowerCase()
// console.log(uppercaseWord);
// console.log(lowercaseWord);


// 4.Check if the variable newDog is equal to “Chihuahua”
// //     if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// //     else, console.log ‘I dont care, I prefer cats’


if(newDog === Chihuahua){
    // console.log("I love Chihuahuas, it’s my favorite dog breed");

}else{
    // console.log("I dont care, I prefer cats");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Exercise 3: Even Or Odd

// Instructions
// 1.Prompt the user for a number and save it to a variable.
// 2.Check whether the variable is even or odd.
//    If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//    If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let promptFromUser = Number(prompt("write please some number"))



if(promptFromUser % 2 == 0){
    // console.log(`${promptFromUser} is an even number `);
}else{
    // console.log(`${promptFromUser} is an odd number `);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////// i need more explantion !!!!! :)

// Exercise 4: Group Chat

// Instructions
// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
// 1.Using the array above, console.log the number of users in a group chat based on the following rules:
//   If there is no users (the users array is empty), console.log “no one is online”.
//   If there is 1 user, console.log “<name_user> is online”.
//   If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
//   If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online


let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];



if(users){
    console.log("you are online");
}else{
    console.log("no one is online");
}
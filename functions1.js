console.log("*************Functions*************");

function greet(){
    console.log(" Hello! ");
}
greet();

function greetMe(name, message = "Hello!"){
    console.log(name, message);
    return message + " " + name; // A function can onlyn have 1 return statement
} // This is a function declaration

let greeting  = greetMe("John", "Hi!");

console.log(greeting);

// Arrow functions
// these are anonymous functions and are used to write small functions in a single line of code 

export default (name) => console.log(name);

// Arrow function with multiple parameters
export const arr = (name, age) => {
    console.log(name, age);
}

// console.log(arr("Shravya"));



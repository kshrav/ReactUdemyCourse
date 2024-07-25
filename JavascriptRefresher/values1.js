console.log("*************Values*************");
//Strings
let name = "Shravya";

let message = `Welcome ${name}!`;

console.log(message);

// Numbers

let number = 10;
let float = 10.5;

console.log(number, float);

// Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// Undefined

let undef;
console.log(undef);

// Null


let nullValue = null;
console.log(nullValue);

//Objects

console.log("***************Objects****************");
let obj = {
    name: "Shravya",
    age: 20,
    greet(){
        console.log(this.name, this.age);
    }
}
obj.greet();
console.log(obj.age);

console.log(obj);

//Arrays
console.log("***************Arrays****************");
let arr = [1, 2, 3, 4, 5, "Shravya", true, null, undefined, obj];
console.log(arr);
console.log(arr[8]);
arr.push(10); // Adds an element to the end of the array
const index = arr.findIndex((item) => item === 4); // Returns the index of the element, if it is not present in the array it returns -1
console.log(index);



for(let i = 0; i<arr.lenght; i++){
    console.log(arr[i]);
} 


// map

const newArr = arr.map((item) => item * 2);

console.log(newArr);

//creating objects from arrays

console.log("****Creating objects from arrays using map***");
const arr2 = ["Shravya", 20, "JavaScript", "React"];

const objArr = arr2.map((item) => ({ text : item } ));
console.log(objArr);
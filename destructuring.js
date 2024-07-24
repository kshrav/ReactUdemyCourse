console.log("********Destructuring assignment*******");


//array destructuring
const arrayList = ["Shravya", 24];
console.log(arrayList[0], arrayList[1]);

const [fullName, age] = arrayList;
console.log("fullname :", fullName, "age :",age);

//object destructuring
const objList = {
    firstName : "Shravya",
    lastName : "K",
    age : 25
};
console.log(objList.firstName, objList.lastName, objList.age);

const {firstName, lastName : initial , old} = { firstName : "Shravya", lastName : "K", old : 25};


console.log("firstName :", firstName, "lastName :", initial, "age :", old);

//function destructuring

function studentDetails({firstName, lastName, old}){
    return firstName + " " + lastName + " " + old;
}

console.log(studentDetails({firstName : "Shravya", lastName : "K", old : 25}));

//spread operator

const arr1 = [1, 2, 3, 4, 5];

const arr3 = [...arr1, 6, 7, 8, 9, 10];
console.log( "Spread Operator : Array ",arr3);

const objspread = {
    ...objList,
    phone : 1937837,
    email : "shr@gmail.com"
}

console.log("Spread Operator : Object ",objspread);


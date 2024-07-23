// conditional control structures

const password = prompt("Enter your password: ");

if(password === "hello"){
    console.log("Correct password");
}else if(password === "Hello!"){
    console.log("Correct password");
}else{
    console.log("Incorrect password");
}

// switch case

let num = 3;

switch(num){
    case 1: {
        console.log("One");
        break;
    }
    case 2 : {
        console.log("Two");
        break;
    }
    case 3: {
        console.log("Three");
        break;
    }
    default : {
        console.log("No Numbers");
    }
}

// for of loop
const hobbies = ["Reading", "Writing", "Coding", "Singing"];

hobbies.forEach((hobby) => {
    console.log(hobby);
});

//Manipulating the DOM

const ul = document.querySelector("ul");

const li = document.createElement("li");
li.textContent = "New Item";
li.style.color = "red";
// li.style.backgroundColor = "black";
// ul.append(li);


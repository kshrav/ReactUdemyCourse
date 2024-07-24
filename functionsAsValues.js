// bilut-in function that takes function as value
function handleTimeOut(){
    console.log("Time out....");
}

setTimeout(handleTimeOut, 5000); //we should not declare () while using function as a value, if mention it, it will be called

setTimeout(() => {
    console.log("Time out");
}, 500);



// User Defined functions that takes functions as values
function greetings(greet){
    greet();
}
greetings(() => {
    console.log("This is the value of function")
});
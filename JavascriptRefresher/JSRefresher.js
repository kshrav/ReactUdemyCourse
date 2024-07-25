import {app, name } from "./app.js";
// import { _unserName } from "./identifiers.js";
import * as util from "./identifiers.js";
console.log("Welcome to JavaScript");

const headingChange = "This will change the heading";
console.log(app);
console.log(name);
console.log(util._unserName);                     
console.log("Name: ", util._unserName);
console.log("Age: ", util.$age, "Phone Number: ",
     util.number10, "Is Correct: ", util.isCorrect, "Default Export value: ", util.default);

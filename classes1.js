console.log("********Classes********");

class JavaScriptClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hi, I'm", this.name, "I'm ", this.age);
    }
}

const js = new JavaScriptClass("Shravya", 20);

js.greet();
console.log(js.name, js.age);


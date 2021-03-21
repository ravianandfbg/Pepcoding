
//Function
function hello(param){
    console.log("Greetings everyone with", param);
    return "return val";
}
hello("Hi");
let rVal = hello("Hola");
console.log(rVal);

// (classical oops)
//car -> blueprint -> new car develop
//object -> class -> object
//prototype oops
//car -> prototype -> new car develop
//car -> object -> object
//object -> key:value
//empty object declare
//captain america
//json -> javascript object notation
//value -> properties
//function -> methods 
let obj = {
    name: "Steve",
    lastname: "Rogers",
    address: {
        city: "Manhatan",
        state: "New York"
    },
    isAvenger: false,
    afe: 35,
    movies: ["civil war", "Avenger", "age of ultron"],
    sayhi: function (param){ //param is a parameter
        console.log("cap say's hi", param);
        return "return blssings";
    }
}

//Loops
for (let itr in obj) {
    console.log("key :", itr, "|value :", obj[itr]);
    console.log("key :", itr, "|value :", obj.itr);
}
console.log(obj.abc);

//get
let key ="address";
console.log("address object", obj[key]);
console.log("address object", obj.address);
console.log("address object", obj.address.state);
console.log("Movie", obj.movies[1]);
console.log("function is inside an object", obj.sayhi("i am a param"));

//set -> update
console.log(obj);
//console.log("```````````````````````````````````````````````````````````````````````")
obj.frieds = ["peter", "thor", "tony"];
obj.age = 36;
obj[key]["state"] ="delhi";

//Delete
delete obj.movies;
//console.log("`````````````````````````````````````````````````````````````````````````````")
console.log(obj);

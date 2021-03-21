//top -> bottom , left -> right
console.log("Hello :)");
//variable declare
let a;
//undefined
//basic data types -> undefined,number, string, boolean, null
//statically typed language
//int a;
 a = 10;
 a = 10.1;
 a = "Hi i'm String";
 a = "Hi i'm also a String";
 a = true;
 console.log("a is ",a);
 a = null;

 //JavaScript -> syntax(Java)(Brenden eich)(Netscape)[10]
 //for,while, if else break, return, class

 let flag = true;
 let num = 24;
 for(let div = 2; div*div <= num; div++){
     if(num % div ==0){
         flag = false;
         break;
     }
 }
 if(flag){
     console.log(num, "is prime");
 }
 else{
     console.log(num, "is not prime");
 }

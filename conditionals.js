//example of an if-else statement
//use comparison and logical operators
var age = 24;
if (age >= 18) {
    console.log("You are permitted to vote,");
} else if(age < 18 || age >= 1) {
    console.log("You are not permitted to vote");
} else {
    console.log("This is impossible");
}

//ternary operator
age >= 18 ? console.log("You are permitted to vote") : console.log("You are not permitted to vote");

//switch statement
switch(age){
    case age >= 18:
        console.log("You are permitted to vote");
        break;
    case age < 18 || age >= 1:
        console.log("You are not permitted to vote");
        break;
    default:
        console.log("This is impossible"); 
        break;     
}
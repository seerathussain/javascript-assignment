var city = prompt(`Enter Your City Name`);
console.log(typeof city)
if(city === `Karachi`);
{
    alert(`Welcome to city of lights`);
}


var per = prompt(`Enter Any Number`);
if(per >= 90 && per <= 100){
    alert(`Brilliants Your A1 Position`);
} else if(per >= 80 && per <= 90){
    alert(`Excellent Your A Position`);
}else if(per >= 70 && per <= 80){
    alert(`Very Very Good! Your B Highest Position`);
}else if(per >= 60 && per <= 70){
    alert(`Very Good Your B Position`);
}else if(per >= 50 && per <= 60){
    alert(`Good Your C Position`);
}else if(per >= 40 && per <= 50){
    alert(`Fear Your E Position`);
}else if(per < 33){
    alert(`You Fail! Please Try Again Later`);
}
else {
        alert("please Enter Valid percentage")
}

var name = prompt(`Enter Name`);
var gender = "male";

if (gender == "male"){
    alert("Hello Mr." + name);
}else{
    alert("Hello most Handsome." + name);
}

var color = prompt(`Enter A Color`);
if(color === "Blue"){
    alert(`Must Stop`);
} else if(color === "Black"){
    alert(`Ready to move`);
}else if(color === "Skyblue"){
    alert(`You Can Go`);
}
else {
        alert("please Enter Valid Traffic Colors")
}

var materialCost = 30000;
var laborCost = 3000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

var number = 10;
var score = 0;
var userInput = prompt("Guess the number");
if(userInput == number ){
score++
console.log(`Your score is ${score}`)
}
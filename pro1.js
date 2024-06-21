var firstName= prompt("First name please: ")
var lastName =prompt("Last name please: ")
var age =prompt("How old are you? ")
var height= prompt("What is your hieght? ")
var petName= prompt("What is your pet name? ")
alert("Thank you so much for the information!")



var FirstLetter = null
var SecondLetter = null
var Agecond = null
var Height = null
var petNamecon = null

// name condition
if (firstName[0] === lastName[0]) {
    FirstLetter = true;} 
else {
    FirstLetter = false;
     }
// second letter condition
if (age > 20 && age < 30){
    Agecond=true;}
else{
    Agecond=false;
    }
// height condition
if (height >= 170){
    Height=true;}
else{
    Height=false;
}
// pet name condition
if (petName[petName.length-1] === 'y'){
    petNamecon=true;}
else{
    petNamecon=false;
}
// final condition
if (FirstLetter && Agecond && Height && petNamecon){
    console.log("Welcome spy");
    }
else{
    console.log("Sorry, you are not a spy");
    }

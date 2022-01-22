let raceNumber = Math.floor(Math.random() * 1000);

//variable indicating wheater a runner registered early or not
const registeredEarly = false;
// age of the runner youngest 
const age = 18

if (age === 18 &&  registeredEarly === true) {
raceNumber += 1000;
}
if  (age > 18 &&  registeredEarly === true) {
console.log ("Your race begins at 9:30 AM and your race number is :" + raceNumber)
} else if ( age > 18 && registeredEarly === false){
  console.log ("Youe reace begins at 11:00 AM and your race number is" + raceNumber)
}else if (age < 18){
  console.log ("Youe reace begins at 12:30 PM and your race number is" + raceNumber)
}else{
   console.log ("Please register first!")
}
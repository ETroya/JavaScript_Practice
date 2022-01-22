let userName = "";

(userName === "Jane")? console.log (`Hello, ${username}`): console.log("Hello!");

const userQuestion = "What will I eat for Dinner"

console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall =  "";


switch (randomNumber){
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall ='It is decidedly so';
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break; 
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break; 
    case 6:
    eightBall = 'Maybe';
    break; 
  case 7:
    eightBall = 'Outlook not so good';
    break;
  case 8:
    eightBall = 'Signs point to yes';
    break; 

}

console.log(`The eight ball answered: ${eightBall}`)
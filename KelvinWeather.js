//forecast for today in Kelvin
const kelvin = 293;

//turning it into Celsius
const celsius = kelvin -273;

//changing to farenheit 
let fahrenheit = celsius * (9 / 5 ) + 32;

//round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log (`The temperature is ${fahrenheit} degrees Fahrenheit`)



let newton = celsius * (33/100)

newton = Math.floor(newton);

console.log ( `This temperature is ${newton} degrees in Newton` )


const num1 = parseFloat(prompt("Enter The Number"));
const num2 = parseFloat(prompt("Enter The Number"));
const num3 = parseFloat(prompt("Enter The Number"));

let largest;

if(num1>num2 && num1>num3){
    largest=num1;
}
else if(num2>num1 && num2>num3){
    largest=num2;
}
else{
    largest=num3;
}
console.log(`${largest} is largest number`)

//to find largest with Math.max

const number1 = parseFloat(prompt("Enter The Number"));
const number2 = parseFloat(prompt("Enter The Number"));
const number3 = parseFloat(prompt("Enter The Number"));

const large = Math.max(number1,number2,number3);

console.log(`large number is ${large}`);



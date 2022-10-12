














//--------------------sum of numbers----------------------
const num1 = parseInt(prompt('Enter The Number'));
const num2 = parseInt(prompt('Enter The Number'));
const sum = num1 + num2 ;
console.log( `The sum of ${num1} and ${num2} is ${sum}`);

function divideByHalf(sum){
    console.log(Math.floor(sum/2));
}
function multiplyBy2(sum){
    console.log(sum*2);

}
function operationOnSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
}
operationOnSum(3,3,divideByHalf);
operationOnSum(5,5,multiplyBy2);
//-------------------------------------------------------
function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;

}
var person1 = new Person("Vivek",76,"male");
console.log(person1);

var person2 = new Person("Courtney",34,"female");
console.log(person2);
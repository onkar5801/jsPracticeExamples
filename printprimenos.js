const lowerNumber= parseInt(prompt("Enter Lower Number"));
const higherNumber = parseInt(prompt("ENter lower number"));

console.log(`prime numbers between ${lowerNumber} and ${higherNumber} are`);
// loop for lower number to higher number 
for(i = lowerNumber ; i<=higherNumber ;i++){
    let flag=0;
//loop from 2 to user input number

for(let j = 2;j<i ;j++){
    if(i%j==0){
        flag=1;
        break;
    }

}
//if no greater than 1 and not divisible by other numbers
if(i > 1 && flag == 0){
    console.log(i);
}

}
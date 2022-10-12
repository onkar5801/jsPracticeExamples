const number =parseInt(prompt("ENter The Positive number"));

let isPrime=true;

if(number===1){
    console.log("the number is neither neither prime nor composite");

}
else if(number>1){
    for(let i =2 ;i<number ; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(`${number} is prime`);

    }
    else{
        console.log(`${number} is not prime`);
    }
}
else{
    console.log("Number is not prime number");
}
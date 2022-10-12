let root1,root2;

let a = prompt("Enter the first number");
let b = prompt("ENter the second number");
let c = prompt("ENter third number");

let discriminant = b*b-4*a*c;
if(discriminant>0){
    root1 = (-b + Math.sqrt(discriminant))/(2*a);
    root2 = (-b + Math.sqrt(discriminant))/(2*a);
    console.log("roots of qudratic eqn are"+ root1 +"and"+root2);
}
else if(discriminant==0){
    root1=root2=-b/(2*a);
    console.log("roots of qudratic eqn are"+ root1 +"and"+root2);
}
else{
    let realPart = (-b/(2*a)).toFixed(2);
    let imagPart =(Math.sqrt(-discriminant)/(2*a)).toFixed(2);
        console.log("roots of qudratic eqn are"+ realPart +"and"+imagPart);}
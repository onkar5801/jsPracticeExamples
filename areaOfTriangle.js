//-------------------area of triangle when all sides known----
const side1 = parseInt(prompt('ENter Side 1'));
const side2 =parseInt(prompt('Enter Side 2'));
const side3 =parseInt(prompt('Enter side 3'));

const s = (side1+side2+side3)/2;

const areaValue = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

console.log("The Area Of Triangle Is :"+ areaValue);
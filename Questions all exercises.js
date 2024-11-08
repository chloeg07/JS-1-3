//INTRODUCTION
//1.
let a = 7;
let b = 8.5;
let c = 9;
console.log(a, b, c);

a = a+b;
b = b+c;

console.log(a, b, c)

//2.
let no = 7;
console.log(no,no+1,no+2)

//3.
let radiuss = 5;
let Pi = 3.14;
let blah = Pi * radiuss * radiuss;
console.log("Area of the circle:", blah);

//4.
let base = 10;
let height = 5;

let area = 0.5 * base * height;
console.log("Area of the triangle:",area);

//5.
let n = 2;
console.log("n:", n);
console.log("n^2:",n ** 2);
console.log("n^3:", n ** 3);
console.log("n^4:", n ** 4);

//6.
//let heightCm = 100;
///let heightFt = heightCm /2.4 /12;
//console.log("Height in feet:", heightInFeet.toFixed(2));

//7.
let radius = 19;
let PI = 3.14;


//Questions JS2
//1.
for(let i = 0; i <=20; i++){
    console.log(i);
}
//2
for(let i = 3; i <=29; i +=2){
    console.log(i);
}
//3 
for(let i = 12; i >= -14;i -=2){
    console.log(i);
}
//4
for (let i = 50; i >= 20; i--){
    if(i % 3 === 0){
        console.log(i);
    }
}
//5
let myNum = 2
if (myNum  > 0) {
    console.log("Your number is positive");
}
else if (myNum  < 0){
    console.log("Your number is negative");
}

//6
let myNumb = 2
if (myNumb % 2 == 0){
    console.log('The number is even');
}
else{
    console.log('The number is odd');
}

//Questions JS3
//Function 1: canDriveCar
function canDriveCar(user, car) {
    return user.age >= 18 || car.engineSize < 1000;
 }
 //Function 2: areAllNumbersEven
 function areAllNumbersEven(numbers) {
    for (let num of numbers) {
        if (num % 2 !== 0) {
            return false; // If any number is odd, return false
            
        }

    }
    return true; // All numbers are even
 }
 //Function 3: getBiggestNumberInArrays
 function getBiggestNumberInArrays(numbers1, numbers2) {
    let max = numbers1[0]; // Start with the first element of numbers1
    //Find the maximum in the first array
    for (let i = 1; i < numbers1.length; i++) {
        if (numbers1[i] > max) {
            max = numbers1[i];
           
        }
    }
    //Find the maximum in the second array
    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] > max) {
            max = numbers2[i];
            
        }
    }
    return max;
 }

//Example Usage
let user = { "name": "Jon Doe", "age": 21 };
let car = { "engineSize": 1200, "name": "Mazda 3" };
console.log(canDriveCar(user, car)); 
let numbers = [2, 4, 6, 8];
console.log(areAllNumbersEven(numbers)); 
let numbers1 = [1, 5, 9];
let numbers2 = [2, 6, 10];
console.log(getBiggestNumberInArrays(numbers1, numbers2)); 
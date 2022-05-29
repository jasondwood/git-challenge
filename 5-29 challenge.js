/*
Mark and John are trying to compare their BMI, which is calculated using the following formula: 

BMI = mass /height ** 2
BMI = mass / (height*height) 

mass in kg height in meters

1. Store Mark and John's mass and height in variables

2. Calculate both their BMIs using the formula

3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weights 78 kg and is 1.68 m tall. John weighs 92 kg and is 1.95 m tall

TEST DATA 2: Mark weighs 95 kg and is 1.88 m tall. John weighs 85 kg and is 1.76 m tall

*/


let markMass1 = 78;
let markHeight1 =  1.68;

let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI = markMass1 / (markHeight1 ** 2);
let johnBMI = johnMass1 / (johnHeight1 * johnHeight1);

let markHigherBMI = markBMI > johnBMI;

if (markHigherBMI == true) {
  console.log('Mark has a BMI of ' + markBMI.toFixed(2) + ' which is higher than John\'s BMI of ' + johnBMI.toFixed(2))
} else if (markBMI == johnBMI) {
  console.log('Mark and John have the same BMI of ' + markBMI.toFixed(2))
} else {
  console.log('John has a BMI of ' + johnBMI.toFixed(2) + ' which is higher than Mark\'s BMI of ' + markBMI.toFixed(2))
}


// Second Data Test
let markMass2 = 95;
let markHeight2 = 1.88;

let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;

if (markHigherBMI2 == true) {
  console.log('Mark has a BMI of ' + markBMI2.toFixed(2) + ' which is higher than John\'s BMI of ' + johnBMI2.toFixed(2))
} else if (markBMI2 == johnBMI2) {
  console.log('Mark and John have the same BMI of ' + markBMI2.toFixed(2))
} else {
  console.log('John has a BMI of ' + johnBMI2.toFixed(2) + ' which is higher than Mark\'s BMI of ' + markBMI2.toFixed(2))
}

// console.log(markBMI2.toFixed(2), johnBMI2.toFixed(2))

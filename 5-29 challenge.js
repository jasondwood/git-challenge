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
let johnMass1 = 92;

let markHeight1 = 1.95;
let johnHeight1 = 1.68;

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
  
  // console.log(markBMI.toFixed(2), johnBMI.toFixed(2))
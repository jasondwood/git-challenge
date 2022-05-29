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


function markBMI(mass, height) {
    let BMI = mass / (height * height);
    return BMI;
  }

  
function johnBMI(mass, height) {
    let BMI = mass / (height * height)
    return BMI;
  }


let mark = markBMI(78,1.95).toFixed(2)
let john = johnBMI(92,1.68).toFixed(2)


if (mark > john) {
    console.log('Mark higher');
} else if (mark == john) {
          console.log('Same BMI');
} else {
  console.log('John Higher');
}


console.log('Mark\'s BMI is ' + mark)
console.log('John\'s BMI is ' + john)

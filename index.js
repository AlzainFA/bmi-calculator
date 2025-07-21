function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
height=parseFloat(height)/100;
weight=parseFloat(weight);

let bmi = weight / (height * height);

alert("your BMI is "+ bmi); 
console.log("your BMI is "+ bmi);


/////////Task 1 

let Checkbmi="";

if (bmi < 18.5){
  Checkbmi = Underweight;}
else if (bmi >= 18.5 && bmi <= 24.9) {
  Checkbmi = "Healthy Weight"; }
 else if (bmi >= 25.0 && bmi <= 29.9) {
  Checkbmi= "Overweight";}
 else {
  Checkbmi = "Obesity";}


alert("your BMI state is "+ Checkbmi); 
console.log("your BMI state is "+ Checkbmi);
 
/////////Task 2

let CheckAge=parseInt(age);

if (bmi < 18.5) {
  CheckAge = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  CheckAge = "Healthy Weight for your age (" + age + ")";
} else if (bmi >= 25.0 && bmi <= 29.9) {
  bmiWithAge = "Overweight";
} else {
  CheckAge = "Obesity";
}


alert("your BMI state is "+ CheckAge); 
console.log("your BMI state is "+ CheckAge);
}
/////////Task 3

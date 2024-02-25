// chapter 9 - 11

// Q1
// var city = prompt("enter city name");

// if (city === "Karachi") {
//   document.write("Welcome to the  of lights");
// } else {
// }

// Q2
// var gender = prompt("enter gender");

// if (gender === "male") {
//   document.write("Good Morning Sir");
// } else {
//   document.write("Good Morning Maam");
// }

// Q3;
// var trafficColor = prompt("enter traffic color");

// if (trafficColor === "Red") {
//   document.write("Must Stop");
// } else if (trafficColor === "Yellow") {
//   document.write("Ready to Move");
// } else {
//   document.write("Move Now");
// }

// Q4
// var remFuel = +prompt("enter remaining fuel");

// if (remFuel === 0.25) {
//   document.write("Please refill the fuel in your car");
// } else {
// }

// Q6

// var obtMarks = +prompt("Enter your obtained marks");
// var totalMarks = +prompt("Enter your Total  marks");
// var per = (obtMarks / totalMarks) * 100;

// if (per >= 80) {
//   document.write("<h1>Marks Sheet </h1> <br/><br/>");
//   document.write("Total Marks " + totalMarks + "<br/>");
//   document.write("Obtained Marks " + obtMarks + "<br/>");
//   document.write("Percentage " + per + " % " + "<br/>");
//   document.write("Grade: " + "A-one" + "<br/>");
//   document.write("Excellent" + "<br>");
// } else if (per < 80 && per >= 70) {
//   document.write("<h1>Marks Sheet </h1> <br/><br/>");
//   document.write("Total Marks " + totalMarks + "<br/>");
//   document.write("Obtained Marks " + obtMarks + "<br/>");
//   document.write("Percentage " + per + " % " + "<br/>");
//   document.write("Grade: " + "A" + "<br/>");
//   document.write("Good" + "<br>");
// } else if (per < 70 && per >= 60) {
//   document.write("<h1>Marks Sheet </h1> <br/><br/>");
//   document.write("Total Marks " + totalMarks + "<br/>");
//   document.write("Obtained Marks " + obtMarks + "<br/>");
//   document.write("Percentage " + per + " % " + "<br/>");
//   document.write("Grade: " + "B" + "<br/>");
//   document.write("You need to improve" + "<br>");
// } else if (per < 60) {
//   document.write("<h1>Marks Sheet </h1> <br/><br/>");
//   document.write("Total Marks " + totalMarks + "<br/>");
//   document.write("Obtained Marks " + obtMarks + "<br/>");
//   document.write("Percentage " + per + " % " + "<br/>");
//   document.write("Grade: " + "Fail" + "<br/>");
//   document.write("Sorry" + "<br>");
// } else {
//   document.write("<h1>Not a valid Percentage </h1> <br/><br/>");
// }

// Q7

// var secNo = Math.round(Math.random() * 10);
// console.log(secNo);

// var guessNo = +prompt("enter your number");

// if (guessNo === secNo) {
//   document.write("Bingo you are correct");
// } else if (guessNo === secNo + 1) {
//   document.write("Close enough");
// } else {
//   document.write("wrong no");
// }

//Q8

// var divNo = +prompt("enter your no ");

// if (divNo % 3 === 0) {
//   document.write("No is divisible by 3 ");
// } else {
//   document.write("No is not divisible by 3 ");
// }

// Q9
// var divNo = +prompt("enter your no ");

// if (divNo % 2 === 0) {
//   document.write("No is even ");
// } else {
//   document.write("No is odd ");
// }

// Q10

// var temp = +prompt("Enter temprature");

// if (temp >= 40) {
//   document.write("it is too hot outside");
// } else if (temp < 40 && temp >= 30) {
//   document.write("the weather is normal");
// } else if (temp < 30 && temp >= 20) {
//   document.write("weather is cool");
// } else if (temp < 20 && temp >= 10) {
//   document.write("it is too cool");
// }

// Q11

// var num1 = +prompt("enter first number");
// var num2 = +prompt("enter second number");
// var opr = prompt("select operator");
// var calc;
// if (opr === "+") {
//   calc = num1 + num2;
//   document.write("the result is " + calc);
// } else if (opr === "-") {
//   calc = num1 - num2;
//   document.write("the result is " + calc);
// } else if (opr === "*") {
//   calc = num1 * num2;
//   document.write("the result is " + calc);
// } else if (opr === "/") {
//   calc = num1 / num2;
//   document.write("the result is " + calc);
// } else if (opr === "%") {
//   calc = num1 % num2;
//   document.write("the result is " + calc);
// } else {
//   document.write("please select valid operator");
// }

//---------------------------------- CHAPTER 12 TO 13  ---------------------------------------

// Q2
// var num1 = +prompt("enter first no ");
// var num2 = +prompt("enter second no ");

// if (num1 > num2) {
//   document.write("first no is greater");
// } else if (num2 > num1) {
//   document.write("second no is greater");
// } else if ((num2 = num1)) {
//   document.write("both are equal");
// }

//Q3

// var entNum = prompt("please enter your number");

// if (entNum > 0) {
//   document.write("positive number");
// }

// else if (entNum < 0) {
//   document.write("negative number");
// }

// else {document.write('number is 0 ')}

// Q4;

// var strChr = prompt("enter 1 character ");

// if (
//   strChr.toUpperCase() === "A" ||
//   strChr.toUpperCase() === "E" ||
//   strChr.toUpperCase() === "I" ||
//   strChr.toUpperCase() === "O" ||
//   strChr.toUpperCase() === "U"
// ) {
//   document.write("Letter is vowel");
// } else {
//   document.write("letter is not vowel");
// }

// Q5

// var pass = "Pass1";
// var userPass = prompt("enter your password");

// if (userPass.length === 0) {
//   document.write("Please enter your password");
// } else {
//   if (pass === userPass) {
//     document.write(" Password is correct");
//   } else {
//     document.write("password is wrong");
//   }
// }

// Q7

// var d = new Date();
// var h;
// console.log(d.getHourse);

// var userData = prompt("enter your hourse in 24 hrs date format like 1900");

// if (userData.length === 4) {
//   if (userData >= "2100" && userData < "2359") {
//     document.write("good night");
//   } else if (userData >= "1700" && userData < "2100") {
//     document.write("good evening");
//   } else if (userData >= "1200" && userData < "1700") {
//     document.write("good afternoon");
//   } else if (userData >= "0000" && userData < "1200") {
//     document.write("good morning");
//   }
// } else {
//   document.write("enter valid format");
// }

// ------------------------------------CHAPTER 10 (IF STATEMENTS)

// Q1
// var city = "karachi";
// if (city === "Karachi") {
//   console.log("the city of lights");
// }

// Q2

// var x = 1;
// var y = 1;
// if (x === y) {
//   var z = prompt("enter value for z");
//   console.log(z);
// }

//Q3
// zipCode = "10010";
// var zp = prompt("enter zip code");
// if (zp === zipCode) {
//   alert("karachi");
// } else {
//   alert("enter correct city");
// }

// Q4

// var num = 1;

// if (typeof num === "number") {
//   num = 3;
//   console.log(num);
// } else {
//   console.log("not a num");
// }

// ------------------------------------CHAPTER 11 (COMPARISON OPERATORS)

// q1
// var num1 = 1;
// var num2 = 2;

// if (num1 != num2) {
// }

//Q2

// var num1 = 1;
// var num2 = 2;

// if (num1 > num2) {
// }

//Q3

// if (num1 != 4) {
//   num1 = 9;
// }

// Q4

// if (num1 != 4) {
//   alert("congrats");
// }

// Q5;
// var myName = "Abdul Rehman";
// var yourName = prompt("enter your first name");

// if (yourName != myName) {
//   alert("No match");
// }

// ------------------------------------CHAPTER 12 if else else if

// q1

// var varNum = 9;
// var varNum2 = 1;

// if (varNum2 > varNum) {
//   alert("value is greater");
// } else {
//   alert("value is smaller");
// }

// Q2

// var obtMarks = +prompt("enter your marks");
// var totmarks = +prompt("100");
// var per = (obtMarks / totmarks) * 100;

// if (per >= 80) {
//   console.log("Your grade is A and percentage is " + per + "%");
// } else if (per < 80 && per >= 70) {
//   console.log("Your grade is B and percentage is " + per + "%");
// } else if (per < 70 && per >= 50) {
//   console.log("Your grade is C and percentage is " + per + "%");
// } else if (per < 50) {
//   console.log("Your are fail and percentage is  " + per + "%");
// } else {
//   console.log("enter valid marks");
// }

// Q3

// var a = 10;
// if (a === 10) {
//   alert("a === 10");
// } else {
//   alert("the correct value of a is " + a);
// }

// Q4

// var cityEnt = prompt("enter your city");
// if (cityEnt.toUpperCase() === "KARACHI") {
//   alert("Acknowledge it is karachi");
// } else if (cityEnt.toUpperCase() === "LAHORE") {
//   alert("Acknowledge it is lahore");
// } else {
//   alert("it is different city");
// }

// ------------------------------------CHAPTER 13 Testing set of conditions

// Q1
// if (a === b && c === d) {
// }

// Q2
// if (a === b && c !== d) {
// }

// Q3
// var name2 = "Hamza";
// var age = 40;
// if (
//   (name2.toUpperCase() === "HAMZA" || name2.toUpperCase() === "ARSLAN") &&
//   age < 60
// ) {
//   console.log("correct");
// }

// Q4
// var value1 = 3;
// var value2 = 5;

// if (value1 > value2 || value1 < value2) {
//   alert("correct");
// } else {
//   alert("both are equal");
// }

// Q5
// var firstName = "Abdul Rehman";
// var lastName = "Syed";

// var f1 = prompt("enter first name");
// var f2 = prompt("enter last name");

// if (firstName === f1 && lastName === f2) {
//   alert("correct");
// } else {
//   alert("not correct");
// }

// ------------------------------------CHAPTER 14 if statements nested

// Q1
// var pass = prompt("enter password");

// if (pass.length > 0) {
//   if (pass.length <= 5) {
//     alert("password must be of 6 characters");
//   } else {
//     alert("ok");
//   }
// }

// Q4

// var number1 = 4;
// var number2 = 4;

// if (number1 === number2) {
//   alert("both are equal");
// } else {
//   if (number1 > number2) {
//     alert("number1 is greater then number2");
//   } else {
//     alert("number 2 is greater than number 1 ");
//   }
// }

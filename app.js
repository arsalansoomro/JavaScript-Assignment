// CH#1
// Q#1
// alert("Welcome to JavaScript");

// CH#2
// Q#1

// var username;
//Q#2
// var myName= "Urwah";
//Q#3
// var message= "Hello World!";
// alert(message);
//Q#4
// var stuName= "Jhone Doe";
// var stuage= "15 years old";
// var studeg= "Certified Mobile Application Development";

// alert(stuName);
// alert(stuage);
// alert(studeg);
//Q#5
// var email= "example@example.com";
// alert("My Email Address is "+ email );
//Q#6
// var book= "A smarter way to learn JavaScript.";
// alert("I am trying to learn from the Book"+ " "+ book);
// Q#7
// document.write("Yah! I can write HTML content through JavaScript");
//Q#8
// var store= "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(store);

//CH#3
//Q#1
// var age= "15 years old";
// alert("I am "+ age);
//Q#2
// var visits = 1;
// document.write("You have visited this site " + visits + " times");
//Q#3
// var birthYear = 2009;
// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof(birthYear));
//Q#4
// var visitorname= "John Doe";
// var producttitle= "T-shirt(s)";
// var quantity= "5";
// document.write(visitorname + " " + "ordered" + " " + quantity + producttitle + " " + "on XYZ Clothing store");


//CH#4
//Q#1
// var x, y, z;
//Q#2
// legal name
// var name, fullName, Username, Number, email;
// illegal name
// var $my_1stVariable, for, if, 123, 1stuser;
//Q#3
// document.write("Variable names can only contain letters, numbers, dollar signs ($), and underscores (_). For example $my_1stVariable" + "</br>");
// document.write("Variables must begin with a letter, dollar sign ($), or underscore (_). For example $name, _name or name" + "</br>");
// document.write("Variable names are case sensitive" + "</br>");
// document.write("Variable names should not be JS keywords / reserved words");


//CH#5
//Q#1
// var num1= +prompt("Type Your First Number:");
// var num2= +prompt("Type Your Second Number");
// var num3= num1+num2;
//Q#2

// var num4= num1-num2;
// var num5= num1*num2;
// var num6= num1/num2;
// var num7= num1%num2;

// document.write("Addition of "+ " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + num3 + "</br>");
// document.write("Subtraction of "+ " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + num4 + "</br>" );
// document.write("Multiplication of "+ " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + num5 + "</br>" );
// document.write("Division of "+ " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + num6 + "</br>" );
// document.write("Modulus of "+ " " + num1 + " " + "and" + " " + num2 + " " + "is" + " " + num7 + "</br>" );

//Q#3
// var myVar;
// document.write("Value after variable declaration is: " + myVar + "<br>");
// myVar = 5;
// document.write("Initial value: " + myVar + "<br>");
// myVar++;
// document.write("Value after increment is: " + myVar + "<br>");
// myVar = myVar + 7;
// document.write("Value after addition is: " + myVar + "<br>");
// myVar--;
// document.write("Value after decrement is: " + myVar + "<br>");
// var remainder = myVar % 3;
// document.write("The remainder is : " + remainder + "<br>");

//Q#4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

//Q#5
// var num= +prompt("Type Your Number:");
// var num1= +prompt("Type How many times it should count");
// document.write("<h3>Table of " + num + "</h3>");
// for(var i=1; i<=num1; i++){
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

//Q#6
// var celsius = 25;
// var fahrenheitFromC = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + fahrenheitFromC + "°F<br>");
// var fahrenheit = 77;
// var celsiusFromF = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "°F is " + celsiusFromF + "°C<br>");

//Q#7
// var item1price = 650;
// var item2price = 100;
// var item1quan = 3;
// var item2quan = 7;
// var ship = 100;
// var a = item1price * item1quan;
// var b = item2price * item2quan;
// var final = a + b + ship;
 

// document.write("<h3>Shopping Cart</h3>");
// document.write("Price of item 1 is " + item1price + "<br>");
// document.write("Quantity of item 1 is " + item1quan + "<br>");
// document.write("Price of item 2 is " + item2price + "<br>");
// document.write("Quantity of item 2 is " + item2quan + "<br>");
// document.write("Shipping Charges " + ship + "<br><br>");

// document.write("<strong>Total Cost of your order is " + final + "</strong>");

//Q#8
// var totalMarks= 980;
// var MarksObt= 804;
// var percentage= (totalMarks / MarksObt) *100;

// document.write("<h3>Marks Sheet</h3>");

// document.write("Total Marks:" + totalMarks + "</br>");
// document.write("Obtained Marks:" + MarksObt + "</br>");
// document.write("Percentage:" + percentage + "%</br>");

//Q#9
// var dollar= 10;
// var riyals= 25;

// var totalPKR = (dollar * 104.80) + (riyals * 28);
// document.write("<h3>Currency in PKR</h3>");
// document.write("Total Currency in PKR: " + totalPKR + "<br>");

//Q#10

// var num = +prompt("Type Your Number:");

// var num1 = (num + 5) * 10 / 2;
// document.write(num1);

//Q#11

// var currentYear= +prompt("Type Current Year:");
// var birthYear= +prompt("Type Your Birth Year:");
// var age= currentYear - birthYear;

// document.write("<h3>Age Calculator</h3>");

// document.write("Current Year:" + currentYear + "</br>");
// document.write("Birth Year:" + birthYear + "</br>");
// document.write("Your Age:" + age + "</br>");

//Q#12
// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;

// document.write("<h3>The Geometrizer</h3>");

// document.write("Radius of a circle " + radius + "<br>");
// document.write("The circumference is " + circumference + "<br>");
// var area = pi * radius * radius;
// document.write("The area is " + area + "<br>");

//Q#13

// var snack= prompt("Type Your Favourite Snack!");
// var curage= +prompt("Type Your Current Age!");
// var maxage= +prompt("Type Your Maximum Age!");
// var estamo= +prompt("Type Amount of Snack Per Day!");
// var totalSnacks = (maxage - curage) * 365 * estamo;

// document.write("<h3>The Lifetime Supply Calculator</h3>");
// document.write("Favourite Snack " + snack + "<br>");    
// document.write("Current age " + curage + "<br>");   
// document.write("Estimated Maximum Age " + maxage + "<br>");    
// document.write("Amount of snacks per day " + estamo + "<br>");  
  
// document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxage + "<br>");


//CH#6-9
//Q#1
// var a = 10;

// document.write("Result:<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("...........................................<br><br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

//Q#2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// document.write("a is: " + a + "<br>");       
// document.write("b is: " + b + "<br>");       
// document.write("result is: " + result + "<br>"); 

//Q#3
// var userName = prompt("Please enter your name:");
// document.write("Hello, " + userName + "! Welcome to our website.<br>");

//Q#5

// var num = prompt("Enter a number to display its multiplication table (Defaults to 5):");


// if (num === "" || num === null) {
//     num = 5;
// } else {
//     num = +num; 
// }

// document.write("<h3>Table of " + num + "</h3>");
// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }

//Q#6
// var sub1 = prompt("Enter first subject name:");
// var sub2 = prompt("Enter second subject name:");
// var sub3 = prompt("Enter third subject name:");

// var marks1 = +prompt("Enter obtained marks for " + sub1 + ":");
// var marks2 = +prompt("Enter obtained marks for " + sub2 + ":");
// var marks3 = +prompt("Enter obtained marks for " + sub3 + ":");

// // b) Total marks per subject
// var totalPerSubject = 100;

// // e) Calculations
// var percentage1 = (marks1 / totalPerSubject) * 100;
// var percentage2 = (marks2 / totalPerSubject) * 100;
// var percentage3 = (marks3 / totalPerSubject) * 100;

// var grandTotalMarks = totalPerSubject * 3;
// var totalObtainedMarks = marks1 + marks2 + marks3;
// var totalPercentage = (totalObtainedMarks / grandTotalMarks) * 100;

// // Display the result in an HTML Table
// document.write("<table border='1' cellpadding='5' cellspacing='0'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write("<tr><td>" + sub1 + "</td><td>" + totalPerSubject + "</td><td>" + marks1 + "</td><td>" + percentage1 + "%</td></tr>");
// document.write("<tr><td>" + sub2 + "</td><td>" + totalPerSubject + "</td><td>" + marks2 + "</td><td>" + percentage2 + "%</td></tr>");
// document.write("<tr><td>" + sub3 + "</td><td>" + totalPerSubject + "</td><td>" + marks3 + "</td><td>" + percentage3 + "%</td></tr>");
// document.write("<tr><td><strong>Total</strong></td><td><strong>" + grandTotalMarks + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + totalPercentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");


//CH# 9-11
//Q#1
// var city = prompt("Enter your city name:");

// if (city === "Karachi" || city === "karachi") {
//     alert("Welcome to city of lights");
// }

//Q#2
// var gender = prompt("Enter your gender (male/female):");

// if (gender === "male" || gender === "Male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female" || gender === "Female") {
//     alert("Good Morning Ma'am.");
// }

//Q#3
// var color = prompt("Enter traffic signal color (Red/Yellow/Green):");

// if (color === "Red" || color === "red") {
//     alert("Must Stop");
// } else if (color === "Yellow" || color === "yellow") {
//     alert("Ready to move");
// } else if (color === "Green" || color === "green") {
//     alert("Move now");
// }

//Q#4
// var fuel = +prompt("Enter remaining fuel in your car (in litres):");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

//Q#5
// a. Will display alert (a becomes 5 before comparison)
// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }

// // b. Will NOT display alert (b is checked as 82, then becomes 83)
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// // c. Condition 2 and Condition 4 will display alerts
// var c = 12;
// if (c++ === 13){ alert("condition 1 is true"); } // False (c is 12 here, then becomes 13)
// if (c === 13){ alert("condition 2 is true"); }   // True (c is now 13)
// if (++c < 14){ alert("condition 3 is true"); }   // False (c becomes 14, 14 is not < 14)
// if (c === 14){ alert("condition 4 is true"); }   // True (c is 14)

// // d. Will display alert
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// // e. Will display alert("True")
// if (true){ alert("True"); }
// if (false){ alert("False"); }

// // f. Will display alert (alphabetically "car" comes before "cat")
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }


//Q#6
// var marks1 = +prompt("Enter marks for subject 1:");
// var marks2 = +prompt("Enter marks for subject 2:");
// var marks3 = +prompt("Enter marks for subject 3:");
// var totalMarks = +prompt("Enter total marks for all 3 subjects:");

// var totalObtained = marks1 + marks2 + marks3;
// var percentage = (totalObtained / totalMarks) * 100;

// var grade = "";
// var remarks = "";

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// document.write("<h2>Marks Sheet</h2>");
// document.write("Total marks : " + totalMarks + "<br>");
// document.write("Marks obtained : " + totalObtained + "<br>");
// document.write("Percentage : " + percentage + "%<br>");
// document.write("Grade : " + grade + "<br>");
// document.write("Remarks : " + remarks + "<br>");


//Q#7

// var secretnumber= Math.floor(Math.random()*10)+1;
// var userGuess = Number(prompt("Guess Any Number Between 1 to 10!"));

// document.write("Secret Number:" + secretnumber + "</br>");
// document.write("Your Guess:" + userGuess + "</br>");

// if(userGuess === secretnumber){
//     alert("Bingo! Correct answer");
// }else if (userGuess + 1 === secretnumber || userGuess - 1 === secretNum) {
//     alert("Close enough to the correct answer");
// }

//Q#8

// var checkNum = +prompt("Enter a number to check if it is divisible by 3:");

// if (checkNum % 3 === 0) {
//     alert("The number is divisible by 3");
// }else{
//     alert("The number is not divisible by 3");
// }

//Q#9

// var inputNum = +prompt("Enter a number to check if it is Even or Odd:");

// if (inputNum % 2 === 0) {
//     alert("It is an even number");
// } else {
//     alert("It is an odd number");
// }

//Q#10
// var temp = +prompt("Enter today's temperature:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }

//Q#11


// var num1= +prompt("Type 1st Number!");
// var num2= +prompt("Type 2nd Number!");
// var opt= prompt("Type Your Operator (+, -, *, /, %):");

// var result;

// if(opt === "*"){
//     result = num1 * num2;
// }else if (opt === "/"){
//     result = num1 / num2;
// }else if (opt === "+"){
//     result = num1 + num2;
// }else if (opt === "-"){
//     result = num1 - num2;
// }else if (opt === "%") {
//     result = num1 % num2;
// } else {
//     result = "Invalid operation!";
// }

// alert("Result:" + result);
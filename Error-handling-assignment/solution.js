// Type Conversion -:

/*
Write a program called convertToNumber that takes a String as an arguments and return the equivalant
number. If the string cannot be converted to a number, function should returning the string "Invalid Number"
Use error handling in javascript to acheive this output 
*/

function convertToNumber(str) {
  try {
    const num = Number(str);
    if (Number.isNaN(num)) {
      throw new Error("Invalid Number");
    }
    return num;
  } catch (err) {
    return err.message;
  }
}

console.log(convertToNumber("akdjkldsf")); // Invalid Number
console.log(convertToNumber("12121")); // 12121
console.log(convertToNumber(123456)); //  123456

//---------------------------------------------------------------------------------------------------------

// 2. Building Robust Functions in JavaScript

/* Create a function called getPerson that takes an object as a parameter representing a 
person's name and age. The function should return the person's name and age as a string in
the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with
the properties "name" and "age", the function should throw an error with the message
"Invalid parameter type". Use try-catch to handle this error and return the error message
if it occurs.
*/

function getPerson(PersonDetail) {
  try {
    if (
      typeof PersonDetail !== "object" ||
      !PersonDetail.Name ||
      !PersonDetail.Age
    ) {
      throw new Error("please enter correct details of a person");
    } else {
      return `Name : ${PersonDetail.Name} , Age : ${PersonDetail.Age}`;
    }
  } catch (error) {
    return error.message;
  }
}

var PersonDetail = {
  Name: "sourabh sharma",
  Age: 21,
};
console.log(getPerson(PersonDetail)); // Name : sourabh sharma , Age : 21

// var PersonDetail = {
//     Name : "shivam"
// }
// console.log(getPerson(PersonDetail));//please enter correct details of a person

// var PersonDetail = {
//     age : 22
// }
// console.log(getPerson(PersonDetail));//please enter correct details of a person

//---------------------------------------------------------------------------------------------------------------

// Car Description Class -:

/*
Create a class called Car with three properties: company, model, and year. The class should
have a method called getDescription that returns a string in the format "This is a <year>
<company> <model>". Instantiate an instance of the Car class and call the getDescription
 method.
*/

class Car {
  constructor(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
  }

  getDiscription() {
    console.log(`This is a ${this.year} , ${this.company} , ${this.model}`);
  }
}

const myCar = new Car("Tata", "XUV700", 2022);
myCar.getDiscription(); // Output => This is a 2022 , Tata , XUV700

//-------------------------------------------------------------------------------------------------

// Employee Class Challenge.

/* Create a class called Employee with three properties: name, position, and salary. The class 
should have a method called getSalary that returns the employee's salary. Instantiate an 
instance of the Employee class and call the getSalary method. */

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getSalory() {
    console.log(`${this.salary} Lakh PerAnnum`);
  }
}

const getEmployeeSalory = new Employee(
  "Sourabh Sharma",
  "FullStack-developer",
  1500000
);
getEmployeeSalory.getSalory(); // Output -: 1500000 Lakh PerAnnum

//---------------------------------------------------------------------------------------------------

// Implementing a Person Class with Default Values
/*
Create a class called Person with two properties: name and age. The class should have a
 method called getDetails that returns a string in the format "Name: <name>, Age: <age>". 
 Use default parameters in the constructor to set the values of name and age to "Unknown" 
 and 0 if they are not provided.
*/

class Person {
  constructor(name = "undefined", age = "0") {
    // this is defalut parameter
    this.name = name;
    this.age = age;
  }

  getDetail() {
    return `Name : ${this.name} , Age : ${this.age}`;
  }
}

const person1 = new Person("sourabh", 22);
console.log(person1.getDetail()); // Output => Name : sourabh , Age : 22

const person2 = new Person();
console.log(person2.getDetail()); // Output => Name : undefined , Age : 0

//----------------------------------------------------------------------------------------------

// Using Static Method to Add Two Numbers with Calculator Class -:

/*
Create a class called Calculator with a static method called add. The add method should take
two numbers as arguments and return their sum. Instantiate the Calculator class and call the
add method.
*/

class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}
const result = Calculator.add(1848, 12);
console.log(result); // Output => 1860

//------------------------------------------------------------------------------------------------------

//  Password Checker

/*
Create a class called User with properties username and password. Implement a getter method 
for password that returns the password with all characters replaced by asterisks. Implement a
setter method for password that checks if the new password is at least 8 characters long and
contains at least one number and one uppercase letter. If the password is valid, set the 
new password. If not, log an error message.

Expected output:
const user = new User("johndoe", "Password123");
console.log(user.getPassword()); // ***********

user.setPassword("myPassword"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.

user.setPassword("MyPassword"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.

user.setPassword("Mypassword123");
console.log(user.getPassword()); // *************

*/

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getPassword(){
    return this.password.replace(/./g ,"*")
  }

  setPassoword(newPassowrd) {
    let containsNumber = false;
    let containsUpperCase = false;

    for (let i = 0; i < newPassowrd.length; i++) {
      const char = newPassowrd.charAt(i);
      if (!isNaN(char)) {
        containsNumber = true;
      } else if (char === char.toUpperCase()) {
        containsUpperCase = true;
      }
    }

    if (newPassowrd.length >= 8 && containsNumber && containsUpperCase) {
      this.password = newPassowrd;
    } else {
      console.log(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }
}

const user = new User("johdey" , "Password123")
console.log(user.getPassword()); // ***********
user.setPassoword("2121212"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.setPassoword("asdfjkhdkjas"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.setPassoword("Sourabh212121");
console.log(user.getPassword()) // *********


//------------------------------------------------------------------------------------------------------------

// 8. Adding a Method to a Prototype.

/* 
Create a prototype object called Student with a property name. Add a method called printDetails to the
prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object 
with the name "Mithun" and call the printDetails method. 
*/

// Expected Output


function Student(name){
  this.name = name ;
}

Student.prototype.printDetail = function(){
  console.log(`Hello, my name is ${this.name}`)
}

const StudentDetail = new Student("Sourabh");
StudentDetail.printDetail(); // Output => Hello, my name is Sourabh

//------------------------------------------------------------------------------------------------------------

//9. Check the presence using closures.

/*
Create a numberChecker function that takes an array of numbers as an argument and returns a function. 
The returned function should take another number as an argument and return true if the number is in the 
array, and false otherwise.
*/

function numberChecker(number){
  return function(num){
    return number.includes(num);
  }
}

const arr = [1,2,3,4,5,6,7,8,9];
const checknum = numberChecker(arr);
console.log(checknum(2)); // true
console.log(checknum(12)); // false


//-------------------------------------------------------------------------------------------------------------


/*

10. Filter by Category.

Write a function that takes an array of products and returns a function that filters the array by a given 
product category. The function must filter an eCommerce products array by a specific category. The closure
filters products using the filter() method. Finally, it returns a new array containing only the products 
with the same category as the input.


*/

function filterByCategory(products){
  return function(category){
    return products.filter(function(products){
return products.category === category;
    })
  }
}

let products = [
  {name : "shirts" , category : "cloths"},
  {name : "paints" , category : "cloths"},
  {name : "Hats" , category : "accessories"},
  {name : "sunglasses" , category : "accessories"},
]

let clothingProduct = filterByCategory(products)("cloths");
console.log(clothingProduct);

// Expected output
/*
[
  { name: 'shits', category: 'cloths' },
  { name: 'paints', category: 'cloths' }
]

*/


// this all questions contain conceptual points which will be help you in 
// in the web developement while using javascript 

// Note : you should have to be knowledge about that questions before moving to the next
//----------------------------------------------------------------------------------------------------------------


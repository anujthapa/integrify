console.log("exercise 1---------------------------");

console.log("variables");


console.log("1.Declare variables to store your first name, last name, marital status, country and age in multiple lines");

let fName="anuj";
let lName="thapa";
let maritialStatus="married";
let country="Nepal";
let age=25;
console.log("                                   ");
console.log("b.Declare variables to store your first name, last name,  marital status, country and age in a single line");

let fname,lname,maritialstatus,Country,Age;
console.log("                                   ");
console.log("c.Declare two variables myAge and yourAge and assign them initial values and log to browser console.");
 let myAge=25;
 let yourAge=30;

 console.log(`I am ${myAge} years old`);
 console.log(`You are ${yourAge} years old`);
 console.log("                                   ");
 console.log("2.datatypes");
 console.log("                                   ");

 console.log("The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.");
 
 console.log("");
 console.log(typeof(fName));
 console.log(typeof(lName));
 console.log(typeof(maritialStatus));
 console.log(typeof(country));
 console.log(typeof(age));
 console.log(typeof(myAge));
 console.log(typeof(yourAge));
 

 console.log("");
 console.log("3.String");
 console.log();
 console.log("Declare a variable name company and assign it to an initial value “Integrify Academy”.");
 let company = "Integrify Acadamy";
 console.log("Print the string  on the browser console using console.log()");
 console.log( );
console.log(company);


console.log("Print the length of the string  on the browser console using console.log()");
console.log(company.length);



console.log("Change all the string to capital letters using toUpperCase() method");
console.log(company.toUpperCase());


console.log("Change all the string to small letters using toLowerCase() method");
console.log(company.toLowerCase());

console.log("Cut(slice) out the first word of the string using slice, substr() or substring() method");
console.log("using slice : " + company.slice(0,9));
console.log("using substring : "+ company.substring(0,9));


console.log("Check if the string contains a word Academy using includes() method");
console.log("Includes I: "+ company.includes("I"));

console.log("Split the string into array using split() method");
let newCompany = company.split('');
console.log(newCompany);

console.log("Split the string Integrify Academy at the space using split() method");
let splitCompany = company.split(' ');
console.log(splitCompany);

console.log("“Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.");
let companyName =' Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon '
let splitUsingComma = companyName.split(',');
console.log(" splitUsingComma : " + splitUsingComma);

console.log("Change Integrify Academy  to Microsoft Academy using replace() method.");
let replacedCompany = company.replace('Integrify','Microsoft');
console.log(replacedCompany);

console.log("What is the index of A in ‘Integrify Academy’ string use charAt() method.");
console.log(company.charAt(10));

console.log("Use indexOf to determine the position of  the first occurrence of e in Integrify Academy");
console.log(company.charCodeAt(10));

console.log("Use lastIndexOf to determine the position of the last occurrence of e in Integrify Academy");
console.log(company.lastIndexOf('e'));

console.log("Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g “  Integrify Academy   ”. ");
let trimCompany=' Integrify Academy   '
console.log(trimCompany.trim());

console.log("Use startsWith() method with the string Integrify Academy make the result true");
console.log(company.startsWith('I'));

console.log("Use endsWith() method with the string Integrify Academy make the result true");
console.log(company.endsWith('o'));

console.log("Use  match() method to find all the a’s in Integrify Academy");
console.log(company.match('a'));

console.log("Use concat() and merge ‘Integrify’ and ‘Academy’ to a single string, ‘Integrify Academy’");
companyFname='Integrify';
comapnyLname ='Acadamy'
console.log(companyFname.concat(comapnyLname));

console.log("Use repeat() method to print Integrify Academy 5 times");
console.log(company.repeat(5));

console.log("4.Boolean");
console.log(" Boolean value is either true or false. ");
console.log("Write three JavaScript statement which provide truthy value. ");

let myString ="have a nice weekend";
console.log(myString.includes('h'));
console.log(myString.endsWith('d'));

console.log("Arithmetic Operator");

let operandOne = 4;
let operandTwo = 3;
console.log("4 + 3 : " + operandOne + operandTwo);
console.log("4 - 3 : " + operandOne - operandTwo);
console.log("4 * 3: " +operandOne * operandTwo);
console.log("4 / 3: " +operandOne / operandTwo);
console.log("4 % 3: " +operandOne % operandTwo);

console.log("Comparison Operators");

console.log(operandOne>operandTwo);
console.log(operandOne>=operandTwo);
console.log(operandOne<operandTwo);
console.log(operandOne<=operandTwo);
console.log(operandOne==operandOne);
console.log(operandOne===operandOne);
console.log(operandOne!=operandOne);
console.log(operandOne!==operandOne);
console.log(operandOne!='operandOne');
console.log(operandOne=='operandOne');
console.log(operandOne==='operandOne');

console.log("Logical operators");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));


console.log("Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.");
/* let userAge = prompt("enter your age"); 
let canDriveAge = 18;
if(userAge>=canDriveAge){
    console.log("You can drive a car"); 
}
else{
    console.log(`You can drive car after ${canDriveAge-userAge} year old`); 
} */

console.log(" Compare the values of myAge and yourAge using if … else. Based on the comparison log   to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.");

function ageDiffrence(){
    let mAge = prompt("Enter your age");
    let yAge = prompt("Enter your friend age");
    let ageDIff = mAge-yAge;
    return ageDIff;
}


console.log("If a is greater than b return a is greater than b else a is less than b.");
let a = 4;
let b = 3;
if(a>b){
    console.log(`a is greater than b by ${a-b}` );
    
}
else if(a<b){
    console.log(`b is greater than a by ${b-a}` );
}
else{
    console.log("a and b are same number");
    
}


console.log("Array ");
console.log("Declare an array  variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.");
let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' ,'Amazon']

console.log("Print the array using console.log()");
console.log(companies);

console.log(" Print the number of companies in the array");
console.log(`The length of companies array is ${companies.length}`);

console.log("Print out each company");
 companies.forEach((element)=>{
     console.log(element);
     })

console.log("Capitalize each company and print them out");

companies.map((member)=>{
    console.log(member.toUpperCase());
    
})

console.log("Print the array like this: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.");

let firstPartArray= companies.slice(0,companies.length-1);
let lastPartArray = companies.slice(companies.length-1,companies.length);
console.log(`${firstPartArray} and ${lastPartArray} are big IT companies`);

console.log("Sort the array using sort() method");
function sortArray(company){
    return company.sort();
}
console.log(sortArray(companies));

console.log("Reverse the array using reverse() method");
function reverseArray(company){
    return company.reverse();
}
console.log(reverseArray(companies));


console.log("Loop");
console.log("Iterate 0 to 10 using for loop, do the same using while and do while loop.");



















































 
 

 
 

 
 
 

 
 

 
 

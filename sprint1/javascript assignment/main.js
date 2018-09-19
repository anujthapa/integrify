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
let companyName ='Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon ';
let splitUsingComma = (companyName.split(","));
console.log(splitUsingComma);

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

console.log("using for loop");
for(let i = 0; i<11; i++){
    console.log(i);    
}

console.log("using While");
let i = 0;
while(i<11){
    console.log(i); 
    i++;
}

console.log("using do while loop");
let j = 0;
do{
    console.log(j);
    j++;   
}
while(j<11)

console.log(" Iterate 10 to 0 using for loop, do the same using while and do while loop.");
console.log("Printing 10 to 0 using for loop");
for(let i=10; i>=0; i--){
    console.log(i);
    
}

console.log("Printing 10 to 0 using while loop");
let k=10;
while(k>=0){
    console.log(k);
    k--;
}

console.log("Printing 10 to 0 using do while loop");
let l = 10;
do{
    console.log(l);
    l--;
}
while(l>=0);


console.log("Function  ");

console.log("Declare a function fullName and it print out your full name.");
console.log("Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full name.");
function fullName(fname,lname){
    let fullName = fname.concat( lname);
    return fullName;
}
console.log(fullName('anuj','thapa'));

console.log("Declare a function addNumbers and it takes two two parameters and it returns sum.");
let sumNumbers = ((num1,num2)=>{return num1+ num2});
console.log(sumNumbers(5,7));

console.log(" Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.");
 let printArrays = ((array)=>{
     return array.map((element)=>element)
    });
 console.log(printArrays(companies));

 console.log("Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array(dont’ use method).");
 
 let reverseArraya = ((array)=>{
    let newCompanyList =[];
    for(let i= array.length-1;i>=0; i--){
        newCompanyList.push(array[i]);
    }
    return newCompanyList;
 });
 console.log(reverseArraya(companies));
 
 console.log("Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array. ");
 let capitalizeArray = ((array)=>{
   return array.map(element=>element.toUpperCase())
 })
 console.log(capitalizeArray(companies));

 console.log("Declare a function name removeItem. It returns array after removing an item ");
 let removeItem =((array)=>{
    array.pop();
    return array;
 });
 console.log(removeItem(companies));
 
 console.log("Declare a function name addItem. It returns array after adding an item");
 let addItem = ((array)=>{
     let item = prompt("Enter the company you want to add")
     array.push(item);
     return array;
 })
 /* console.log(addItem(companies)); */
 
 console.log("Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range. ");
let sumOfNumbers = (()=>{
    let rangeNumber = prompt("Enter the range of number you want to add")
    let sum = 0;
    for(let i = 0; i<=rangeNumber; i++){ 
        sum = sum + i;
      
    }
    return sum;
})
/* console.log(sumOfNumbers()); */

console.log("Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range.");
let sumOfOdds = (()=>{
    let rangeNumber = prompt("Enter the range of number you want to add")
    let sum = 0;
    for(let i = 0; i<=rangeNumber;i++){
        if(i%2!=0){
            sum = sum +i;
        }
    }
    return sum;
});
/* console.log(sumOfOdds());  */

console.log("Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that range.");
let sumOfEvens = (()=>{
    let rangeNumber = prompt("Enter the range of number you want to add")
    let sum = 0;
    for(let i = 0; i<=rangeNumber;i++){
        if(i%2==0){
            sum = sum +i;
        }
    }
    return sum;
});
/* console.log(sumOfEvens()); */

console.log("Declare a function name evensAndOdds. It takes a number parameter and it counts number of evens and odds in the number.");
let evensAndOdds =(()=>{
    let rangeNumber = prompt("enter the range of number you wnat to know");
    let evenCount= 0;
    let oddCount= 0;
    for(let i = 0; i<=rangeNumber; i++){
        if(i%2==0){
            evenCount++;
        }
        else if(i%2!==0){
            oddCount++;
        }
        console.log(`Even in the range is ${evenCount}`);
        console.log(`Odd Numbers in the range is ${oddCount}`);
        
    }
    
})
/* evensAndOdds(); */

console.log("Declare a function name randomHexaNumberGenerator. When this function is called it generates  a random hexadecimal  number. The function return the hexadecimal number.");

let randomHexaNumberGenerator = (()=>{return number = "#"+Math.random().toString(16).slice(2,8).toUpperCase();});
console.log(randomHexaNumberGenerator());

console.log("Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.");
let userIdGenerator = (()=>{
    return userId = Math.random().toString(36).slice(2,9).toUpperCase();
})
console.log(userIdGenerator());

console.log("Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated. ");
let userIdGeneratedByUserSevenTimes = (()=>{
    let userChoice = prompt("How many user name do you want!")
    let userIDCount =0 ;
    let userID='';
    do{
        userID=userIdGenerator();
        console.log(userID);
        userIDCount++;
    }
    while(userIDCount<userChoice)
})

/* userIdGeneratedByUserSevenTimes(); */

console.log("Write a function name rgbColorGenerator and it generates rgb colors.");
let rgbColorGenerator = (()=>{
    let numberGenerator = (()=>{return Math.ceil(Math.random()*225).toString().split('.');});
    let rgb = `rgb(${numberGenerator()},${numberGenerator()},${numberGenerator()})`;
    return rgb;
});
console.log(rgbColorGenerator());



console.log("Object");

console.log("Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncomes, totalExpenses, acountInfo,addIncome, addExpence and accountBalance methods. Incomes is a set of incomes and its description and the same for expenses. ");
let personAccount={
    firstName : 'Anuj',
    lastName : 'Thapa',
   
    incomes :  [{discription : 'salary',Amount: 1500},
                {discription : 'bonus',Amount: 150},
                {discription : 'lottery',Amount: 500}
            ],
    expenses : [{discription : 'roomrent',Amount: 500},
                {discription : 'food',Amount: 100},
                {discription : 'beer',Amount: 500}],
    
    totalIncome : function(){
        const total = this.incomes.reduce(
            (acc,curr)=> (acc+ curr.Amount));
                return total;
    },
    /* totalIncome() {
        const totalInc = this.incomes.reduce(
          (acc, curr) => (acc += curr.income)
          , 0
        );
        return totalInc;
      }, */

   
    addIncome : function(dis,amt){
         dis = prompt("Enter the heading of income");
        amt= Number(prompt("Enter the Amount earned"));
        this.incomes.push({discription:dis,amount:amt})
    },
    addExpenses : function(dis, amt){
        dis = prompt("Enter the heading of income");
        amt= Number(prompt("Enter the Amount earned"));
        this.expenses.push({discription:dis,Amount:amt})
    },
    
};

console.log("Write a function name displayDateTime  and it display in this format: 28/08/2018 04:08 Use the new Date() object to get month, date, year, hour and minute.");

let DisplayDateTime = function(){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    console.log(`${day}/${month}/${year} ${hour}:${minute}`);
    
};
DisplayDateTime();


console.log("Regular Expression");
console.log("Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’");

console.log("Functional Programming");
console.log("Declare a function called getStringLists which take array as a parameter  and it returns array only with string items.");

const randomArr =["hello","1","world",1,2];
function getStringLists(arr){
let arrayOnlySTring = arr.filter(str=>{
    if(typeof(str) === 'string'){
        return str;
    }
});
return arrayOnlySTring;
};
console.log(getStringLists(randomArr));


const countries= ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
    ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
    console.log("Declare a function called categorizeCountries which returns array of countries have some common pattern(you find the countries array from slack).");


console.log("Declare a getFirstTenCountries function and return an array of ten countries");
let firstTenCountries = [];
function getFirstTenCountries(arr){
    for(let i= 0;i<10;i++){
        firstTenCountries.push(arr[i]);
    }
    return firstTenCountries;
}
console.log(getFirstTenCountries(countries));

console.log("Declare a getLastTenCountries function and return an array of ten countries");
let lastTenCountries = [];
function getLastTenCountries(arr){
    for(let i = arr.length; i>=arr.length-10;i-- ){
        lastTenCountries.push(arr[i]);
    }
    return lastTenCountries;
}
console.log(getLastTenCountries(countries));

console.log("Find out with which letter are there many countries");
const letterWithManyCountries =function(arr){
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let countryObj = [];

    for(letter of letters) {
        let times = arr.filter(country => letter === country[0]);
        countryObj.push({letter,times:times.length})   
    }
    countryObj.sort(function(a,b){
        return b.times - a.times;
    });
    return countryObj[0];

};

letterWithManyCountries(countries);



































































 
 

 
 

 
 
 

 
 

 
 

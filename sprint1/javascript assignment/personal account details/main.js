const description = document.querySelector('#discription');
const amount = document.querySelector("#Amount");
const addBtn = document.querySelector('#addBtn')
const showBtn = document.querySelector('#showDetailsBtn');
const selectOption = document.querySelector("#selectOption");
const incomeDiv = document.querySelector(".incomeDiv");
const expensesDiv = document.querySelector(".expensesDiv");
const accountDisplay = document.querySelector(".accountDisplay");
const statDiv = document.querySelector(".statDiv");

//gloabl variables 
let incomeStatement; //save all the filtred data with inceome
let expensesStatement; //save all the filtred data with expenses

//empty array to collect the userinput data
const account= [{Description: "salary", Amount: 1000, Heading: "Income",Date :"6/8/2018"},
{Description: "bonus", Amount: 200, Heading: "Income",Date :"6/8/2018"},
{Description: "business", Amount: 100, Heading: "Income",Date :"6/8/2018"},
{Description: "rent", Amount: 400, Heading: "Expenses",Date :"6/8/2018"},
];

//event to add BTN
addBtn.addEventListener("click",()=>{
    incomeDiv.innerHTML ="";
    expensesDiv.innerHTML ="";
    statDiv.innerHTML="";
    validationForm();
    displayDataIncomeStatement(getLocalData());
    displayDataExpensesStatement(getLocalData());
    barGrap(getLocalData()); 
})



//function to validate and store data in array
function validationForm(){
    if(description.value==""||amount.value==""){
        description.style.backgroundColor ="red"; 
        amount.style.backgroundColor ="red"; 
    }
    else{
        collectData()
        description.style.backgroundColor =""; 
        amount.style.backgroundColor =""; 
    }
}


//to save data of array in local storage
/* function saveLocal(){
    localStorage.setItem('accountBalance',JSON.stringify(account));
}
saveLocal() */

//to get data from local storage
function getLocalData(){
    return  accountStatement = JSON.parse(localStorage.getItem('accountBalance'),undefined,4);
}

/* //check the length of local storage
let localstorageLength = getLocalData();
console.log(localstorageLength.length);
console.log(account.length);
function compareLength(){
    if(localstorageLength.length>account.length){
        saveLocal();
        console.log("This is function");
        
    }
} */



//Function to show data when the page is browsed
displayDataIncomeStatement(getLocalData());
 displayDataExpensesStatement(getLocalData());
 barGrap(getLocalData());

//function to save userinput data from form in array
function collectData(){
    let data=/*  arr.push */({Description:description.value, Amount:parseInt(amount.value), Heading:selectOption.value, Date:(todayDate())});
    let dataJSON = JSON.stringify(data, undefined, 4);
    localStorage.setItem("accountBalance", dataJSON);
}

//date function 
function todayDate(){
    let date= new Date();
    let today = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let y =  `${today}/${month}/${year}/${hour}/${min}/${second}`
    return y;
}
console.log(todayDate());


//function to filter and print heading with income
function displayDataIncomeStatement(arr){
    incomeStatement = arr.filter(income => income.Heading == "Income");
    incomeDiv.innerHTML= `<div id="statementHeading">
                    <div>Heading</div>
                    <div>Amount</div>
                    <div>Date</div>
                </div>`
    incomeStatement.forEach(element => {
    const incomeDisplay = document.createElement("div")
    incomeDisplay.className ="income"
    incomeDisplay.innerHTML +=  `<div>${element.Description}</div>
    <div>${element.Amount}</div>
    <div>${element.Date}</div>`
    incomeDiv.appendChild(incomeDisplay);
    }); 
};

//function to filter and print heading with expenses
function displayDataExpensesStatement(arr){
    expensesStatement = arr.filter(expenses => expenses.Heading == "Expenses");
    expensesDiv.innerHTML=`
                    <div id="statementHeading">
                    <div>Heading</div>
                    <div>Amount</div>
                    <div>Date</div>
                    </div>`
    expensesStatement.forEach(element => {
    const expensesDisplay = document.createElement("div")
    expensesDisplay.className="expenses"
    expensesDisplay.innerHTML += `<div>${element.Description}</div>
    <div>${element.Amount}</div>
    <div>${element.Date}</div>`
    expensesDiv.appendChild(expensesDisplay);
    });  
};

//function to sum of the numbers in array
function total(arr){
    let total = 0; 
    arr.forEach(sum => {
       total += sum.Amount; 
    });
    return total;      
}

//function to show bargraph
function barGrap(arr){
    const barGraphDiv = document.createElement("div");
    arr.forEach(element=>{
    let bar = document.createElement("div");
    bar.className ="barGraph"
    bar.style.height = element.Amount/10 +"px";
    statDiv.appendChild(bar);
    })
   
}

//program to take data from user







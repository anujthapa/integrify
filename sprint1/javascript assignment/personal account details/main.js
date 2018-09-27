const description = document.querySelector('#discription');
const amount = document.querySelector("#Amount");
const addBtn = document.querySelector('#addBtn')
const showBtn = document.querySelector('#showDetailsBtn');
const selectOption = document.querySelector("#selectOption");
const incomeDiv = document.querySelector(".incomeDiv");
const expensesDiv = document.querySelector(".expensesDiv")
const accountDisplay = document.querySelector(".accountDisplay")

//empty array to collect the userinput data
const accountStatement= [{Description: "salary", Amount: "1000", Heading: "Income"},
{Description: "bonus", Amount: "200", Heading: "Income"},
{Description: "business", Amount: "100", Heading: "Income"},
{Description: "rent", Amount: "400", Heading: "Expenses"}
];

//Function to show data when the page is browsed
displayDataIncomeStatement(accountStatement);
 displayDataExpensesStatement(accountStatement);

//function to save userinput data from form in array
function collectData(arr){
   arr.push({Description:description.value, Amount:amount.value, Heading:selectOption.value});
}

//event to add BTN
addBtn.addEventListener("click",()=>{
    validationForm()
})

//event to show data in index
showBtn.addEventListener("click",()=>{
    incomeDiv.innerHTML ="";
    expensesDiv.innerHTML ="";
    displayDataIncomeStatement(accountStatement);
    displayDataExpensesStatement(accountStatement);
})

//function to validate and store data in array
function validationForm(){
    if(description.value==""||amount.value==""){
        description.style.backgroundColor ="red"; 
        amount.style.backgroundColor ="red"; 
    }
    else{
        collectData(accountStatement)
        description.style.backgroundColor =""; 
        amount.style.backgroundColor =""; 
    }
}

//function to filter and print heading with income
function displayDataIncomeStatement(arr){
    let incomeStatement = arr.filter(income => income.Heading == "Income");
    incomeStatement.forEach(element => {
    const incomeDisplay = document.createElement("div")
    incomeDisplay.className ="income"
    incomeDisplay.innerHTML +=  `<div>${element.Description}</div>
    <div>${element.Amount}</div>
    <div>${element.Heading}</div>`
    incomeDiv.appendChild(incomeDisplay);
    }); 
};

//function to filter and print heading with expenses
function displayDataExpensesStatement(arr){
    let expensesStatement = arr.filter(expenses => expenses.Heading == "Expenses");
    expensesStatement.forEach(element => {
    const expensesDisplay = document.createElement("div")
    expensesDisplay.className="expenses"
    expensesDisplay.innerHTML += `<div>${element.Description}</div>
    <div>${element.Amount}</div>
    <div>${element.Heading}</div>`
    expensesDiv.appendChild(expensesDisplay);
    });  
};

    
    
const description = document.querySelector('#discription');
const amount = document.querySelector("#Amount");
const addBtn = document.querySelector('#addBtn')
const selectOption = document.querySelector("#selectOption");


//empty array to collect the userinput data
const accountStatement = [];

//function to save userinput data from form in array
function collectData(){
   accountStatement.push([{Description:description.value,Amount:amount.value,Heading:selectOption.value}]);
}

//event to add BTN
addBtn.addEventListener("click",()=>{
    collectData()
})
console.log(accountStatement); 
function displayDataInStatement(){
   let incomeData =  accountStatement.filter(income=>income.Heading.includes("Income"));
    console.log(incomeData);
    
}
displayDataInStatement();
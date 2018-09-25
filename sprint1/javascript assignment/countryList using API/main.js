let mainContent = document.querySelector(".mainContent");
let sortCountries = document.querySelector(".sortCountries");
let sortCapital = document.querySelector(".sortCapital");
let sortContinent = document.querySelector(".SortContinent");
let sortPopulation = document.querySelector(".sortPopulation");
let inputValue = document.querySelector(".inputValue");




//display the countries in the index page
function fetchApi(){
    let countryApi = 'https://restcountries.eu/rest/v2/all';
    fetch(countryApi)
    .then(function(res){
        return res.json();  
    })
    .then(data => {
        sendCountries(data);
        displayData(data);
    });
}
//run the fetch data function
fetchApi()  

 //display data
 function displayData(data){
    data.forEach(element => {
        let countryDiv = document.createElement("div")
        countryDiv.className ="countryList"
        countryDiv.style.display = "flex";
        countryDiv.style.flexWrap= "wrap"
            countryDiv.innerHTML += `
            <div>  ${element.name}</div>
            <div> ${element.capital}</div>
            <div>${element.region}</div>
            <div> ${element.population}</div>
            <div> <img src="${element.flag}"></div>`
            mainContent.appendChild(countryDiv);
    });
 }

//function sendCountries bring data from fetch data
function sendCountries(data){

//sort the countries list from country name
function sortByCountrie(){
    data.sort((a,b)=>{
        if(a.name > b.name){
            return -1;
        }
        else if(a.name < b.name){
            return 1;
        }
        else{
            return 0;
        }
    });
        displayData(data) ;
        console.log(data.reverse());     
    };
//event listener to sort button of country
sortCountries.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortByCountrie();
});

//sort the list by capital name
function sortByCapital(){
    data.sort((a,b)=>{
        if(a.capital > b.capital){
            return -1;
        }
        else if(a.capital < b.capital){
            return 1;
        }
        else{
            return 0;
        }
    });
    displayData(data);
};
//event listener to sort button of capital
sortCapital.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortByCapital();
});

//sort by continent Name

function sortByContinent(){
    data.sort((a,b)=>{
        if(a.region > b.region){
            return -1;
        }
        else if(a.region < b.region){
            return 1;
        }
        else{
            return 0;
        }
    });
    displayData(data);
}
//event listener to sort button of continent
sortContinent.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortByContinent();
});

//Sort by population

function sortByPopulation(){
data.sort((a,b)=>a.population-b.population);
displayData(data);
}
//event listener to sort button of population
sortPopulation.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortByPopulation();
});

//function to search with button click
function SearchByKeyEnter(){
  let results = data.filter(element=>element.name.toLowerCase().startsWith(inputValue.value));
  displayData(results);
}
//event listener for keyUp search function
inputValue.addEventListener("keyup",()=>{
    mainContent.innerHTML="";
    SearchByKeyEnter();
})
};
  
   






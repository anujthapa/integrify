let mainContent = document.querySelector(".mainContent");
let sortCountriesDecending = document.querySelector("#sortDownCountries");
let  sortCountriesAccending= document.querySelector("#sortUpCountries");
let sortCapital = document.querySelector("#sortDownCapital");
let sortCapitalAccending = document.querySelector("#sortUpCapital")
let sortContinent = document.querySelector("#sortDownContinent");
let sortContinentAccending = document.querySelector("#sortUpContinent");
let sortPopulation = document.querySelector("#sortDownPopulation");
let sortPopulationAccending = document.querySelector("#sortUpPopulation");
let inputValue = document.querySelector(".inputValue");


//array for number of population
let totalPopulation = [];
console.log(totalPopulation);

let total = 0;

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

 //display data in web page
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
//-------------------------------------------------
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
        
    };
//event listener to sort button of country
sortCountriesDecending.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortByCountrie();
});

//function to sort country accending
function sortCountriesByAccending(){
    data.sort((a,b)=>{
        if(a.name <b.name){
            return -1;
        }
        else if(a.name > b.name){
            return 1;
        }
        else{
            return 0;
        }
    });
        displayData(data) ;
        
    };

//event for country sort by accending 
sortCountriesAccending.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortCountriesByAccending();
})
//--------------------------------------------------------
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

//function to sort capital in accending order
function sortCapitalByAccending(){
    data.sort((a,b)=>{
        if(a.capital < b.capital){
            return -1;
        }
        else if(a.capital > b.capital){
            return 1;
        }
        else{
            return 0;
        }
    });
    displayData(data);
};

//event listner to sort button by accending
sortCapitalAccending.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortCapitalByAccending();
})
//sort by continent Name

function sortByContinent(){
    data.sort((a,b)=>{
        if(a.region < b.region){
            return -1;
        }
        else if(a.region > b.region){
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

//sort by continent Name

function sortContinentByAccending(){
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
sortContinentAccending.addEventListener('click',()=>{
    mainContent.innerHTML= "";
    sortContinentByAccending();
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
//sort population in accending order
function sortPopulationByAccending(){
    data.sort((a,b)=>b.population-a.population);
    displayData(data);
    }
    //event listener to sort button of population
    sortPopulationAccending.addEventListener('click',()=>{
        mainContent.innerHTML= "";
        sortPopulationByAccending();
    });

//function to search with button click
function SearchByKeyEnter(){
  
  let results = data.filter(element=>element.name.toLowerCase().startsWith(inputValue.value));
  let results1 = data.filter(element=>element.capital.toLowerCase().startsWith(inputValue.value));
  let results2 = data.filter(element=>element.region.toLowerCase().startsWith(inputValue.value));
  if(results||results1||results2){
    displayData(results);
    displayData(results1);
    displayData(results2);
  }
  
}
//event listener for keyUp search function
inputValue.addEventListener("keyup",()=>{
    mainContent.innerHTML="";
    SearchByKeyEnter();
})

//getting the value of population in the world
let total = 0;
data.forEach(element=>{
    totalPopulation.push({name:element.name ,population:element.population});
    total += element.population
    });
    console.log(total)

function totalPop(){

};
  

};


   






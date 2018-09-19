console.log("Develop a hexadecimal number generator application which looks like the figure below. ");
// hexadecimal generator
function hexadecimalGenerator(){
    return hexa = `#`+ Math.random().toString(16).slice(2,8).toUpperCase(); 
}
//setInterval to change color
/* function colorChange(){
    setInterval(function(){
    hexadecimalGenerator();},3000);
}; */
const wrapper = document.querySelector("#wrapper");
let interval = setInterval(function(){
    wrapper.innerHTML = "";
    elementGenerator();},1000);

console.log("Then create a function which creates HTML elements on the DOM.");

function elementGenerator(){
let color = hexadecimalGenerator ()
let header = document.createElement('div');
header.className = 'header';
let div1 = document.createElement('div1');
let bottonCopy = document.createElement('button');
header.appendChild(div1);
header.appendChild(bottonCopy);
div1.textContent = color;
bottonCopy.textContent='Copy';
bottonCopy.style.background = hexadecimalGenerator();
bottonCopy.style.width ='10%';
bottonCopy.style.height ='30%';
header.style.display = 'flex';
header.style.justifyContent = "space-between";
header.style.backgroundColor= color;
header.style.color = 'White';
header.style.padding = '50px';
header.style.textAlign= 'center';
wrapper.appendChild(header);
};
let btn = document.querySelector(".btn")

//eventlistener to generate the element
/* btn.addEventListener("click",()=> {
    wrapper.innerHTML = "";
    elementGenerator();
}); */

function hi(){
    console.log("Hello anuj");
    
}









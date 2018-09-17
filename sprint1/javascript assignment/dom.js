console.log("Develop a hexadecimal number generator application which looks like the figure below. ");
// hexadecimal generator
function hexadecimalGenerator(){
    return hexa = `#`+ Math.random().toString(16).slice(2,8).toUpperCase(); 
}
//setInterval to change color
function colorChange(){
    setInterval(function(){
    hexadecimalGenerator();},3000);
};

console.log("Then create a function which creates HTML elements on the DOM.");

function elementGenerator(){
let header = document.createElement('div');
header.className = 'header';
let heading = document.createTextNode('This is Header');
header.appendChild(heading);
header.style.backgroundColor= colorChange();
header.style.color = 'white';
header.style.padding = '50px';
header.style.textAlign= 'center'
document.body.appendChild(header);
};








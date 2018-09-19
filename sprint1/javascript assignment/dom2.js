
//Start of header
let wrapper = document.querySelector('.wrapper')
let header = document.createElement('div');
header.className = 'header';
let div1 = document.createElement('div1');
let generateBtn = document.createElement('button');
let stopBtn = document.createElement('button');
let textInput = document.createElement('input');
textInput.setAttribute("type","text")
let headerFooterText =  document.createElement('p'); 
header.appendChild(div1);
header.appendChild(textInput);
header.appendChild(generateBtn);
header.appendChild(stopBtn);
header.appendChild(headerFooterText);

//style for heeader div
header.style.display = 'flex';
header.style.flexWrap='wrap';
header.style.justifyContent = "center";
header.style.backgroundColor= 'blue';
header.style.color = 'White';
header.style.padding = '50px';
header.style.textAlign= 'center';
header.style.height = '10%'

//style for div1 header text
div1.textContent = 'Hexadecimal Color Generator';
div1.style.width='100vw'
div1.style.fontSize='50px';

//style for generate btn
generateBtn.textContent='Generate';
generateBtn.style.background = 'green';
generateBtn.style.width ='10%';
generateBtn.style.height ='30%';
generateBtn.style.marginTop= '25px';
generateBtn.style.marginRight= '5px';
generateBtn.style.color='white';
generateBtn.addEventListener;

//style for stopBtn
stopBtn.textContent ='Stop';
stopBtn.style.width ='10%';
stopBtn.style.height ='30%';
stopBtn.style.background = 'red';
stopBtn.style.marginTop= '25px';
stopBtn.style.color='white';


//style for textarea search area
textInput.className='userInput';
textInput.style.width = '70%';
textInput.style.height ='15%';
textInput.style.margin= '20px';
textInput.style.textAlign='center';
textInput.placeholder = 'Enter a number gretter than 5';

//headerFooterText style 
headerFooterText.textContent='Colors change people emotions so put emaningful colors on your site'
headerFooterText.style.color='black';
headerFooterText.style.marginBottom= '-10%'
//adding all the element in heder div class name = wrapper
wrapper.appendChild(header);

//end of header

function hexadecimalGenerator(){
    let color = "#" + Math.random().toString(16).slice(2,8).toUpperCase();
    return color;
};
//function to generate color in div
function ColorGenerator(){
    let color = hexadecimalGenerator();
    let colorDiv = document.createElement('div') ;
    let colorName = document.createElement('div');
    let copyBtn = document.createElement('btn');
    colorDiv.style.height='15vh';
    colorDiv.style.margin='2vh 0'
    colorDiv.appendChild(colorName);
    colorDiv.appendChild(copyBtn);
    copyBtn.textContent = 'Copy';
    colorName.textContent=color;
    colorDiv.style.backgroundColor = color;
    wrapper.appendChild(colorDiv);
}


//function to print the color as user request

function userInput(){
var userValue = document.querySelector('.userInput').value;
console.log(userValue);
if(userValue <= 5){
    for(let i = 1;i<=5;i++){
        ColorGenerator()
}
}
else{
    for(let i = 1;i<=userValue;i++){
        ColorGenerator()
}
;
}
};

generateBtn.addEventListener('click',
    userInput
);

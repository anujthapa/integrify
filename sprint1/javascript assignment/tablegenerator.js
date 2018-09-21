let wrapper = document.querySelector('.wrapper')
let heading =  document.createElement('div');
let headText = document.createElement('div');

//header div
heading.style.backgroundColor= 'green';
heading.style.width = '100vw';
heading.style.height = 'auto';
heading.style.padding = '20px',
heading.style.display = 'flex';
heading.style.flexWrap='wrap';

//headtext 

headText.textContent='HTML TABLE GENERATOR';
headText.style.fontSize = '4vh'
headText.style.fontWeight = 'Bolder'
headText.style.textAlign = 'center';
headText.style.color = 'white';
headText.style.width = '100vw'
heading.appendChild(headText);


//div for rows and colum---------------------------------------------------------
let rowAndCoulmn = document.createElement('div');
rowAndCoulmn.style.display='flex';
rowAndCoulmn.style.width='100vw';
rowAndCoulmn.style.justifyContent='center';
heading.appendChild(rowAndCoulmn);

// div for row
let rows= document.createElement('div'); 
rows.textContent = 'Enter the number of row : '
rowAndCoulmn.appendChild(rows);

// text area for row
let textForRows = document.createElement('input');
textForRows.setAttribute("type","text")
textForRows.className = 'rowsValue'
rows.appendChild(textForRows);

//div for column
let column = document.createElement('div');
column.textContent=' Enter the number of Column : '
rowAndCoulmn.appendChild(column);

// text area for column
let textForCoulmn = document.createElement('INPUT');
textForCoulmn.setAttribute("type","text")
textForCoulmn.className = 'colunmValue'
column.appendChild(textForCoulmn);

//div for rows and colum---------------------------------------------------------
let perAndPix = document.createElement('div');
perAndPix.style.display='flex';
perAndPix.style.width='100vw';
perAndPix.style.justifyContent='center';
heading.appendChild(perAndPix);

// div for per
let per= document.createElement('div');
per.textContent = 'Table width in percentage : '
perAndPix.appendChild(per);

// text area for Percentage fo width
let textForPer = document.createElement('INPUT');
textForPer.setAttribute("type","text")
textForPer.className = 'widthValue';
per.appendChild(textForPer);

//div for pixel
let pix = document.createElement('div');
pix.textContent='Border width in pixel : '
perAndPix.appendChild(pix);

// text area for pixel
let textForPix = document.createElement('INPUT');
textForPix.setAttribute("type","text");
textForPix.className= 'borderValue';
pix.appendChild(textForPix);

//div for table backgrounds color---------------------------------------------------------
let bgColor = document.createElement('div');
bgColor.style.display='flex';
bgColor.style.width='100vw';
bgColor.style.justifyContent='center';
heading.appendChild(bgColor);

// div for table background cotblBgColor
let tblBgColor= document.createElement('div');
tblBgColor.textContent = 'Table background color : '
bgColor.appendChild(tblBgColor);

// text area for Percentage fo width
let inputFortblBgColor = document.createElement('INPUT');
inputFortblBgColor.setAttribute("type","color");
inputFortblBgColor.className='tblBgValue';
tblBgColor.appendChild(inputFortblBgColor);

//div for heading background color
let hdBgColor = document.createElement('div');
hdBgColor.textContent='Head background color : ';
bgColor.appendChild(hdBgColor);

// text area for pixel
let inputForHdBgColor = document.createElement('INPUT');
inputForHdBgColor.setAttribute("type","color")
inputForHdBgColor.className='tblHeadBgValue';
hdBgColor.appendChild(inputForHdBgColor);

//div for heading background color
let bdBgColor = document.createElement('div');
bdBgColor.textContent='Body background color : ';
bgColor.appendChild(bdBgColor);

// text area for pixel
let inputForBdBgColor = document.createElement('INPUT');
inputForBdBgColor.setAttribute("type","color")
inputForBdBgColor.className = 'tblBdBgValue';
bdBgColor.appendChild(inputForBdBgColor);

//div for border and text color---------------------------------------------------------
let bgForBorderAndFontColor = document.createElement('div');
bgForBorderAndFontColor.style.display='flex';
bgForBorderAndFontColor.style.width='100vw';
bgForBorderAndFontColor.style.justifyContent='center';
heading.appendChild(bgForBorderAndFontColor);

// div for border Color
let borderColor= document.createElement('div');
borderColor.textContent = 'Border Color : ';
bgForBorderAndFontColor.appendChild(borderColor);

// text area for Percentage fo width
let inputForBorderColor = document.createElement('INPUT');
inputForBorderColor.setAttribute("type","color");
inputForBorderColor.className='borderColorValue';
bgForBorderAndFontColor.appendChild(inputForBorderColor);

// div for Font color
let fontColor= document.createElement('div');
fontColor.textContent = 'font Color : '
bgForBorderAndFontColor.appendChild(fontColor);

// color input for text color
let inputForFontColor = document.createElement('INPUT');
inputForFontColor.setAttribute("type","color");
inputForFontColor.className='fontColorValue';
bgForBorderAndFontColor.appendChild(inputForFontColor);

//div for fonts 
let fontDiv = document.createElement('div');
fontDiv.style.display='flex';
fontDiv.style.width='100vw';
fontDiv.style.justifyContent='center';
heading.appendChild(fontDiv); 

//list of fonts
const Fonts = ["aerial","kantipur"];
let fontListDiv = document.createElement('div');
fontListDiv.textContent = 'Select the font you want : '
let fontList = document.createElement('select');
fontList.className = 'fontList';
fontListDiv.appendChild(fontList);
fontDiv.appendChild(fontListDiv);

for(let i = 0;  i < Fonts.length; i++){
    let option = document.createElement('option');
    option.value= Fonts[i];
    option.text = Fonts[i];
    fontList.appendChild(option)
}
 
// font size
let fontSizeDiv = document.createElement('div');
fontSizeDiv.textContent = 'Select the font Size you want : '
let fontSize = document.createElement('select');

fontSize.className='FontSize';
fontSizeDiv.appendChild(fontSize);
fontDiv.appendChild(fontSizeDiv)

for(let i = 1; i<=1000; i++){
    let option = document.createElement('option');
    option.style.color = 'black';
    option.value= i;
    option.text= i;
    fontSize.appendChild(option);
}

//div for text align
const textAligns = ["left","right","center"];
let textAlignDiv = document.createElement('div');
textAlignDiv.textContent ='Select the text align : ';
let textAlign = document.createElement('select');
textAlign.className = 'textAlign'
textAlignDiv.appendChild(textAlign);
fontDiv.appendChild(textAlignDiv);

for(let i = 0; i<textAligns.length;i++){
    let option = document.createElement('option');
    option.value = textAligns[i];
    option.text = textAligns[i];
    textAlign.appendChild(option);
}



//Div for generate btn
let generateBtn = document.createElement('button');
generateBtn.textContent ='Generate table';
generateBtn.style.marginLeft = '50vw'
heading.appendChild(generateBtn);
wrapper.appendChild(heading);
//CRETE A DIV FOR TABLE
table = document.createElement('table');
//gettign the value from user input from form.

//creting a div for table to be displayed
var tableDiv= document.createElement('div');
wrapper.appendChild(tableDiv);

function getvalues(){
table.innerHTML = "";
tblRow = document.querySelector('.rowsValue').value;
tblcolumn = document.querySelector('.colunmValue').value;
let tblwidthPer=document.querySelector('.widthValue').value;
let bodrWidth=document.querySelector('.borderValue').value;
let tblBgColor=document.querySelector('.tblBgValue').value;
let tblHdBgColor=document.querySelector('.tblHeadBgValue').value;
let tblBdBgColor=document.querySelector('.tblBdBgValue').value;
let tblBodrColor=document.querySelector('.borderColorValue').value;
let tblFontColor=document.querySelector('.fontColorValue').value;
let tblFontSize =document.querySelector('.FontSize').value;
let tblFontStyle=document.querySelector('.fontList').value;
let tblFontAlign=document.querySelector('.textAlign').value;


table.style.width = tblwidthPer + "%";
table.style.backgroundColor= tblBdBgColor;
table.style.borderWidth =bodrWidth;
table.style.borderColor = tblBodrColor;
table.style.color = tblFontColor;
table.style.textAlign = tblFontAlign;
table.style.fontWeight = tblFontSize + "px";
table.style.fontFamily = tblFontStyle;

for(let i = 1; i<=tblcolumn; i++){
    var tableHeading = document.createElement('th');
    tableHeading.textContent=`Head ${i}`;
    tableHeading.style.backgroundColor=tblHdBgColor;
    table.appendChild(tableHeading);
}
 for(let i=1;i<=tblRow;i++){
        var tr = document.createElement('tr');
        tr.style.borderWidth =bodrWidth;
        tr.style.backgroundColor = tblBgColor;
    for(let i = 1; i<=tblcolumn; i++){
            var td= document.createElement('td');
            td.textContent='value';
            td.style.borderWidth =bodrWidth;
            tr.appendChild(td);          
    }
    table.appendChild(tr);  
}
tableDiv.appendChild(table);
}
 generateBtn.addEventListener("click",() => {
    getvalues()
     
 });
    









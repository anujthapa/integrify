let wrapper = document.querySelector('.wrapper')
let heading =  document.createElement('div');
let headText = document.createElement('div');

//header div
heading.style.backgroundColor= 'green';
heading.style.width = '100vw';
heading.style.height = '20vh';
heading.style.display = 'flex';
heading.style.flexWrap='wrap';

//headtext 

headText.textContent='HTML Table Generator';
headText.style.fontSize = '3vh'
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
rows.textContent = 'Enter the number of row'

rowAndCoulmn.appendChild(rows);

// text area for row
let textForRows = document.createElement('INPUT');
textForRows.setAttribute("type","text")
textForRows.className = 'rowsValue'
rows.appendChild(textForRows);

//div for column
let column = document.createElement('div');
column.textContent=' Enter the number of Column'
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
per.textContent = 'Table width in percentage'
perAndPix.appendChild(per);

// text area for Percentage fo width
let textForPer = document.createElement('INPUT');
textForPer.setAttribute("type","text")
textForPer.className = 'widthValue';
per.appendChild(textForPer);

//div for pixel
let pix = document.createElement('div');
pix.textContent='Border width in pixel'
perAndPix.appendChild(pix);

// text area for pixel
let textForPix = document.createElement('INPUT');
textForPix.setAttribute("type","text");
pix.appendChild(textForPix);

//div for table backgrounds color---------------------------------------------------------
let bgColor = document.createElement('div');
bgColor.style.display='flex';
bgColor.style.width='100vw';
bgColor.style.justifyContent='center';
heading.appendChild(bgColor);

// div for table background cotblBgColor
let tblBgColor= document.createElement('div');
tblBgColor.textContent = 'Table background color'
bgColor.appendChild(tblBgColor);

// text area for Percentage fo width
let inputFortblBgColor = document.createElement('INPUT');
inputFortblBgColor.setAttribute("type","color");
tblBgColor.appendChild(inputFortblBgColor);

//div for heading background color
let hdBgColor = document.createElement('div');
hdBgColor.textContent='Head background color';
bgColor.appendChild(hdBgColor);

// text area for pixel
let inputForHdBgColor = document.createElement('INPUT');
inputForHdBgColor.setAttribute("type","color")
hdBgColor.appendChild(inputForHdBgColor);

//div for heading background color
let bdBgColor = document.createElement('div');
bdBgColor.textContent='Body background color';
bgColor.appendChild(bdBgColor);

// text area for pixel
let inputForBdBgColor = document.createElement('INPUT');
inputForBdBgColor.setAttribute("type","color")
bdBgColor.appendChild(inputForBdBgColor);

//div for border and text color---------------------------------------------------------
let bgForBorderAndFontColor = document.createElement('div');
bgForBorderAndFontColor.style.display='flex';
bgForBorderAndFontColor.style.width='100vw';
bgForBorderAndFontColor.style.justifyContent='center';
heading.appendChild(bgForBorderAndFontColor);

// div for border Color
let borderColor= document.createElement('div');
borderColor.textContent = 'Border Color'
bgForBorderAndFontColor.appendChild(borderColor);

// text area for Percentage fo width
let inputForBorderColor = document.createElement('INPUT');
inputForBorderColor.setAttribute("type","color");
bgForBorderAndFontColor.appendChild(inputForBorderColor);

// div for Font color
let fontColor= document.createElement('div');
fontColor.textContent = 'font Color'
bgForBorderAndFontColor.appendChild(fontColor);

// color input for text color
let inputForFontColor = document.createElement('INPUT');
inputForFontColor.setAttribute("type","color");
bgForBorderAndFontColor.appendChild(inputForFontColor);


//Div for generate btn
let generateBtn = document.createElement('button');
generateBtn.addEventListener;
generateBtn.textContent ='Generate table';
generateBtn.style.marginLeft = '50vw'
heading.appendChild(generateBtn);


wrapper.appendChild(heading);



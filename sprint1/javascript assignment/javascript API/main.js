/* const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(function (res){
           return res.json()
        })
        .then(function(countries){
			let div;
            countries.forEach(country => {
            div = document.createElement('div');
            div.textContent = country.name;
            document.body.appendChild(div)
            })
            
        }) */
        
        //function to get and print text from the text file
        let textDisplay = document.querySelector(".textDisplay");
        let getTextBtn = document.querySelector("#btnGetText");
        let getTextJson = document.querySelector("#btnGetJson");
        let textDiv = document.createElement('div');

        let getText = ()=>{
            fetch('example.txt')//fetch the file and return response
            .then(function(res){//get text file fome the return response
                return res.text();
            })
            .then(data=>{//printing the text file in dom
                textDiv.innerHTML=data;
                textDisplay.appendChild(textDiv);
            })
           .catch((err)=>console.log(err)); //catch the error and print in colsole
        };
 
        let getJson = ()=>{
            fetch('example.json')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                let printData = document.createElement('div');
                let table = document.createElement('table');
                table.innerHTML +=
                            `<tr>
                                <td>user.id</td>
                                <td>user.name</td>
                                <td>user.email</td>
                            </tr>`
                
                data.forEach(user => {
                    table.innerHTML += 
                        ` <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                            </tr>`
                });
                textDiv.appendChild(table);
                textDisplay.appendChild(textDiv);
            })
        }
        //Add event listner in get text btn
        getTextBtn.addEventListener("click",()=>{
            getText();
        });
        getTextJson.addEventListener("click",()=>{
            getJson();
        })
let wrapper = document.querySelector(".wrapper");
wrapper.innerHTML = "Table generator"

let table = document.createElement("table");
let tableGenerator = ()=>{
    
   
     table.innerHTML +=
     `
    <th>tabel head </th>
    <th>tabel head </th>
    <th>tabel head </th>
    <th>tabel head </th>
    <th>tabel head </th>
    `
    table.innerHTML +=
    `<tr>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    </tr>
    <tr>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    </tr>
    <tr>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    </tr>
    <tr>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    </tr>
    <tr>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    <td>value<td>
    </tr>
    `
    wrapper.appendChild(table);
}
tableGenerator();

let employees = [{id: 101, e_name:"Rahul", salary:1000},
{id: 102, e_name:"Rj", salary:2000},
{id: 103, e_name:"Rx", salary:3000}
]

function disp_Emp(){
    let rows =" "
    for (emp of employees){
        rows = rows + `<tr>
                          <td>${emp.id}</td>
                          <td>${emp.e_name}</td>
                          <td>${emp.salary}</td>
                        </tr>`
                        document.querySelector("#tdata").innerHTML = rows

    }
   
}
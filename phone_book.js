const submit_button = document.getElementById("submit");
const delete_button = document.getElementById("delete");
let i = 1;
submit_button.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let phone_number = document.getElementById("phone_number").value;
    let table = document.getElementById("phone_table");

    let row = document.createElement("tr");

    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.innerText = `${i}`;

    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");

    c1.innerText = `${name}`;
    c2.innerText = `${surname}`;
    c3.innerText = `${phone_number}`;

    row.appendChild(th);
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);

    table.appendChild(row);

    i += 1;
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("phone_number").value = "";
});

delete_button.addEventListener("click", () => {
    let table = document.getElementById("phone_table");
    let last_row = table.lastElementChild;

    if(last_row){
        table.removeChild(last_row);
    }
})
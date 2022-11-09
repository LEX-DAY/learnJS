'use strict';
//TASK_1
function TASK_1() {
    alert("Я JavaScript")
}
//TASK_2


function TASK_2() {
    const inpt = document.getElementById('$name');
    console.log(inpt)

    let name, admin;

    name = inpt.value;
    admin = name;

    alert("Admin:" + " " + admin)
    inpt.value = ""
}

function prikol(event) {
    console.log(event.target.value)
}

'use strict';
//TASK_1
function TASK_1(){
    alert("Я JavaScript")
}
//TASK_2


function TASK_2(){
    
 document.forms.publish.onsubmit = function() {
  let name, admin;
  name = this.$name.value
    admin = name; 
    alert("Admin" + admin)
}
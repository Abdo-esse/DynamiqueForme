// name persone input
let inputPersone = document.querySelector('#inputUser')

// add persone button 
 let addPersoneBtn = document.querySelector('#addpersone')

// parent of inputPerson
let parentInputPerson = document.querySelector('.input-name')

 //function de add person nam
 function addPerson() {
    let newPerson = inputPersone.cloneNode(true)
    parentInputPerson.appendChild(newPerson)
 }
 addPersoneBtn.addEventListener('click',addPerson)
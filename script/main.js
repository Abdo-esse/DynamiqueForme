// name persone input
let inputPersone = document.querySelector('#inputUser')

// add persone button 
 let addPersoneBtn = document.querySelector('#addpersone')

// parent of inputPerson
let parentInputPerson = document.querySelector('.input-name')

// input of workExperience
let workExperience = document.querySelector('#workExperience')

// add work Experience button
let adWorkExperience = document.querySelector('#ad-work-experience')

//parent of input of work experience
let parentInputExperience = document.querySelector('#all')

 //function de add person nam
 function addPerson() {
    let newPerson = inputPersone.cloneNode(true)
    parentInputPerson.appendChild(newPerson)
 }

 // Function de add work Experience
 function addExperionce() {
   let newExep = workExperience.cloneNode(true)
   parentInputExperience.appendChild(newExep)
}



 // Declaration du fonction addPerson
 addPersoneBtn.addEventListener('click',addPerson)

 // Declaration du fonction add work Experience
 adWorkExperience.addEventListener('click',addExperionce)


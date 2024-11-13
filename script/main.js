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
let parentInputExperience = document.querySelector('.all')
console.log(parentInputExperience);


 //function de add person nam
 function addPerson() {
    let newPerson = inputPersone.cloneNode(true)
    newPerson.id=''
    parentInputPerson.appendChild(newPerson)
    console.log(newPerson);
    

 }

 // Function de add work Experience
 function addExperionce() {
   console.log('addd');
   
   let newExep = workExperience.cloneNode(true)
   parentInputExperience.appendChild(newExep)
}

// Function de Aficher 
function showModel() {
   
}

 // Declaration du fonction addPerson
 addPersoneBtn.addEventListener('click',addPerson)

 // Declaration du fonction add work Experience
 adWorkExperience.addEventListener('click',addExperionce)


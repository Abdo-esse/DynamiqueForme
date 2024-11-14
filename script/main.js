// // name persone input
// let inputPersone = document.querySelector('#inputUser')

// // add persone button 
//  let addPersoneBtn = document.querySelector('#addpersone')

// // parent of inputPerson
// let parentInputPerson = document.querySelector('.input-name')

// // input of workExperience
// let workExperience = document.querySelector('#workExperience')

// // add work Experience button
// let adWorkExperience = document.querySelector('#ad-work-experience')

// //parent of input of work experience
// let parentInputExperience = document.querySelector('.all')

// // SaveData button
// let SaveData = document.querySelector("#saveData")

// //Data arry
// let data = []








//  //function de add person nam
//  function addPerson() {

//    //Arry input Persone nam
//    let namePersones =Array.from(document.querySelectorAll('.namePerson'))


//     let newPerson = inputPersone.cloneNode(true)
//     parentInputPerson.appendChild(newPerson)
//     newPerson.id =''
//     newPerson.value =''
//     let datanemPerson = namePersones.map(x=>x.value)
    
   
   
//  }

//  // Function de add work Experience
//  function addExperionce() {
   
//    let newExep = workExperience.cloneNode(true)
//    parentInputExperience.appendChild(newExep)
//    newExep.id=''

// }

// // Function de Aficher 
// function showModel() {
 
// }

//  // Declaration du fonction addPerson
//  addPersoneBtn.addEventListener('click',addPerson)

//  // Declaration du fonction add work Experience
//  adWorkExperience.addEventListener('click',addExperionce)


// form des input
let workExperienceForm = document.querySelector('#form-work-experience')
console.log(workExperienceForm);


// Parent des inputs (form)
let parentWorkExperience = document.querySelector('.parent-input')
console.log(parentWorkExperience);


// 1re input de job-titel
let inputsJobTitel = document.querySelector('.job-title')
console.log(inputsJobTitel);

// 2eme input  de company
let inputCompany = document.querySelector('.company')
console.log(inputCompany);


// 3eme input de job-titel
let inputsYearsExperience = document.querySelector('.years-of-experience')
console.log(inputsYearsExperience);

// Dernier input du description
let inputDescription = document.querySelector('.description')
console.log(inputDescription);

//button de add work experience
let addWorkExperienceBtn = document.querySelector('#add-work-experience')
   

// La function de  add Work Experience
function addWorkExperience() {
  console.log('dfghjkl');
  
 let newForme= parentWorkExperience.cloneNode(true)
  workExperienceForm.appendChild(newForme)
  
}







// Declaration du fonction 

// la function de add Work Experience
addWorkExperienceBtn.addEventListener('click',addWorkExperience)
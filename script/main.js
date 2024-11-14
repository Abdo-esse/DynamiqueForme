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


// Parent des inputs 
let parentWorkExperience = document.querySelector('.parent-input')
console.log(parentWorkExperience);

// 1re tableus des inputs de job-titel
let inputsJobTitel = Array.from(document.querySelectorAll('.job-title'))
console.log(inputsJobTitel);


// 2eme  tableus des inputs de company
let inputsCompany = Array.from(document.querySelectorAll('.company'))



// 3eme tableus des inputs de  years job
let inputsYearsExperience = Array.from(document.querySelectorAll('.years-of-experience'))


// Dernier  tableus des inputs du description
let inputsDescription = Array.from(document.querySelectorAll('.description'))


//button de add work experience
let addWorkExperienceBtn = document.querySelector('#add-work-experience')
   
//data du formulaire
let data = []

// La function de  add Work Experience .rest()
function addWorkExperience() {

  let newForme= parentWorkExperience.cloneNode(true)
 let dataform = newForme.querySelectorAll("input")
  console.log(dataform);
  
  dataform.forEach(e => {
  e.value =""
 });
}
//   console.log(dataform);
  

//   workExperienceForm.appendChild(newForme)
  
//   inputsJobTitel.push(document.querySelector('.job-title'))
  
//   inputsCompany.push(document.querySelector('.company'))

//   inputsYearsExperience.push(document.querySelector('.years-of-experience'))

//   inputsDescription.push(document.querySelector('.description'))


//   data.push(inputsJobTitel , inputsCompany , inputsCompany , inputsYearsExperience , inputsDescription)
  
//   // console.log(data.flat(5));
 
  
//   const map1 = data.flat(5).map((x) => x.value);
//   console.log(map1);
  
  
// }


function sevedata() {
  workExperienceForm.appendChild(newForme)
  
//   inputsJobTitel.push(document.querySelector('.job-title'))
  
//   inputsCompany.push(document.querySelector('.company'))

//   inputsYearsExperience.push(document.querySelector('.years-of-experience'))

//   inputsDescription.push(document.querySelector('.description'))


//   data.push(inputsJobTitel , inputsCompany , inputsCompany , inputsYearsExperience , inputsDescription)
  
//   // console.log(data.flat(5));
 
  
//   const map1 = data.flat(5).map((x) => x.value);
//   console.log(map1);
}




// Declaration du fonction 

// la function de add Work Experience
addWorkExperienceBtn.addEventListener('click',addWorkExperience)
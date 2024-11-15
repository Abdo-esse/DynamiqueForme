// form des input
let workExperienceForm = document.querySelector("#form-work-experience");

// Parent des inputs
let parentWorkExperience = document.querySelector(".parent-input");

//button de add work experience
let addWorkExperienceBtn = document.querySelector("#add-work-experience");

// button de seve data
let saveData = document.querySelector("#saveData");

//data du formulaire
let data = [];

// La function de  add Work Experience
function addWorkExperience() {
  let newForme = parentWorkExperience.cloneNode(true);
  let dataform = newForme.querySelectorAll(".input-value");
  dataform.forEach((e) => {
    e.value = "";
  });
  workExperienceForm.appendChild(newForme);
}

// la function de save data
function sevedata() {
  // 1re tableus des inputs de job-titel
  let inputsJobTitel = Array.from(document.querySelectorAll(".job-title"));

  // 2eme  tableus des inputs de company
  let inputsCompany = Array.from(document.querySelectorAll(".company"));

  // 3eme tableus des inputs de  years job
  let inputsYearsExperience = Array.from(
    document.querySelectorAll(".years-of-experience")
  );

  // Dernier  tableus des inputs du description
  let inputsDescription = Array.from(document.querySelectorAll(".description"));

  let experience = {};
  for (let i = 0; i < inputsJobTitel.length; i++) {
    data.push(
      experience = {
        title: inputsJobTitel[i].value,
        company: inputsCompany[i].value,
        years: inputsYearsExperience[i].value,
        description: inputsDescription[i].value,
      }
    );
  }
  console.log(data);
  
}

function printData() {
  document.documentElement.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    document.documentElement.innerHTML += `
   
     <h1>Experience${i+1}</h1>
    <div> titre de Experience : ${data[i].title} </div>
    <div> company : ${data[i].company} </div>
    <div> years of  Experience : ${data[i].years} </div>
    <div> description sur  l'experience : ${data[i].description} </div>
    

    `
  }
}

function saevAndPrin() {
  sevedata();
  printData();
}

// Declaration du fonction

// la function de add Work Experience
addWorkExperienceBtn.addEventListener("click", addWorkExperience);
// la function de save data
saveData.addEventListener("click", saevAndPrin);

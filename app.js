'use strict';
//#region HtmlStructure
let documentBody = document.querySelector('body')
let header = document.createElement('header')
let h1 = document.createElement('h1')
h1.textContent = 'Page Title';
header.appendChild(h1)
documentBody.appendChild(header)
let mainTag = document.createElement('mainTag');
let section = document.createElement('section')
let form = document.createElement('form')
form.setAttribute('id','form')
section.appendChild(form)
mainTag.appendChild(section)
documentBody.appendChild(mainTag)
let inputName = document.createElement('input')
inputName.setAttribute('type','text')
inputName.setAttribute('id','inputName')
form.appendChild(inputName)
let inputMajor = document.createElement('input')
inputMajor.setAttribute('type','text')
inputMajor.setAttribute('id','inputMajor')
form.appendChild(inputMajor)
let inputSubmit = document.createElement('input')
inputSubmit.setAttribute('type','submit')
form.appendChild(inputSubmit)
let ul = document.createElement('ul');
ul.setAttribute('id','ul')
documentBody.appendChild(ul);
//#endregion

window.onload = function() {
      // htmlStructure();
      init();
    };


function ConstructorFunction(name,major){
      this.name = name;
      this.major = major;
      ConstructorFunction.allStudents.push(this);
}
ConstructorFunction.allStudents = [];

ConstructorFunction.prototype.saveToLs = function(){
      localStorage.setItem('allStudents',JSON.stringify(ConstructorFunction.allStudents))
}
ConstructorFunction.prototype.getLocalStorageData = function(){
      return JSON.parse(localStorage.getItem('allStudents')) || [] ;
}
ConstructorFunction.prototype.renderData = function(){
 
            let li = document.createElement('li');
            li.textContent = this.name + '          ' + this.major
            ul.appendChild(li)
    
}
document.querySelector('form').addEventListener('submit',handleFormSubmit)
function handleFormSubmit(e){
      e.preventDefault();
      let obj = new ConstructorFunction(e.target.inputName.value,e.target.inputMajor.value)
      obj.saveToLs()
      obj.renderData()
}
function  init(){
      const localStorageData = ConstructorFunction.prototype.getLocalStorageData();
      if(localStorageData){
            ConstructorFunction.allStudents.length = 0;
            for (const i of localStorageData)
            { 
                   new ConstructorFunction(i.name,i.major)
                   
            }
      }
  displayData()
}
function displayData(){
      for(let i of ConstructorFunction.allStudents)
      {
            i.renderData();
      }
}


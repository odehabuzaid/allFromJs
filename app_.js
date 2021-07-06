'use strict';

function ConstructorFunction(name,age){
  this.name = name;
  this.age = age;
  ConstructorFunction.allEntries.push(this);
}
ConstructorFunction.allEntries = [];

ConstructorFunction.prototype.saveToLocalStorage = function(){
  localStorage.setItem('allEntries', JSON.stringify(ConstructorFunction.allEntries) );
};

ConstructorFunction.prototype.loadFromLocalStorage = function(){
  return JSON.parse(localStorage.getItem('allEntries')) || [];
};

ConstructorFunction.prototype.appendHtmlElements = function(){
  let li = document.createElement('li');
  li.textContent = this.name + '       ' + this.age;
  document.querySelector('ul').appendChild(li);
};

ConstructorFunction.prototype.handleFormSubmit = function(e){
  e.preventDefault();

  let obj = new ConstructorFunction(e.target.inputName.value,e.target.inputAge.value);
  console.log(ConstructorFunction.allEntries);
  obj.saveToLocalStorage();
  obj.loadFromLocalStorage();
  obj.appendHtmlElements();
};

window.onload = function(){
  const lsData = ConstructorFunction.prototype.loadFromLocalStorage();
  for ( let i of lsData ){
    let obj = new ConstructorFunction(i.name,i.age);
    obj.appendHtmlElements();
  }
};

document.querySelector('form')
  .addEventListener(
    'submit',
    function(e){
      ConstructorFunction.prototype.handleFormSubmit(e);} );

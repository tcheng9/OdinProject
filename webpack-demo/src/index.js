import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
  
    //Use your function
    element.textContent = myName('Cody');
    
  
    return element;
  }
  
  document.body.appendChild(component());
const { file, parse } = require('./globals.js');

function component() {
    const element = document.createElement('div');
    console.log(file,parse);
    return element;
  }
  
document.body.appendChild(component());
const a = 4;
const b = 5;

// Just try running below code using node.js!
function fun(){
    console.log(a+b)
}

setTimeout(fun, 2000);
setTimeout(()=>{console.log(a+b)}, 2000);

// You can display directory using the command below
//console.log(__dirname);

// An old way of importing things from other files
/*
const large = require('./Script2.js')
console.log(large.Script2());*/

// A new way of importing things (Using ES6 modules)
import {Script2} from './Script2.js';

console.log(Script2());
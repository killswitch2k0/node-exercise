// const fs = require('fs');
// const todos = fs.readFileSync('./todos.txt', {encoding:'utf8'});
// const list = todos.split('\r\n'); //beause of CRLF
// console.log(list);


const { readFileSync } = require('fs');
//read file and return array
function getTodos() {
   const value = readFileSync('./todos.txt')
    .toString()
    .split('\n')
    .map(str => str.trim()) //because of CRLF. Incorporated below

    //Separated and moved to displayTodos
    // .map(str => ' - ' + str.trim())
    // .join('\n')


   return value;
}

//get data and dsilay to the user
// function displayTodos() {
//     const todos = getTodos()
//         .map((item, index) => `${(index + 1)}. ${item}`)
//         .join('\n')

//     console.log(todos);
// }

// displayTodos()

//export to cmd.js

module.exports = {
    getTodos
};
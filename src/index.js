import React from 'react'; // Here {react} is module and {React} is object;
import ReactDOM from 'react-dom'; // same concept goes here......

// console.log("The type of the react is", typeof React);
// console.log("The type of the react is", typeof ReactDOM);
// console.log("The ReactDOM I am getting is", ReactDOM);

const element = <h1> This is the React element </h1>

//console.log(typeof element);

// To render this above element in the DOM

console.log("The mounting function I am getting is ", ReactDOM.render(element, document.getElementById('root')));
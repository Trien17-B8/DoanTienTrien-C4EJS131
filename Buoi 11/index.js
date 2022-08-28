// UX: User experience --(JS)
// UI: User interface -- (HTML, CSS)

// Document Object Model

// DOM Element

//Find element by id

// let firstChild = document.getElementById('first-child')
// console.log(firstChild[1])

// Find element by tag

// let p = document.getElementsByTagName('p')
// console.log(p[0])

// Query selector

// let p = document.querySelector('.child')
// console.log(p)

//--DOM Edit
// let firstChild = document.getElementById('first-child')
// firstChild.innerHTML = 'Three Child'

// -- Edit Attribute
// firstChild.style = 'color: blue'

// -- Edit style
//firstChild.style.backgroundColor = 'violet'

// -- DOm create or remove Element
// const todoList = ['Homework', 'Shopping', 'Listening'];

// Create Element
//let ul = document.createElement('ul'); // <ul></ul>

// for( let i =0; i <todoList.length; i++){
//     let li = document.createElement('li');// <li></li>
//      // <li>HomeWork </li>
//     li.innerHTML = todoList[i];// <li> HomeWork </li>
//     //Add Element
//     ul.appendChild(li);
// }

// document.body.appendChild('ul')

// Remove element
// ul.removeChild(document.getElementsByTagName('li')[1])

//BT1

let button = document.createElement("button");
button.innerHTML = "Like";
button.id = "button";
document.body.appendChild(button);

button.onclick = fill;

function fill() {
  if (button.innerHTML === "Like") {
    button.innerHTML = "Liked";
    button.style.color = "blue";
    button.style.backgroundColor = "Red";
  } else if (button.innerHTML === "Liked") {
    button.innerHTML = "Like";
    button.style.backgroundColor = "white";
  }
  return false;
}

//BT2

let buttonColor = document.createElement("button");
buttonColor.innerHTML = "Change Color";
buttonColor.id = "buttonColor";
document.body.appendChild(buttonColor);

buttonColor.onclick = color;

function color() {
  if (buttonColor.innerHTML === "Change Color") {
    document.body.style.backgroundColor = "red";
  }
  return false;
}
//BT2

let bt = document.createElement("button");
bt.innerHTML = "0";
bt.id = "btn";
document.body.appendChild(bt);

bt.onclick = next;

function next() {
  do {
    bt.innerHTML = parseInt(bt.innerHTML) + parseInt(1);
  } while (bt.innerHTML === "0");
}

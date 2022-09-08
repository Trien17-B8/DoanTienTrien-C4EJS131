const text = '["1", "2", "HIHI"]';
const parseJSon = JSON.parse(text);
document.getElementById('h').innerHTML = parseJSon


const myObj = {"name":"Quân", "age":26, "car":null}
const hs = JSON.stringify(myObj);
document.getElementById('h').innerHTML = hs;
console.log(hs);


const btvn = {
    1: {
    albumTitle: "Jack",
    artist: "Pro",
    track: ["Hi", "Triển", "Leo"],
  },
  2: {
    albumTitle: "Jack",
    artist: "Pro",
    track: ["Hi", "Triển", "Leo"],
  },
  3: {
    albumTitle: "Jack",
    artist: "Pro",
    track: ["Hi", "Triển", "Leo"],
  },
};





let nhap = prompt(` Mời chọn 1: Add / 2: Delete / 3: Creat / 4: Update`);

let count =0;
switch (nhap) {
  case 1: console.log("Add")
    for(let key in btvn){
        count++;
    }
    btvn ={
        count:{
            albumTitle: prompt("Nhap albumTitle: "),
            artist: prompt('Nhap artist: '),
            track: [prompt('Nhập track: '), prompt('Nhập track: '), prompt('Nhập track: ')]
        }
    }
        break;
    case 2: console.log("Delete")
      let chon = prompt("Moi nhap id muon xoa");
    case 3: console.log("Create")
      for (let key in btvn) {
        console.log(` Key ${key} có giá trị là ${btvn[1].albumTitle}, ${btvn[1].artist} , ${btvn[1].track}`);
      }
        break;
    case 4: console.log("Update")


        break;
  default:
    break;
}

// //HW1

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};


console.log(person.name);
console.log(person.occupation);
console.log(person.hobbies);

// //HW2

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

const objKey = Object.keys(obj);
toUpper = function (x) {
  return x.toUpperCase();
}

console.log(objKey.map(toUpper));

// //HW3

let myFamily = {
  quantity: 4,
  member: ["Dad", "Mom", "Me", "Daughter"],
	location: "Vietnam",
};

let family =  Object.prototype(myFamily);

family.quantity =4,
family.location = "CS",
family.member = ["Dad", "Mom", "Me", "Daughter"]



console.log(family);

// //HW4

let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3] = {xyz: 606}


// //C2

function update(array, index, value) {
  return array[index] = {value};
}

update(obj.bar[3] = {xyz: 606})

console.log(obj);


//HW5: Use for...in loop and recursive to get all keys of object

var user ={
  name: 'Hieu',
  age: 18,
  appearence:{
    hairColor: 'black',
    skinColor: 'yellow',
    height: 1700,
    weight: 68
  }
}

for (const key in user) {
  console.log(key)
  // console.log(Object.keys(user.appearence));
}


// HW6: Write function to insert element at index of array

// input: ([21,4,5,-1],3,99)// array, index, element
// OUtput: [21,4,5,99,-1]

// let array = ([21,4,5,-1],3,99);









  


// let a = 10;
// let b = 15;


// // a
// if(a > b){
//     console.log("a > b");
// }else{
//     console.log("a < b");
// }

// // b
// if(a == 10){
//     console.log("KQ: a =10");
// }else{
//     console.log("KQ: a !=10");
// }

// // c

// if(a === 10){
//     console.log("KQ: a =10");
// }else{
//     console.log("KQ: a !=10");
// }


// // d

// let x = 5;
// let  y =6;

// if(x !== y){
//     console.log("KQ: a =10");
// }else{
//     console.log("KQ: a !=10");
// }




let arr =[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

for(let i =0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
}

let a = 4;
let b = -6;
let c = 2;

let delta = (b*b)-4*a*c;
let x1;
let x2;

if(delta>0){
    x1 = ((-b +(Math.sqrt(delta)))/ (2*a));
    x2 = ((-b -(Math.sqrt(delta)))/ (2*a));
    console.log(x1);
    console.log(x2);
}else if(delta ==0){
    x1 = (-b / (2*a));
    console.log(x1);
}else{
    console.log("Pt vo nghiem")
}


// HW1
let form = prompt("Moi nhap phep tinh");
let firstNumber = prompt("Nhap so 1: ")
let secondNumber = prompt("Nhap so thu 2: ") 
let result;

if(form == "+"){
    result= Number(firstNumber)+ Number(secondNumber) ;
    console.log(`${firstNumber} ${form} ${secondNumber} = ${result} `);
}else if(form == "-"){
    result= Number(firstNumber)- Number(secondNumber);
    console.log(`${firstNumber} ${form} ${secondNumber} = ${result} `);
}else if(form == "*"){
    result= Number(firstNumber)*Number(secondNumber);
    console.log(`${firstNumber} ${form} ${secondNumber} = ${result} `)
}else if(form == "/"){
    if(firstNumber>secondNumber){
        result= Number(firstNumber) / Number(secondNumber);
        console.log(`${firstNumber} ${form} ${secondNumber} = ${result} `)
    }else{
        console.log("That bai");
    }
}


// HW2

let number = parseInt(prompt("Nhập số: "));
let count = 0;

if(number < 2){
    console.log("Khong phai la so nguyen to");
}else if(number > 2){
    for(let i = 2; i <=number; i++){
        if(number % i ==0){
            count++;
        }
    }
}

if(count ==0){
    console.log(`${number} Là số nguyên tố`)
}else{
    console.log(`${number} Không phải số nguyên tố`)
}











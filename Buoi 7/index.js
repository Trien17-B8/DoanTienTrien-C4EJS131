// alert("Hihi")
// console.log("Cao xin so")

// confirm ("Ban bam ok de tiep tuc")

// prompt ("Nhap ho ten cua ban", "Trien hihi")

// Khai bao bien:
// biến là variable là mot gia trị có thể thay đổi được,
//var/let/const <tên biến> = <giá trị>

// const khai báo chỉ định giá trị
// let không thể khai báo cùng tên biến: let, const
// khai báo không chỉ định giá trị: var, let, *const
// const Tên hoa, giá trị không thay đổi
// function dongTu, ten bien danhTu

//Primitive types: String, Number, Boolean



// b1. Người dùng nhập vào đầy đủ họ tên và in ra màn hình họ tên người dùng riêng lẻ

let hoTen = prompt("Nhập Họ Tên: ")
console.log(`Họ của bạn là: ${hoTen.slice(0,5)}`)
console.log(`Tên đệm của bạn là: ${hoTen.slice(5,10)}`)
console.log(`Tên của bạn là: ${hoTen.slice(10,15)}`)

// BTVN

let greeting = "Hello. My name is Jonh";
console.log(`Chuỗi: ${greeting.charAt(8)}`)

let str1 ="The morning is upon us.";
console.log(` Chuỗi 2: ${str1.slice(12,22)}`)

let str2 ="Hello";
let str3 =" World";
console.log(` Chuỗi 3: ${str2.concat(str3)}`)




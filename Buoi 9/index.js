// push: thêm phần tử vào cuối mảng
// unshift: thêm phần tử vào đầu bảng

// do{
//      d = prompt("Nhập ngày: ");
//      m = prompt("Nhập tháng: ");
//      y = prompt("Nhập năm: ");;
//    ngayTiepTheo(d,m,y);
// }while(y < 0 || m < 1 || m >12 || d < 0 || d > 31);

// // function nhuan(y) {
// //    return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0);
// // }

// let m = [31, 28, 31, 30, 31, 30, 31, 30, 31, 31, 30, 31];
// let y = (year % 400 ==0 || (year % 100 != 0 && year % 4 == 0));

// function ngayTiepTheo(d, m, y){
//     let nextDay =d;
//     let  nextMont =m;
//     let  nextYear = y;

//     if(y>0 && m>0&& m<13 && d >0 && d<=(soNgayTrongThang(m, y))){
//         nextDay = d+1;
//         if(m != 12 && d == (soNgayTrongThang(m,y))){
//             nextDay+1;
//             nextMont= m+1;
//         }else if(m == 12 && d == (soNgayTrongThang(m,y))){
//             nextDay =1;
//             nextMont = 1;
//             nextYear = y+1;
//         }else if( m == 2){
//             if(nhuan(y)){
//                 if(d==29){
//                     nextDay=1;
//                     nextMont = m+1;
//                 }
//             }else{
//                 if(d==28){
//                     nextDay=1;
//                     nextMont = m+1;
//                 }
//             }
//         }
//     }
//     console.log(` Ngày: ${nextDay} Tháng: ${nextMont} Năm: ${nextYear}`)
// }

//HW1

let age =17;
let s= (age >18) ? true : confirm('Did parents allow you?');

let p = (age >18) || confirm('Did parents allow you?');
console.log(s)
console.log(p)

// HW2

function min(a,b){
    if(a>b){
        return b;
    }else{
        return a;
    }
}

console.log(min(3,5));

// HW3

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

// HW4

let user = prompt("Nhập tài khoản");


function check(user) {
  if (String(user) === "Admin") {
    let pass = prompt("Nhập mật khẩu");
        if(String(pass) === "mindX"){
            alert("Chào Mừng");
        }else if(String(pass) === ""){
            alert("Đã Hủy");
        }else if(String(pass) !== "mindX"){
            alert("Mật khẩu sai");
        }
    }else if(String(user) === ""){
        alert("Canceled");
    }else{
        alert("Tôi không biết bạn là ai");
    }
}

check(user);

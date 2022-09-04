let change = document.createElement("button");
change.innerHTML = "Change-My-Left";
change.id = "change-my-left";
document.body.appendChild(change);

change.onclick = check;

function check() {
    const p = document.querySelector('p');
    p.innerHTML ='Tôi giàu sau khi học tập tại mindX';
}


let nope = document.createElement('button');
nope.innerHTML ='Nope';
nope.id= 'nope';
document.body.appendChild(nope);

nope.onmouseenter = back;
nope.onmouseleave = checkTwo;
nope.onclick = oclick;

function back() {
    nope.style.backgroundColor = '#ff0000';
    nope.style.color = 'white';
}


function checkTwo() {
    nope.style.backgroundColor = 'white';
    nope.style.color = 'black';
}

function oclick() {
    if(nope.innerHTML === 'Nope'){
        alert('Bạn có chắc chắn muốn thay đổi cuộc đời bạn');
        nope.innerHTML = 'Tôi rất tiếc';
    }else{
        nope.innerHTML = 'Nope';
    }
}


let u = document.getElementById('user').value;
let p = document.getElementById('pass').value;
let userOne = 'triendoan';
let passOne = 'trien12345';

function submit() {
    if(u == "" && p == ""){
        return document.getElementById('error').innerHTML = 'User không được để trống. Mật Khẩu Tối thiểu 8 kí tự'
    }
    if(u == userOne && p == passOne){
     document.getElementById('error').innerHTML = 'Đăng Nhập Thành Công'
    }
    // return false;
}

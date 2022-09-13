////Bài 1
let first = prompt('Nhập A');
let second = prompt('Nhập b');


function tinh() {
    if(Number(first)<2 ){
        alert('Số Nguyên Tố Nhỏ Nhất Là 2');
    }
    for(let i = Number(first); i <=Number(second) ; i++){
        let count= 0;
        for(let j = 2; j <=i; j++){
            if(i % j ==0){
                count+=1;
            }
        }
        if(count <=1){
            console.log(i);
        }
    }
    
}

tinh();


//Bài 2: 

function numberOneTriangle(soNguyen){
    let resutl = '';
    if (Number(soNguyen) >=1 && Number(soNguyen) <=10 ) {
        for(let i =1; i<= Number(soNguyen); i++ ){
            for(let j=1; j<=i; j++){
                resutl+="*";
            }
            resutl+="\n";
        }
        alert(resutl);
    }else{
        return 0;
    }
}

numberOneTriangle(10);





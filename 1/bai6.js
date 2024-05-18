
function SUMsochan (str) {
   
 //EM CHƯA BIẾC LÀMMMM ^-^

   
}


function bai6() {

    const btn =document.querySelector('.bai6 button');
    const input = document.querySelector('.bai6 input');
    let value
    let result =document.querySelector('.bai6 .result');
    btn.addEventListener('click',function() {
        value = SUMsochan(input.value);
        result.innerText = value;
    })
    
    }
    bai6();
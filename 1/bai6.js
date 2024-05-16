
function SUMsochan (str) {
    // EM CHƯA BIẾC LÀM
}

function bai6() {

    const btn =document.querySelector('.bai5 button');
    const input = document.querySelector('.bai5 input');
    let value
    let result =document.querySelector('.bai5 .result');
    btn.addEventListener('click',function() {
        value = SUMsochan(input.value);
        result.innerText = value;
    })
    
    }
    bai6();
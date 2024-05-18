function taochuoi(str) {
    if (str.length < 3 || str.length % 2 === 0) {
        return 'Không hợp lệ';
    }
    var middleIndex = Math.floor(str.length / 2);
    var middleThree = str.substring(middleIndex - 1, middleIndex + 2);

    return middleThree;
}

function bai8() {

    const btn =document.querySelector('.bai8 button');
    const input = document.querySelector('.bai8 input');
    let value
    let result =document.querySelector('.bai8 .result');
    btn.addEventListener('click',function() {
        value = taochuoi(input.value);
        result.innerText = value;
    })
    
    }
    bai8();
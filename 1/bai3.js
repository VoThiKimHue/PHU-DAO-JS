function removeDuplicates(arr) {
    
    return [...new Set(arr)];
}

function bai3() {

    const btn =document.querySelector('.bai3 button');
    const input = document.querySelector('.bai3 input');
    let value
    let result =document.querySelector('.bai3 .result');
    btn.addEventListener('click',function() {
        value = removeDuplicates(input.value);
        result.innerText = value;
    })
    
    }
    bai3();
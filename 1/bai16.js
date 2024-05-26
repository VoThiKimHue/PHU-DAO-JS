function bai16(number) {
    
    return numbers
    .fillter(number =>number %2 !==0 )
    .map(oodNumber => oddNumber ** 2);
}


function bai16() {

    const btn =document.querySelector('.bai16 button');
    const input = document.querySelector('.bai16 input');
    let value
    let result =document.querySelector('.bai16 .result');
    btn.addEventListener('click',function() {
        value = bai16(input.value);
        result.innerText = value;
    })
    
    }
    bai16();
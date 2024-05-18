function intersectArrays(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}



function bai11() {

    const btn =document.querySelector('.bai11 button');
    const input = document.querySelector('.bai11 input');
    let value
    let result =document.querySelector('.bai11 .result');
    btn.addEventListener('click',function() {
        value = giaomang(input.value);
        result.innerText = value;
    })
    
    }
    bai11();
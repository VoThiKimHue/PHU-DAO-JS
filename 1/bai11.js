function giaomang(arr1, arr2) {
     
var result = arr1.filter(function(element) {
  return arr2.includes(element);
});

console.log(result); 

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
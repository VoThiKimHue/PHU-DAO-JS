
function tang(arr) {
    for ( let i = 1; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i-1] >= arr[i]) {
            return false;
        }
    }
    return true;
}

function bai1() {

const btn =document.querySelector('.bai1 button');
const input = document.querySelector('.bai1 input');
let value
let result =document.querySelector('.bai1 .result');
btn.addEventListener('click',function() {
    value = tang(input.value);
    result.innerText = value;
})

}
bai1();
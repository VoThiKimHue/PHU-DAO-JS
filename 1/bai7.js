function thaythekitutieptheo(str) {
    
    var strArr=str.split(""); 
    for(var i=0;i<str.length;i++){
        strArr[i]=String.fromCharCode(str.charCodeAt(i)+1);
       
    }
    return strArr.join("");
  }
  function bai7() {

    const btn =document.querySelector('.bai7 button');
    const input = document.querySelector('.bai7 input');
    let value
    let result =document.querySelector('.bai7 .result');
    btn.addEventListener('click',function() {
        value = thaythekitutieptheo(input.value);
        result.innerText = value;
    })
    
    }
    bai7();
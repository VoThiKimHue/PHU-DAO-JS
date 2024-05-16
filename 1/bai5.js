function timtudainhi (str) {
    var words = str.split(' ');
    var maxLength = '';
    var secondlength = '';
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength.length ) {
        secondlength = maxLength;
        maxLength = words[i];
      }
      else if (words[i].length > secondlength.length) {
        secondlength = words[i];
      }
    }
    return secondlength;
  }
  function bai5() {

    const btn =document.querySelector('.bai5 button');
    const input = document.querySelector('.bai5 input');
    let value
    let result =document.querySelector('.bai5 .result');
    btn.addEventListener('click',function() {
        value = timtudainhi(input.value);
        result.innerText = value;
    })
    
    }
    bai5();
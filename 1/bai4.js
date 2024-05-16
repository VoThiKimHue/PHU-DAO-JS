function timtudainhat (str) {
    var words = str.split(' ');
    var maxLength = '';
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength.length ) {
        maxLength = words[i];
      }
    }
    return maxLength;
  }
  function bai4() {

    const btn =document.querySelector('.bai4 button');
    const input = document.querySelector('.bai4 input');
    let value
    let result =document.querySelector('.bai4 .result');
    btn.addEventListener('click',function() {
        value = timtudainhat(input.value);
        result.innerText = value;
    })
    
    }
    bai4();
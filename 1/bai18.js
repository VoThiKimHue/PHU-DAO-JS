function bai18(str){

      const shoppingCart = [
        { name: "Shirt", price: 20, discount: 0.1 },
        { name: "Jeans", price: 40, discount: 0.2 },
        { name: "Shoes", price: 60, discount: 0.15 }
      ];
      
      let totalAmount = 0;
      
      shoppingCart.forEach(item => {
        const discountedPrice = item.price * (1 - item.discount);
        totalAmount += discountedPrice;
      });
       
}  

function bai18() {

    const btn =document.querySelector('.bai18 button');
    const input = document.querySelector('.bai18 input');
    let value
    let result =document.querySelector('.bai18 .result');
    btn.addEventListener('click',function() {
        value = bai18(input.value);
        result.innerText = value;
    })
    
    }
    bai18();
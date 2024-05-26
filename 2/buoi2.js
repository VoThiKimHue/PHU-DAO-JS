// fetch('https://svc-0-staging-usf.hotyon.com/search?q=&apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83').then(res => res.json()).then(data => {
// 	console.log(data)
// });


// function bai1(){
//     const btn = document.querySelector(".bai1");

//     let value
//     let result =document.querySelector('.result');
//     console.log(result);
//      btn.addEventListener('click',function() {
//         value = getProductWithHighestPrice(input.value);
//     result.innerText = value;
// })

// }
// bai1();

const API_URL = 'https://svc-0-staging-usf.hotyon.com/search?apiKey=1fedccb4-262f-4e65-ae6d-d01e8024fe83';

document.getElementById('bai1').addEventListener('click', TheProductHasTheHighestPrice);
document.getElementById('bai2').addEventListener('click', TotalPrice);
document.getElementById('bai3').addEventListener('click', SoldOutProduct);



// Bài 1
async function TheProductHasTheHighestPrice() {
    //gọi API để lấy dữ liệu
    const res = await fetch(API_URL);
    const responseData = await res.json();
    //xử lý dữ liệu nhận được
    const items = responseData.data.items;
    let maxPrice = -1;
    let productWithMaxPrice = null;

    items.forEach(item => {
        item.variants.forEach(variant => {
            if (variant.price > maxPrice) {
                maxPrice = variant.price;
                productWithMaxPrice = { ...item, variant };
            }
        });
    });

    //hiển thị thông tin sản phẩm có giá cao nhất
    const resultDiv = document.getElementById('highest-price');
    if (productWithMaxPrice) {
        resultDiv.innerHTML = `
            <p>${productWithMaxPrice.title}</p>
            <p>Price: $${productWithMaxPrice.variant.price} USD</p>
            <p>Options:</p>
            <ul>
                ${productWithMaxPrice.variant.options.map(option => `<li>${option.name} - ${option.values}</li>`).join('')}
            </ul>
        `;
    } else {
        resultDiv.innerHTML = "hông tìm gaaaaaaa.";
    }
}

// Bài 2
async function TotalPrice() {
    const res = await fetch(API_URL);
    const responseData = await res.json();
    const items = responseData.data.items;
    const testBundle = items.find(item => item.title === "Test bundle");

    if (testBundle) {
        const totalPrice = testBundle.variants.reduce((acc, cur) => acc + cur.price, 0)
        const resultDiv = document.getElementById('total-price')
        resultDiv.innerHTML = `
            <p><strong>Product:</strong> ${testBundle.title}</p>
            <p><strong>Variants:</strong> ${testBundle.variants.length}</p>
            <p><strong>Total price:</strong> $${totalPrice} USD</p>
        `;
    } else {
        const resultDiv = document.getElementById('total-price');
        resultDiv.textContent = "Không tìm thấy sản phẩm 'Test bundle'.";
    }
}



// Bài 3
async function SoldOutProduct() {
    const res = await fetch(API_URL)
    const responseData = await res.json()
    const items = responseData.data.items

    const soldOutProducts = items.filter(item => item.available === 0);

    const resultDiv = document.getElementById('Sold-Out');
    if (soldOutProducts.length > 0) {
        resultDiv.innerHTML = `
            <p><strong>Sold Out Product:</strong></p>
            <ul>
                ${soldOutProducts.map(product => `<li>${product.title}</li>`).join('')}
            </ul>
        `;
    } else {
        resultDiv.textContent = "hông coáaaaaa";
    }
}




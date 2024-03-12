document.querySelector("#viewAllProducts").addEventListener("click", function (event) {
  event.preventDefault();
  getProduct();
  // Hide the "View All Products" button
  document.querySelector("#viewAllProducts").style.display = "none";
  // Show the additional products
  document.querySelector(".additionalProducts").classList.remove("d-none");
  // Set the width and height of the additional products container
  document.querySelector(".additionalProducts").style.width = "1170px";
  document.querySelector(".additionalProducts").style.height = "auto";
  document.querySelector(".additionalProducts").style.display = "flex";
  document.querySelector(".additionalProducts").style.margin = "auto";
  // document.querySelector(".detail-box").style.font - size = "15px";

  // Lấy phần tử cần thay đổi 
  const element = document.querySelector('.col-sm-6.col-md-4.col-lg-4');

  // Thay đổi chiều rộng và chiều cao 
  element.style.width = '368.8px';
  element.style.height = '390px';

  // Thay đổi màu nền 
  element.style.backgroundColor = '#f7f8f9';

  // Thêm transition 
  element.style.transition = 'all .3s';

  // Thêm box-shadow
  element.style.boxShadow = '5px 5px 5px -5px rgba(0, 0, 0, .2)';

  // Lặp lại quá trình này để thay đổi các phần tử khác 
  const boxElement = document.querySelector('.col-sm-6.col-md-4.col-lg-4 .box'); boxElement.style.width = '270.8px';
  boxElement.style.padding = '35px 35px';
  boxElement.style.position = 'relative';
  boxElement.style.marginTop = '25px';

  document.querySelector('.box').style.height = "343px"

  const imgBoxElement = document.querySelector('.col-sm-6.col-md-4.col-lg-4 .img-box');
  imgBoxElement.style.height = '215px';
  imgBoxElement.style.display = '-webkit-box';
  imgBoxElement.style.display = '-ms-flexbox';
  imgBoxElement.style.display = 'flex';
  imgBoxElement.style.justifyContent = 'center';
  imgBoxElement.style.alignItems = 'center';

  const imgElement = document.querySelector('.col-sm-6.col-md-4.col-lg-4 .img-box img');
  imgElement.style.maxWidth = '100%';
  imgElement.style.maxHeight = '160px';
  imgElement.style.transition = 'all .3s';

  // Bạn có thể sử dụng hàm addEventListener để thay đổi các thuộc tính CSS khi trang web được tải hoặc khi một sự kiện nào đó xảy ra. Ví dụ:

  // Thay đổi khi trang web được tải 
  window.addEventListener('load', () => {
    // Thay đổi các thuộc tính CSS tại đây 
  });

  // Thay đổi khi nút "Thay đổi" được click 
  const changeButton = document.querySelector('#change-button');
  changeButton.addEventListener('click', () => {
    // Thay đổi các thuộc tính CSS tại đây 
  });
});

function getProduct() {
  const productURL = "http://localhost:3000/products";
  fetch(productURL)
    .then((res) => res.json())
    .then((products) => {
      let codeHTML = "";
      products.map((product) => {
        codeHTML += `
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box">
               <div class="option_container">
                  <div class="options">
                  <a href="" class="option1" onclick="addToCart(event, product)">Add To Cart</a>  
                        Add To Cart
                     </a>
                     <a href="#" class="option2" onclick="addToCart(this, '${product.image}', '${product.name}', ${product.price})">
                        Buy Now
                     </a>
                  </div>
               </div>
               <div class="img-box">
                  <img src="images/${product.image}" alt="">
               </div>
               <div class="detail-box">
                  <h5>
                    ${product.name}
                  </h5>
                  <h6>
                  ${product.price}
                  </h6>
               </div>
            </div>
         </div>
        `;
      });
      document.querySelector(".additionalProducts").innerHTML = codeHTML;
    });
}
var cartCount = 0;

// function addToCart(product) {
//   event.preventDefault();
//   cartCount++;

//   // Create a new div for the product in the cart
//   const productDiv = document.createElement('div');
//   productDiv.className = 'row justify-content-between product-row';
//   productDiv.innerHTML = `
//     <div class="row  justify-content-between">
//       <div class="col-auto col-md-7">
//           <div class="media flex-column flex-sm-row">

//               <img class=" img-fluid" src="images/${product.image}" width="62" height="62">

//               <div class="media-body  my-auto">
//                   <div class="row ">
//                       <div class="col-auto">
//                           <p class="mb-0"><b>${product.name}</b></p>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//       <div class=" pl-0 flex-sm-col col-auto  my-auto quantity-container">
//           <button type="button" class="btn btn-link quantity-button" data-direction="-1">-</button>
//           <p class="boxed-1">2</p>
//           <button type="button" class="btn btn-link quantity-button" data-direction="1">+</button>
//       </div>
//       <div class=" pl-0 flex-sm-col col-auto  my-auto ">
//           <p class="product-price"><b>${product.price}</b></p>
//       </div>
//     </div>
//   `;

//   // Get the cart body
//   const cartBody = document.querySelector('.card-body .row:last-child');

//   alert(cartBody)
//   // Insert the product div before the subtotal row
//   cartBody.insertBefore(productDiv, cartBody.querySelector('.subtotal'));

//   // Add event listeners for the quantity buttons
//   const quantityButtons = productDiv.querySelectorAll('.quantity-button');
//   quantityButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const currentQuantity = parseInt(button.previousElementSibling.textContent);
//       const newQuantity = currentQuantity + button.dataset.direction;
//       button.previousElementSibling.textContent = newQuantity;
//     });
//   });

//   alert('Product has been added to the cart!');
// }

function addToCart(event, product) {
  event.preventDefault();
  cartCount++;

  // Create a new div for the product in the cart
  const productDiv = document.createElement('div');
  productDiv.className = 'row justify-content-between product-row';
  productDiv.innerHTML = `
    <div class="row  justify-content-between">
      <div class="col-auto col-md-7">
          <div class="media flex-column flex-sm-row">
              <img class=" img-fluid" src="images/${product.image}" width="62" height="62">
              <div class="media-body  my-auto">
                  <div class="row ">
                      <div class="col-auto">
                          <p class="mb-0"><b>${product.name}</b></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class=" pl-0 flex-sm-col col-auto  my-auto quantity-container">
          <button type="button" class="btn btn-link quantity-button" data-direction="-1">-</button>
          <p class="boxed-1">2</p>
          <button type="button" class="btn btn-link quantity-button" data-direction="1">+</button>
      </div>
      <div class=" pl-0 flex-sm-col col-auto  my-auto ">
          <p class="product-price"><b>${product.price}</b></p>
      </div>
    </div>
  `;

  // Get the cart body
  const cartBody = document.querySelector('.card-body .row:last-child');

  // Insert the product div before the subtotal row
  cartBody.insertBefore(productDiv, cartBody.querySelector('.subtotal'));

  // Add event listeners for the quantity buttons
  const quantityButtons = productDiv.querySelectorAll('.quantity-button');
  quantityButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentQuantity = parseInt(button.previousElementSibling.textContent);
      const newQuantity = currentQuantity + button.dataset.direction;
      button.previousElementSibling.textContent = newQuantity;
    });
  });

  alert('Product has been added to the cart!');
}

let cart = [];

function addToCart(product) {
  const existingProduct = cart.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  cartCount++;
}

function renderCart() {
  const cartBody = document.querySelector('.card-body .row:last-child');
  cartBody.innerHTML = '';

  if (cartCount === 0) {
    cartBody.innerHTML = `<p class="text-center">No items in the cart</p>`;
    return;
  }

  let totalPrice = 0;
  cart.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'row justify-content-between product-row';
    productDiv.innerHTML = `
      <div class="row  justify-content-between">
        <div class="col-auto col-md-7">
            <div class="media flex-column flex-sm-row">
                <img class=" img-fluid" src="images/${product.image}" width="62" height="62">
                <div class="media-body  my-auto">
                    <div class="row ">
                        <div class="col-auto">
                            <p class="mb-0"><b>${product.name}</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" pl-0 flex-sm-col col-auto  my-auto quantity-container">
            <button type="button" class="btn btn-link quantity-button" data-direction="-1">-</button>
            <p class="boxed-1">${product.quantity}</p>
            <button type="button" class="btn btn-link quantity-button" data-direction="1">+</button>
        </div>
        <div class=" pl-0 flex-sm-col col-auto  my-auto ">
            <p class="product-price"><b>${product.price * product.quantity}</b></p>
        </div>
      </div>
    `;

    // Add event listeners for the quantity buttons
    const quantityButtons = productDiv.querySelectorAll('.quantity-button');
    quantityButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const currentQuantity = parseInt(button.previousElementSibling.textContent);
        const newQuantity = currentQuantity + button.dataset.direction;
        button.previousElementSibling.textContent = newQuantity;
        product.quantity = newQuantity;
        totalPrice += button.dataset.direction * product.price;
        document.querySelector('.subtotal .boxed-1').textContent = `$${totalPrice.toFixed(2)}`;
      });
    });

    cartBody.appendChild(productDiv);
  });

  const subtotal = document.querySelector('.subtotal .boxed-1');
  subtotal.textContent = `$${totalPrice.toFixed(2)}`;
}

fetch("./Admin/pages/tables.html")
  .then((response) => response.text())
  .then((data) => {
    // Sử dụng dữ liệu trả về từ trang tables.html
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


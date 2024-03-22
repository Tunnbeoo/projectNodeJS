const productList = document.getElementById('productList');
const myForm = document.getElementById('myForm');

function renderProducts() {
  fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
      productList.innerHTML = '';
      data.sort((a, b) => b.date - a.date);
      data.forEach((product, index) => {
        const tr = document.createElement('tr');

        const tdName = document.createElement('td');
        tdName.textContent = product.name;
        tr.appendChild(tdName);

        const tdPrice = document.createElement('td');
        tdPrice.textContent = product.price;
        tr.appendChild(tdPrice);

        const tdImage = document.createElement('td');
        if (product.image) {
          const img = document.createElement('img');
          img.src = `../../images/${product.image}`;
          img.width = 50;
          tdImage.appendChild(img);
        } else {
          tdImage.textContent = 'No image';
        }
        tr.appendChild(tdImage);

        const tdAction = document.createElement('td');
        const aEdit = document.createElement('a');
        aEdit.textContent = 'Edit';
        aEdit.href = '#';
        aEdit.dataset.index = index;
        aEdit.addEventListener('click', (e) => editProduct(e, index));
        aEdit.style.marginRight = '5px';
        tdAction.appendChild(aEdit);
        const aRemove = document.createElement('a');
        aRemove.textContent = 'Remove';
        aRemove.href = '#';
        aRemove.dataset.index = index;
        aRemove.addEventListener('click', (e) => removeProduct(e, index));
        tdAction.appendChild(aRemove);

        tr.appendChild(tdAction);
        productList.appendChild(tr);
      });
    });
}

function addProduct() {
  const name = myForm.nameUpload.value;
  const price = myForm.priceUpload.value;
  const image = myForm.imageUpload.files[0];

  const products = fetch('http://localhost:3000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      price,
      image: URL.createObjectURL(image),
      date: new Date().getTime()
    })
  }).then(response => response.json()).then(data => {
    myForm.reset();
    renderProducts();
  });
}

function editProduct(e, index) {
  e.preventDefault();

  const products = fetch('http://localhost:3000/products').then(response => response.json()).then(data => {
    const product = data[index];

    // Hiển thị form sửa 
    myForm.nameUpload.value = product.name;
    myForm.priceUpload.value = product.price;
    myForm.imageUpload.value = '';
    myForm.imageUpload.files = [];

    // Thêm sự kiện click cho nút "Update Product" 
    const addProductButton = document.getElementById('addProduct');
    addProductButton.textContent = 'Update Product'; addProductButton.dataset.index = index;
    addProductButton.removeEventListener('click', addProduct); addProductButton.addEventListener('click', () => updateProduct(index));
  });
}

function updateProduct(index) {
  const name = myForm.nameUpload.value;
  const price = myForm.priceUpload.value;
  const image = myForm.imageUpload.files[0];

  const products = fetch('http://localhost:3000/products', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      price,
      image: URL.createObjectURL(image),
      date: new Date().getTime()
    }),
  }).then(response => response.json()).then(data => {
    myForm.reset();

    // Đổi lại text và sự kiện click cho nút "Add Product"
    const addProductButton = document.getElementById('addProduct');
    addProductButton.textContent = 'Add Product'; addProductButton.dataset.index = '';
    addProductButton.removeEventListener('click', updateProduct);
    addProductButton.addEventListener('click', addProduct);

    renderProducts();
  });
}

function removeProduct(e, index) {
  e.preventDefault();

  fetch('http://localhost:3000/products/' + index, { method: 'DELETE' }).then(() => { // Xóa dữ liệu tương ứng trong mảng products trong local storage 
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));

    renderProducts();
  });
}

const productTable = document.getElementById('productTable');

// Gọi hàm renderProducts ở đây
renderProducts();

fetch('http://localhost:3000/products', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify([product])
}).then(response => response.json()).then(data => console.log(data));

// Gọi hàm renderProducts ở đây
// renderProducts();

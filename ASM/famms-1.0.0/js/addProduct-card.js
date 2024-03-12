const url = 'http://localhost:3000/';
const axiosAPI = async (body) => axios(body);

// start page
const startIndex = () => {
    getCatalogs();
    getProducts();
    showCountProduct();
};

// Lấy thông tin danh mục sản phẩm
const getCatalogs = async () => {
    const urlCatalogs = `${product}categories`;
    const body = {
        url: urlCatalogs,
        method: 'get',
        responseType: 'json',
    };
    const resp = await axiosAPI(body);
    showCatalogs(resp.data);
};

// Hiển danh mục sản phẩm ra trang index.html
const showCatalogs = (data) => {
    const element = document.getElementById('categories');
    const all = '<li><a href="index.html">All</a></li>';
    element.innerHTML = all + data.map((item) => {
        const link = `index.html?catalog=${product.id}`;
        return `<li><a href=${link}>${product.name}</a></li>`;
    }).join('');
};


// Lấy thông tin sản phẩm theo danh mục
const getProducts = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('catalog')) {
        getProductByCatalogId(urlParams.get('catalog'));
    } else {
        getAllProducts();
    }
};

// Lấy tất cả sản phẩm
const getAllProducts = async () => {
    const urlCatalogs = `${product}products`;
    const body = {
        url: urlCatalogs,
        method: 'get',
        responseType: 'json',
    };
    const resp = await axiosAPI(body);
    showProducts(resp.data);
};

// Lấy thông tin sản phẩm theo CatalogId
const getProductByCatalogId = async (catalogid) => {
    const urlCatalogs = `${product}products/catalogid=${product.id}`;
    const body = {
        url: urlCatalogs,
        method: 'get',
        responseType: 'json',
    };
    const resp = await axiosAPI(body);
    showProducts(resp.data);
};

// Lấy thông tin sản phẩm theo ProductId
let getProductById = async (id) => {
    const urlCatalogs = `${url}products/${product.id}`;
    const body = {
        url: urlCatalogs,
        method: 'get',
        responseType: 'json',
    };
    const resp = await axiosAPI(body);
    return resp;
};

// Hiển danh sách sản phẩm ra trang index.html
const showProducts = (data) => {
    const element = document.getElementById('products');
    element.innerHTML = data.map((item) =>
        `<div class="boxsp mr10 ml10">
            <div class="row img"><img src="images/${product.image}" alt=""></div>
            <p><span>${product.price}</span></p>
            <a href="#">${product.name}</a>
            <input type="number" name="soluong" min="1" max="10" value="1">
            <button onclick="addToCard(this)">Đặt hàng</button>
        </div>`).join('');
};

// Hiển thị số sản phẩm đang chọn trong giỏ hàng
const showCountProduct = () => {
    let countItem = sessionStorage.getItem("countItem");
    if (countItem === null) {
        countItem = 0;
    }

    document.getElementById("countItem").innerHTML = countItem;
};


// Thêm sản phẩm vào giỏ hàng
const addToCard = (x) => {
    let arrCarts = [];

    // Đọc giỏ hàng từ sessionStorage
    let arrCart_str = sessionStorage.getItem("ssCart");
    if (arrCart_str !== null) {
        arrCarts = JSON.parse(arrCart_str);
    }

    // Đọc tổng số sản phẩm từ sessionStorage
    let countItem = sessionStorage.getItem("countItem");
    if (countItem === null)
        countItem = 0;

    // Lấy thông tin sản phẩm đang chọn thêm vào giỏhang
    const product = x.parentElement.children;
    const img = product[0].children[0].src;
    let image = '';
    if (img !== '') {
        const arrr = img.split('/');
        image = arrr[arrr.length - 1];
    }
    const price = product[1].children[0].innerText;
    const name = product[2].innerText;
    const quantity = parseInt(product[3].value, 10);
    const productCart = { image, name, price, quantity };

    // kiem tra cap nhat so luong mat hang da chon
    let check = 0;
    for (let i = 0; i < arrCarts.length; i++) {
        if (arrCarts[i][1] === name) {
            const amount = quantity + arrCarts[i][3];
            arrCarts[i][3] = amount;
            check = 1;
            break;
        }
    }

    if (check === 0) {
        arrCarts.push(productCart);
        countItem++;
    }
};

// Hiển thị thông tin giỏ hàng trên trang cart.html
const showMyCart = () => {
    const cart_str = sessionStorage.getItem('ssCart');
    const myCart = JSON.parse(cart_str);
    let tong = 0;
    let ttgh = myCart.map((item, index) => {
        const tt = item[2] * item[3];
        tong += tt;
        return `
        <tr>
          <td>${index + 1}</td>
          <td><img src="/images/${item[0]}" alt=""></td>
          <td>${item[1]}</td>
          <td>${item[2]}</td>
          <td><input type="number" min="0" max="10" value="${item[3]}"
            onchange = "changeQuantity(this)"></td>
          <td>${tt}</td>
        </tr>`;
    }).join('');
    console.log(ttgh);
    ttgh += `
      <tr>
        <th colspan="5">Tổng đơn hàng</th>
        <th> 
          <div id="total">${tong}</div> 
        </th> 
      </tr>`;
    document.getElementById('mycart').innerHTML = ttgh;
};


// Thay đổi số lượng trong trang cart.html
const changeQuantity = (x) => {
    const myCart = JSON.parse(sessionStorage.getItem('ssCart'));

    const product = x.parentElement.parentElement;
    const name = product.children[1].innerText;
    let total = document.getElementById("total").innerText;

    total -= tt;

    if (quantity == 0) {
        if (confirm("Remove this product?")) {
            product.remove();

            for (let i = 0; i < myCart.length; i++) {
                if (myCart[i][1] == name) {
                    myCart.splice(i, 1);
                }
            }

            const countItem = parseInt(sessionStorage.getItem("countItem") - 1);
            sessionStorage.setItem("countItem", countItem);

        } else {
            x.value = 1;
            total += Number.parseInt(tt);
        }

    } else {

        for (let i = 0; i < myCart.length; i++) {
            if (myCart[i][1] == name) {
                myCart[i][3] -= quantity;
            }
        }

        tt = price * quantity;
        product.children[5].innerHTML -= tt;
        total += tt;

    }

    document.getElementById("total").innerHTML -= total;
    sessionStorage.setItem("ssCart", JSON.stringify(myCart));
}

const express = require('express');
const app = express();
const port = 3100;
const inventors = [
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { id: 3, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 4, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 5, first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { id: 6, first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 }
];
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send('<h1>loi1</h1>');
});

app.get('/product', function (req, res) {
    res.send('<h1>Day la trang chu</h1>');
});
app.get('/add-product', (req, res) => {
    res.send(`
    <h1>Thêm Sản Phẩm</h1>
    <form action='/product' method='post'>
    <p> <input type='text' name='productName' placeholder='Tên sản phẩm'></p>
    <p> <button type='submit'>Add Product</button> </p>
    </form>
    `);
});

app.post('/product', (req, res) => {
    let newProduct = req.body;
    console.log(`Thêm sản phẩm ${newProduct.productName} thành công`);
    res.redirect('/add-product');
});

app.get('/inventors', (req, res) => {
    let list = '<h2>Danh sách nhà khoa học</h2><ul>';
    inventors.forEach(e => {
        list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
    });
    list += '</ul>';
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Danh sách nhà khoa học</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
            h2 {
                background-color: #4CAF50;
                color: white;
                padding: 10px;
                margin: 0;
            }
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
            li {
                padding: 10px;
                border-bottom: 1px solid #ddd;
            }
            a {
                color: black;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        ${list}
    </body>
    </html>
    `);
});


app.get('/inventors', (req, res) => {
    let list = '<h2>Danh sách nhà khoa học</h2><ul>';
    inventors.forEach(e => {
        list += `<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
    });
    list += '</ul>';
    res.send(list);
});

app.get('/inventors/:id', (req, res) => {
    let id = req.params.id;
    inventor = inventors.find(e => e.id == id);
    info = `<h2>
    Thông tin chi tiết nhà khoa học:
    Full name: ${inventor.first.toUpperCase()} ${inventor.last.toUpperCase()}, Year: ${inventor.year}, Passed: ${inventor.passed}
    </h2>`;
    res.send(info);
});

app.post('/inventors', (req, res) => {
    let newInventor = req.body;
    newInventor.id = inventors.length + 1;
    inventors.push(newInventor);
    res.redirect('/inventors');
});

app.get('/add-product', (req, res) => {
    res.send(`
    <h1>Thêm Sản Phẩm</h1>
    <form action='/product' method='post'>
    <p> <input type='text' id='productName' name='productName' placeholder='Tên sản phẩm'></p>
    <p id='productInfo'></p>
    <p> <button type='submit'>Add Product</button> </p>
    </form>
    <script>
        const productNameInput = document.getElementById('productName');
        const productInfo = document.getElementById('productInfo');

        productNameInput.addEventListener('input', () => {
            productInfo.textContent = 'Tên sản phẩm: ' + productNameInput.value;
        });
    </script>
    `);
});

//route hiển thị danh sách sản phẩm
app.get('/products', (req, res) => {
    res.send(`
    <h1>Danh sách sản phẩm</h1>
    <ul>
        <li><a href="/product/1">Sản phẩm 1</a></li>
        <li><a href="/product/2">Sản phẩm 2</a></li>
        <li><a href="/product/3">Sản phẩm 3</a></li>
    </ul>
    `);
});

//route xóa sản phẩm
app.delete('/product/:id', (req, res) => {
    let id = req.params.id;
    let index = products.findIndex(e => e.id == id);
    if (index !== -1) {
        products.splice(index, 1);
        res.send(`
        <h1>Xóa sản phẩm thành công</h1>
        <ul>
            <li><a href="/products">Quay lại danh sách sản phẩm</a></li>
        </ul>
        `);
    } else {
        res.status(404).send('<h1>Sản phẩm không tồn tại</h1>');
    }
});

//route hiển thị chi tiết sản phẩm
app.get('/product/:id', (req, res) => {
    let id = req.params.id;
    let product = products.find(e => e.id == id);
    if (product) {
        res.send(`
        <h1>Thông tin sản phẩm ${product.name}</h1>
        <p>Giá: ${product.price}</p>
        <p>Mô tả: ${product.description}</p>
        `);
    } else {
        res.status(404).send('<h1>Sản phẩm không tồn tại</h1>');
    }
});

app.post('/inventors', (req, res) => {
    let newInventor = req.body;
    newInventor.id = inventors.length + 1;
    inventors.push(newInventor);
    res.redirect('/inventors');
});
app.listen(port, function () {
    console.log(`Ứng dụng đang chạy ở cổng ${port}`);
});


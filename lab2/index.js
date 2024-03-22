const { error } = require("console");
const express = require("express");
var app = express();
const port = 3000;
const formidable = require('formidable');
const fs = require('fs');
const { parse } = require("path");
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));
//routes
app.listen(port, () => console.log(`Ung dung dang chay o port ${port}`))

var listProduct = [
    {
        id: 1,
        titile: 'Sống Xanh Như Lá Trà',
        slug: 'song-xanh-nhu-la-tra',
        price: '63500',
        description: "Khám phá kho tàng ý tưởng về sự đơn giản, trí tuệ của người Nhật",
        imageURL: "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/song_xanh_nhu_nhung_la_tra/2020_06_09_16_47_19_1-390x510.JPG",
    },
    {
        id: 2,
        titile: 'Sống Như Lần Đầu, Yêu Như Lần Cuối',
        slug: 'song-nhu-lan-dau-tien-yeu-thuong-nhu-lan-cuoi',
        price: '52000',
        description: "Những câu chuyện hằng ngày, những hành phúc giản dị mà ta dễ bỏ lỡ",
        imageURL: "https://salt.tikicdn.com/cache/540x540/ts/product/8c/55/cb/b4b4c1de75e7b167067e4d504e3836a3.jpg",
    },
    {
        id: 3,
        titile: 'Sức mạnh của sự tử tế',
        slug: 'suc-manh-cua-su-tu-te',
        price: '29000',
        description: "Những câu chuyện sâu sắc và ý nghĩa về sự tử tế mỗi ngày",
        imageURL: "https://nhasachphuongnam.com/images/detailed/184/suc-manh-cua-su-tu-te-tb-2020.jpg",
    },
    {
        id: 4,
        titile: 'Cân Bằng cảm Xúc',
        slug: 'can-bang-cam-xuc',
        price: '39000',
        description: "Cân bằng cảm xúc lúc bảo giông",
        imageURL: "https://salt.tikicdn.com/ts/product/fd/61/1d/a19424cfe9d113c32732d93cf2d5f59a.jpg",
    },
    {
        id: 5,
        titile: 'thiên tài bên trái kẻ điên bên phải',
        slug: 'thien-tai-ben-trai-ke-dien-ben-phai',
        price: '49000',
        description: "thiên tài bên trái kẻ điên bên phải",
        imageURL: "https://salt.tikicdn.com/ts/product/7c/e8/34/4d3636aadb471cad0bf2f45d681e4f23.jpg",
    },
    {
        id: 6,
        titile: 'ghi chép pháp y',
        slug: 'ghi-chep-phap-y',
        price: '79000',
        description: "ghi chép pháp y",
        imageURL: "https://sachtiengviet.com/cdn/shop/products/1837fb51311b623c277ef678d496ce64.jpg?v=1695589694",
    },
];
app.get("/", (req, res) => {
    var today = new Date();
    currentDay = today.getDay();
    var day = '';
    switch (currentDay) {
        case 0: day = 'Chủ nhật'; break;
        case 1: day = 'Thứ 2'; break;
        case 2: day = 'Thứ 3'; break;
        case 3: day = 'Thứ 4'; break;
        case 4: day = 'Thứ 5'; break;
        case 5: day = 'Thứ 6'; break;
        case 6: day = 'thứ 7'; break;

        default: console.log(`Error:${currentDay}`);
    }
    res.render('home', { kindofDay: day });
})


// // view shop
// app.get("/shop", (req, res) => {

//     res.render('shop', { products: listProduct });
// })


// // view add product
// app.get("/addnew", (req, res) => { res.render("addnew"); });

// app.post("/addnew", (req, res) => {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//         let pathFile = files.hinhsp[0].filepath;
//         let tenFile = files.hinhsp[0].originalFilename;
//         let tensp = fields.tensp;
//         let giasp = fields.giasp;
//         let motasp = fields.motasp;
//         let desParth = __dirname + '\\public\\images\\' + tenFile;
//         fs.copyFile(pathFile, desParth, (err) => {
//             if (err) throw err;
//             fs.unlink(pathFile, () => { console.log('Đã xoá file tạm'); });
//             console.log('Đã upload xong file' + tenFile);
//         });
//         listProduct.push({
//             id: 1,
//             title: tensp,
//             price: giasp,
//             description: motasp,
//             imageURL: tenFile,
//         });
//         res.redirect('/shop')
//     })
// })


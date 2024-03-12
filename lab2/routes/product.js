var express = require('express');
var router = express.Router();
const multer = require('multer');



/* GET products listing. */
//http://localhost:3000/products/
const pros = [
    {id:1, name: 'product1', price:100, img:'sidebar-1.jpg'},
    {id:2, name: 'product2', price:200, img:'sidebar-2.jpg'},
    {id:3, name: 'product3', price:300, img:'sidebar-3.jpg'},
]
router.get('/', function(req, res, next) {
  //res.send('đây là trang sản phẩm');
  res.render('product',{pros})
});
router.get('/addpro',(req,res)=>{
    res.render('addpro')
})
var storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, './public/images')
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})
//kiểm tra định dạng file hình ảnh
var checkFile = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        return cb(new Error('Bạn chỉ được upload file hình ảnh'))
    }
    cb(null, true)
}
const upload = multer({storage: storage, fileFilter: checkFile})
router.post('/addpro',upload.single('image'),(req,res)=>{
    const {name,price} = req.body;
    const {filename} =req.file;
    const pro = {
        id: pros.length + 1,
        name,
        price,
        img: filename
    }
    pros.push(pro)
    res.redirect('/products')
})

module.exports = router;

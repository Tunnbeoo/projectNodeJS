var express = require('express');
const productModel = require('../mongo/product.model');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const pors = await productController.getpors()
    res.render('home', { pors })
  }
  catch (error) {
    console.log('Lỗi lấy danh sách', error);
    return res.status(500).json({ mess: error })
  }
});

async function getHotProduct() {
  try {
    const result = await productModel.find({ view: { $gte: 1000 } }).sort({ view: -1 })
    const prosale = await productModel.find().sort({ pricesale: -1 }).limit(10)
    return result
  }
  catch (error) {
    console.log('Lỗi lấy danh sách sản phẩm hot', error);
    throw error
  }
}

async function getByCategory(category) {
  try {
    const productCategory = await productModel.fine({ 'category.categoryId': category })
    return productCategory
  }
  catch (error) {
    console.log('Lỗi lấy danh sách sản phẩm theo danh mục', error);
    throw error
  }
}

module.exports = router;


router.post('./addcategory', async(req,res)=>{
  try{
    const body = req.body
    const cateNew = await categoryContrller.insertCategory(body)
    return res.status(200).json({categoryNew :cateNew})
  } catch (error){
    console.log('Lỗi thêm danh mục', error);
    return res.status(500).json({mess: error})
  }
})
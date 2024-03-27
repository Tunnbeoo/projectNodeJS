const router = require("./users");

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
  

//cap nhat danh muc 



//cập nhật danh mục
//http://localhost:3000/updatecategory/:id
router.post('./updatecategory:/id' ,async(req,res)=>{
    try{
        const {id} = req.params
        const body = req.body
        const cateUpdate = await categoryController.updateCategory(id,body)
        return res.status(200).json({categoryUpdate:cateUpdate})
    } catch (error){
        console.log('Lỗi cập nhật danh mục', error);
        return res.status(500).json({mess: error})
    }
})

module.exports = router;
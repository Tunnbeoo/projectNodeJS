const prodcutModel = require('./product.model')
const categoryModel = require('./category.model')

module.exports = {updateCategory}
async function updateCategory(id,body){
    try{
        //itm trong collection categories lay ra danh muc theo id
        const category = await categoryModel.findById(id)
        if(!category){
            throw new Error('Không tìm thấy danh mục');
        }
        //lyaas thông tin cập nhật từ body
        const {name, decription} = body
        //cập nhật lại danh mục
        const result = await categoryModel.findByIdAndUpdate(
            id,
            {name,decription},
            {new: true})
            
            return result
    }catch(error) {
        console.log('Lỗi cập nhật danh mục',error);
        throw error
    }
}
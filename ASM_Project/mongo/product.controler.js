const prodcutModel = require('./product.model')
const model = require('./category.model')

module.exports = {}

async function getAll() {
    try {
        const result = await prodcutModel.find()
        return result
    }
    catch (error) {
        console.log('lỗi lấy danh sách sản phẩm', error);
        throw error
    }
}

async function getCategory(name) {
    try {
        const category = await categoryModel.find('category.category:');
        return category;
    } catch (error) {
        console.log('Lỗi lấy danh mục', error);
        throw error
    }
}
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
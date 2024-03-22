// thuc hien thao tac CRUD voi môngDB 
const mongoose = require('mongoose');
const productModel = require('./product.model');
const categoryModel = require('./category.model');

module.exports = { insert, getAll }
async function insert(body) {
    try {
        const { name, price, quantity, image, description, category } = body;
        //tim thong tin danh muc theo id danh muc tra trong colletion category
        const categoryFind = await categoryModel.findById(category);
        if (!categoryFind) {
            throw new Error('khong tim thay danh muc');
        }
        const proNew = new productModel({
            name, price, quantity, image, description,
            category: {
                categoryId: categoryFind._id,
                categoryName: categoryFind.name
            }
        });
        // luu vao database
        const result = await proNew.save();
        return result;
    } catch (error) {
        console.log('loi insert', error);
        throw error;
    }
}


async function getAll() {
    try {
        const result = await productModel.find()
        return result;
    } catch (error) {
        console.log('loi lay danh sach');
        throw error;
    }
}
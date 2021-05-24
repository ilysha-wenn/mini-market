const Product = require('../models/product/Product')
const ProductCategory = require('../models/product/ProductCategory');
const ProductType = require('../models/product/ProductType');

class IndexController{
    async create(req, res){
        try {
            const {title, description, price, count} = req.body;
            const productCategory = await ProductCategory.findOne({value: "Товар"});
            const productType = await ProductType.findOne({value: "Одежда"});
            const post = new Product({title, description, category: productCategory.value,
                 typeProduct: productType.value, price, count});
            await post.save();
            return res.json({message: "Товар был успешно добавлен"});
        } catch (error) {
            return res.status(500).json({message:`Не удалось создать`});
            console.log(error);
        }
    }
    async getAll(req, res){
        try {
            const post = await Product.find();
            return res.status(200).json({message: post});
        } catch (error) {
            return res.status(500).json({message:`Ошибка`});
            console.log(error);
        }
    }
    async getOne(req, res){
        try {
            const {id} = req.params;
            if(!id) return res.status(400).json({message: "Не указан id"})
            const post = await Product.findById(id);
            return res.status(200).json({message: post});
        } catch (error) {
            return res.status(500).json({message:`Ошибка`});
            console.log(error);
        }
    }
    async update(req, res){
        try {
            const post = req.body;
            if(!post._id) return res.status(400).json({message: "Не указан id"})
            const updatedPost = await Product.findByIdAndUpdate(post._id, post, {new: true});
            return res.status(200).json(updatedPost);
        } catch (error) {
            return res.status(500).json({message:`Ошибка`});
            console.log(error);
        }
    }
    async delete(req, res){
        try {
            const {id} = req.params;
            if(!id) return res.status(400).json({message: "Не указан id"});
            const deleted = await Product.findByIdAndDelete(id);
            return res.status(200).json({message: 'Успешно'});
        } catch (error) {
            return res.status(500).json({message:`Ошибка`});
            console.log(error);
        }
    }

    async createCategory(req, res){
        try {
            const {value} = req.body;
            const newCategory = new ProductCategory({value: value});
            await newCategory.save();
            return res.status(200).json('Добавлена новая категория');
        } catch (error) {
            return res.status(500).json(`Не удалось получить объект`);
            console.log(error);
        }
    }
    async deleteCategory(req, res){
        try {
            const {id} = req.params;
            if(!id) return res.status(400).json({message: "Не указан id"});
            const deleted = await ProductCategory.findByIdAndDelete(id);
            return res.status(200).json({message: 'Успешно'});
        } catch (error) {
            return res.status(500).json(`Не удалось получить объект`);
            console.log(error);
        }
    }

    async createType(req, res){
        try {
            const {value} = req.body;
            const newType = new ProductType({value: value});
            await newType.save();
            return res.status(200).json('Добавлена новая категория');
        } catch (error) {
            return res.status(500).json(`Не удалось получить объект`);
            console.log(error);
        }
    }
    async deleteType(req, res){
        try {
            const {id} = req.params;
            if(!id) return res.status(400).json({message: "Не указан id"});
            const deleted = await ProductType.findByIdAndDelete(id);
            return res.status(200).json({message: 'Успешно'});
        } catch (error) {
            return res.status(500).json(`Не удалось получить объект`);
            console.log(error);
        }
    }




}
module.exports = new IndexController();
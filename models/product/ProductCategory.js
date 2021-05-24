const {Schema, model} = require('mongoose');

const ProductCategory = new Schema({
    value: {type: String, unique: true, default: "Одежда"},
})

module.exports = model('ProductCategory', ProductCategory);
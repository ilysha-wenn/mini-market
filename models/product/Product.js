const {Schema, model} = require('mongoose');

const Product = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    category: {type: String, ref: 'ProductCategory'},
    typeProduct:{type: String, ref: 'ProductType'},
    price: {type: String, required: true},
    count: {type: Number, required: true},
    date: {type: Date, default: Date.now},
})

module.exports = model('Product', Product);
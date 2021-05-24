const {Schema, model} = require('mongoose');

const ProductType = new Schema({
    value: {type: String, unique: true, default: "Одежда"},
})

module.exports = model('ProductType', ProductType);


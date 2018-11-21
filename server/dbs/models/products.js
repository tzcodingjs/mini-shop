// products 模型
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ProductsSchema = new Schema({
  _id:{
    type:Number
  },
  id:{
    type:Number,
    reqiure:true
  },
  imgSrc:{
    type:String,
    reqiure:true
  },
  stock:{
    type:Number,
    reqiure:true
  },
  price:{
    type:Number,
    reqiure:true
  },
  title:{
    type:String,
    reqiure:true
  },
  category_id:{
    type:String,
    reqiure:true
  }
})

module.exports = mongoose.model('Products',ProductsSchema)

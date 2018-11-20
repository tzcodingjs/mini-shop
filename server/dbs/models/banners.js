// banner 模型
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const BannerSchema = new Schema({
  id:{
    type:String,
    reqiure:true
  },
  imgSrc:{
    type:String,
    reqiure:true
  }
})

module.exports = mongoose.model('Banner',BannerSchema)

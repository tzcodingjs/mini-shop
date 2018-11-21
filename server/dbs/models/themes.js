// theme模型
const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ThemeSchema = new Schema({
  id: {
    type: String,
    require: true
  },
  imgSrc: {
    type: String,
    require: true
  },
  products:[{
    type:Schema.Types.Number,
    ref:'Products'
  }]
})

module.exports = mongoose.model('Themes',ThemeSchema)

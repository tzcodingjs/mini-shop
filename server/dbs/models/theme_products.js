// theme_products 模型
const Sequelize = require('sequelize')
const sequelize = require('../config.js')
const Product = require('./products.js')
const Theme = require('./themes.js')
const theme_product = sequelize.define('theme_product', {
  theme_id: {
    type: Sequelize.INTEGER(),
  },
  product_id: {
    type: Sequelize.INTEGER(),
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = theme_product

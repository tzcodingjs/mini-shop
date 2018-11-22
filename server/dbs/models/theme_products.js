// theme_products 模型
const Sequelize = require('sequelize')
const sequelize = require('../config.js')
const Product = require('./products.js')
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

theme_product.belongsTo(Product, {foreignKey: 'product_id',targetKey: 'id'})

module.exports = theme_product

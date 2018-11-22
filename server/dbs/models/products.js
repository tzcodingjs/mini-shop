// product 模型
const Sequelize = require('sequelize');
const sequelize = require('../config.js')
const Image = require('./images.js')

const Product = sequelize.define('Product', {
  id: {
    type: Sequelize.INTEGER(),
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING()
  },
  price: {
    type: Sequelize.FLOAT()
  },
  stock: {
    type: Sequelize.INTEGER()
  },
  category_id: {
    type: Sequelize.INTEGER()
  },
  main_img_url: {
    type: Sequelize.STRING(),
  }
}, {
  timestamps: false,
  freezeTableName: true
})

Product.belongsTo(Image,{foreignKey:'img_id',targetKey:'id'})

module.exports = Product

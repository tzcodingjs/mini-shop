// theme模型
const Sequelize = require('sequelize');
const sequelize = require('../config.js')
const Image = require('./images.js')
const Theme_product = require('./theme_products.js')
const Theme = sequelize.define('Theme',{
  id: {
    type: Sequelize.INTEGER(),
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING()
  },
  description:{
    type: Sequelize.STRING()
  },
  topic_img_id:{
    type: Sequelize.INTEGER(),
  },
  head_img_id:{
    type:Sequelize.INTEGER()
  }
}, {
  timestamps: false,
  freezeTableName: true
})

Theme.belongsTo(Image,{foreignKey:'head_img_id',targetKey:'id'})
Theme.hasMany(Theme_product,{foreignKey:'id',targetKey:'theme_id'})

module.exports = Theme

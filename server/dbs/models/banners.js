// banner 模型
const Sequelize = require('sequelize');
const sequelize = require('../config.js').sequelize
const Banner = sequelize.define('Banner', {
  id: {
    type: Sequelize.STRING(),
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(),
  },
  description:{
    type: Sequelize.STRING(),
  },
  delete_time:{
    type: Sequelize.STRING(),
  },
  update_time:{
    type: Sequelize.STRING(),
  }
},{timestamps: false})

module.exports = Banner

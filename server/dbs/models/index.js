import Sequelize from 'sequelize'
import config from '../config.js'

// 实例化sequelize
export const sequelize = new Sequelize(config)

// 导入模型统一管理
export const Banner = sequelize.import(__dirname + '/banners.js')
export const Image = sequelize.import(__dirname + '/images.js')
export const Product = sequelize.import(__dirname + '/products.js')
export const Theme_product = sequelize.import(__dirname + '/theme_products.js')
export const Theme = sequelize.import(__dirname + './themes.js')

// 表间关联关系
Banner.belongsTo(Image, {
  foreignKey: 'img_id',
  targetKey: 'id'
})

Theme.belongsTo(Image, {
  foreignKey: 'head_img_id',
  targetKey: 'id'
})
Theme.belongsToMany(Product, {
  through: Theme_product,
  foreignKey: 'theme_id'
})

Product.belongsTo(Image, {
  foreignKey: 'img_id',
  targetKey: 'id'
})
Product.belongsToMany(Theme, {
  through: Theme_product,
  foreignKey: 'product_id'
})

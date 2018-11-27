// theme_products 模型
const Theme_product = sequelize.define('theme_product', {
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


module.exports = Theme_product


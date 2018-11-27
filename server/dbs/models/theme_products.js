// theme_products 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('theme_product', {
    theme_id: {
      type: Sequelize.INTEGER(),
    },
    product_id: {
      type: Sequelize.INTEGER(),
    }
  })
}

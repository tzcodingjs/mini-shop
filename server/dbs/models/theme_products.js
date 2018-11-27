// theme_products 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('theme_product', {
    theme_id: {
      type: DataTypes.INTEGER(),
    },
    product_id: {
      type: DataTypes.INTEGER(),
    }
  })
}

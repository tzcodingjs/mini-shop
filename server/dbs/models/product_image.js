// product_image 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('product_image', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    img_id: {
      type: DataTypes.INTEGER(),
    },
    order: {
      type: DataTypes.INTEGER(),
    },
    product_id: {
      type: DataTypes.INTEGER(),
    }
  })
}

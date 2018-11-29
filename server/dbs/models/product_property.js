// product_property 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('product_property', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(),
    },
    detail: {
      type: DataTypes.STRING(),
    },
    product_id: {
      type: DataTypes.INTEGER(),
    }
  })
}

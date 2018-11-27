// banner 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('banner', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    productsId: {
      type: DataTypes.INTEGER(),
    },
    img_id: {
      type: DataTypes.INTEGER(),
    }
  })
}


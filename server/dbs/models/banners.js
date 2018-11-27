// banner 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('banner', {
    id: {
      type: Sequelize.INTEGER(),
      primaryKey: true
    },
    productsId: {
      type: Sequelize.INTEGER(),
    },
    img_id: {
      type: Sequelize.INTEGER(),
    }
  })
}


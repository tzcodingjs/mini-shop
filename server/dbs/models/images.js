// image 模型

export default (sequelize, DataTypes) => {
  return sequelize.define('image', {
    id: {
      type: Sequelize.INTEGER(),
      primaryKey: true
    },
    url: {
      type: Sequelize.STRING(),
    }
  })
}

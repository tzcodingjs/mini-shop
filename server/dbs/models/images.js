// image 模型

export default (sequelize, DataTypes) => {
  return sequelize.define('image', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(),
    }
  })
}

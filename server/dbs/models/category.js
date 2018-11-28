// category 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('category', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(),
    },
    topic_img_id: {
      type: DataTypes.INTEGER(),
    }
  })
}


// theme模型
export default (sequelize, DataTypes) => {
  return sequelize.define('theme', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING()
    },
    description: {
      type: DataTypes.STRING()
    },
    topic_img_id: {
      type: DataTypes.INTEGER(),
    },
    head_img_id: {
      type: DataTypes.INTEGER()
    }
  })
}

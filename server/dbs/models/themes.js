// theme模型
export default (sequelize, DataTypes) => {
  return sequelize.define('theme', {
    id: {
      type: Sequelize.INTEGER(),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING()
    },
    description: {
      type: Sequelize.STRING()
    },
    topic_img_id: {
      type: Sequelize.INTEGER(),
    },
    head_img_id: {
      type: Sequelize.INTEGER()
    }
  })
}

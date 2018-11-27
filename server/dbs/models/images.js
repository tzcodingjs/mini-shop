// image 模型


const Image = sequelize.define('Image', {
  id: {
    type: Sequelize.INTEGER(),
    primaryKey: true
  },
  url: {
    type: Sequelize.STRING(),
  }
}, {
  timestamps: false,
  freezeTableName: true
})

module.exports = Image



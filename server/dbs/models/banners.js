// banner 模型
const Banner = sequelize.define('Banner', {
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
}, {
  timestamps: false,
  freezeTableName: true
})

Banner.belongsTo(Image,{foreignKey:'img_id',targetKey:'id'})

module.exports = Banner


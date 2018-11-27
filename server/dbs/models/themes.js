// theme模型
const Theme = sequelize.define('Theme',{
  id: {
    type: Sequelize.INTEGER(),
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING()
  },
  description:{
    type: Sequelize.STRING()
  },
  topic_img_id:{
    type: Sequelize.INTEGER(),
  },
  head_img_id:{
    type:Sequelize.INTEGER()
  }
}, {
  timestamps: false,
  freezeTableName: true
})

Theme.belongsTo(Image,{foreignKey:'head_img_id',targetKey:'id'})
Theme.belongsToMany(Product,{through:theme_product,foreignKey:'theme_id'})

module.exports = Theme

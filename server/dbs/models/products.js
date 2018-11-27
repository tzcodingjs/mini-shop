// product 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('product', {
    id: {
      type: Sequelize.INTEGER(),
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING()
    },
    price: {
      type: Sequelize.FLOAT()
    },
    stock: {
      type: Sequelize.INTEGER()
    },
    category_id: {
      type: Sequelize.INTEGER()
    },
    main_img_url: {
      type: Sequelize.STRING(),
    }
  })
}


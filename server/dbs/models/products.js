// product 模型
export default (sequelize, DataTypes) => {
  return sequelize.define('product', {
    id: {
      type: DataTypes.INTEGER(),
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING()
    },
    price: {
      type: DataTypes.FLOAT()
    },
    stock: {
      type: DataTypes.INTEGER()
    },
    category_id: {
      type: DataTypes.INTEGER()
    },
    main_img_url: {
      type: DataTypes.STRING(),
    }
  })
}


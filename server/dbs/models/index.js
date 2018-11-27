import Sequelize from 'sequelize'
import config from '../config.js'

// 实例化sequelize
export const sequelize = new Sequelize(config)

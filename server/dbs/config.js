/* // 引入orm模型
const Sequelize = require('sequelize');
const sequelize = new Sequelize('minishop', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'
});

module.exports = sequelize */

const mysql = require('mysql')
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'minishop'
})

let query = function(sql, values){
  return new Promise((resolve,reject) => {
    pool.getConnection(function(err, connection){
      if(err){
        reject(err)
      }else{
        connection.query(sql,values,(err, rows) => {
          if(err){
            reject(err)
          }else{
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = query

/* // product接口
const Router = require('koa-router');
// 引入用户模型
const Products = require('../dbs/models/products.js')
const Image = require('../dbs/models/images.js')
const utils = require('./utils/utils.js')

let router = new Router({
  prefix:'/product'
})

router.get('/', async (ctx,next)=>{
  let products = await Products.findAll({
    include:[{
      model:Image
    }],
    'limit':10
  })
  utils.preUrl(products)
    ctx.body = {
      products
    }
})

module.exports = router
 */
const Router = require('koa-router');
const query = require('../dbs/config.js')

let router = new Router({
  prefix:'/product'
})

router.get('/', async (ctx,next)=>{
  let sql = 'SELECT p.id, p.name, p.price, p.img_id, i.url FROM product as p JOIN image as i ON p.img_id = i.id LIMIT 0,10'
  let products = await query(sql)
    ctx.body = {
      products
    }
})

module.exports = router

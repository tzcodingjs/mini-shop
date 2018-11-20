// product接口
const Router = require('koa-router');
// 引入用户模型
const Products = require('../dbs/models/products.js')
const utils = require('./utils/utils.js')

let router = new Router({
  prefix:'/product'
})

router.get('/', async (ctx,next)=>{
  let products = await Products.find({}).limit(10)
  utils.preUrl(products)
    ctx.body = {
      products
    }
})

module.exports = router

// product接口
import Router from 'koa-router'
// 引入用户模型
import {Product,Image} from '../dbs/models/index.js'
let router = new Router({
  prefix:'/product'
})

router.get('/', async (ctx,next)=>{
  let products = await Product.findAll({
    include:[{
      model:Image
    }],
    'limit':10
  })
    ctx.body = {
      products
    }
})

export default router


// product接口
import Router from 'koa-router'
// 引入用户模型
import utils from './utils/utils.js'

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

export default router


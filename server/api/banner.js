// banner接口
import Router from 'koa-router'
// 引入用户模型
import utils from './utils/utils.js'
import { Banner,Image } from '../dbs/models/index.js'
let router = new Router({
  prefix:'/banner'
})

router.get('/', async (ctx,next)=>{
  let banner = await Banner.findAll({
    include:[{
      model:Image
    }]
  })
  // utils.preUrl(banner)
    ctx.body = {
      banner
    }
})

export default router


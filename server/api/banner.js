// banner接口
const Router = require('koa-router');
// 引入用户模型
const Banner = require('../dbs/models/banner.js')

let router = new Router({
  prefix:'/banner'
})

router.get('/', async (ctx,next)=>{
  let banner = await Banner.find({})
    ctx.body = {
      banner
    }
})

module.exports = router

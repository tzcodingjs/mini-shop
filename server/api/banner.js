// banner接口
const Router = require('koa-router');
// 引入用户模型
const Banner = require('../dbs/models/banners.js')
const Image = require('../dbs/models/images.js')
const utils = require('./utils/utils.js')

let router = new Router({
  prefix:'/banner'
})

router.get('/', async (ctx,next)=>{
  let banner = await Banner.findAll({
    include:[{
      model:Image
    }]
  })
  utils.preUrl(banner)
    ctx.body = {
      banner
    }
})

module.exports = router

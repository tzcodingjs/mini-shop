/* // banner接口
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
 */
const Router = require('koa-router');
const query = require('../dbs/config.js')

let router = new Router({
  prefix:'/banner'
})

router.get('/', async (ctx,next)=>{
  let sql = 'SELECT b.productsId, b.img_id, i.url FROM banner as b JOIN image as i ON b.img_id = i.id'
  let banner = await query(sql)
    ctx.body = {
      banner
    }
})

module.exports = router

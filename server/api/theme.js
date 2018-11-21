// theme接口
const Router = require('koa-router');
// 引入用户模型
const Themes = require('../dbs/models/themes.js')
const utils = require('./utils/utils.js')

let router = new Router({
  prefix:'/theme'
})

router.get('/', async (ctx,next)=>{
  let themes = await Themes.findOne({'themesId':'001'})
  // utils.preUrl(themes)
    ctx.body = {
      themes
    }
})

module.exports = router

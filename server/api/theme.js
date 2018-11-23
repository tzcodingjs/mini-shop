// theme接口
const Router = require('koa-router')
// 引入用户模型
const Themes = require('../dbs/models/themes.js')
const Image = require('../dbs/models/images.js')
const Products = require('../dbs/models/products.js')
const Theme_product = require('../dbs/models/theme_products.js')
const utils = require('./utils/utils.js')

let router = new Router({
  prefix: '/theme'
})

router.get('/', async (ctx, next) => {
  let themes = await Themes.findAll({
    include: [{
        model: Image,
      },{
        model:Theme_product,
        as:'theme_products'
      }
    ],
    attributes:{exclude:['head_img_id']}
  })
  // utils.preUrl(themes)
  ctx.body = {
    themes
  }
})

module.exports = router

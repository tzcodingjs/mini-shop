// theme接口
import Router from 'koa-router'
// 引入用户模型
import utils from './utils/utils.js'

let router = new Router({
  prefix: '/theme'
})

router.get('/', async (ctx, next) => {
  let themes = await Themes.findAll({
    include: [{
        model: Image,
      },
      // {
      //   model: Theme_product,
      // },
      {
        model: Products,
      }
    ],
    attributes: {
      exclude: ['head_img_id']
    }
  })
  // utils.preUrl(themes)
  ctx.body = {
    themes
  }
})

export default router


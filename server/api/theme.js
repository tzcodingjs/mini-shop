// theme接口
import Router from 'koa-router'
// 引入用户模型
import utils from './utils/utils.js'
import {Theme, Product, Image } from '../dbs/models/index.js'
let router = new Router({
  prefix: '/theme'
})

router.get('/', async (ctx, next) => {
  let themes = await Theme.findAll({
    include: [{
        model: Image,
      },
      {
        model: Product,
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


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
        include:[{
          model:Image
        }],
        attributes: {
          exclude: ['stock','category_id','main_img_url','topic_img_id','img_id']
        }
      }
    ],
    attributes: {
      exclude: ['name','head_img_id','description','topic_img_id','theme_product']
    }
  })
  // utils.preUrl(themes)
  ctx.body = {
    themes
  }
})

export default router


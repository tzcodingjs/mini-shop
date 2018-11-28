// theme接口
import Router from 'koa-router'
// 引入用户模型
import {Theme, Product, Image } from '../dbs/models/index.js'

let router = new Router({
  prefix: '/theme'
})

router.post('/', async (ctx, next) => {
  const { id } = ctx.request.body
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
    },
    where:{
      id:id
    }
  })
  ctx.body = {
    success:true,
    themes
  }
})

export default router


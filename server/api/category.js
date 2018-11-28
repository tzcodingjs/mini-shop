// category接口
import Router from 'koa-router'
// 引入用户模型
import {Category,Product,Image} from '../dbs/models/index.js'

let router = new Router({
  prefix:'/category'
})

router.get('/all', async (ctx,next)=>{
  let category = await Category.findAll({
      include:[{
        model:Image,
      },{
        model:Product,
        include:[{
          model:Image
        }],
        attributes:{
          exclude:['price','stock','category_id','main_img_url']
        }
      }],
      attributes:{
        exclude:['topic_img_id']
      }
    })

    ctx.body = {
      success:true,
      category
    }
})

export default router


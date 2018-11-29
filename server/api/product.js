// product接口
import Router from 'koa-router'
// 引入用户模型
import {Product,Image,Product_image} from '../dbs/models/index.js'
let router = new Router({
  prefix:'/product'
})

router.get('/', async (ctx,next)=>{
  let products = await Product.findAll({
    include:[{
      model:Image
    }],
    'limit':10
  })
    ctx.body = {
      products
    }
})

router.post('/detail', async (ctx,next)=>{
  const { id } = ctx.request.body
  if(!id){
    return
  }
  let products = await Product.findOne({
    include:[{
      model:Image,
      attributes:{
        exclude:['id']
      }
    },{
      model:Product_image,
      include:[{
        model:Image
      }],
      attributes:{
        exclude:['id','img_id','product_id']
      },
    }],
    attributes:{
      exclude:['category_id','img_id']
    },
    where:{
      id:id
    }
  })
    ctx.body = {
      success:true,
      products
    }
})

export default router


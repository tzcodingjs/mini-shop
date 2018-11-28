
// koa入口文件
import Koa from 'koa'
import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
// 处理与post相关的请求
// import body from 'koa-body'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'

// 引入接口
import banner from './api/banner.js'
import product from './api/product.js'
import theme from './api/theme.js'
import category from './api/category.js'

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// 错误处理
onerror(app)

// 中间件
app.use(bodyparser())
// app.use(body())
app.use(json())
app.use(logger())


// 静态资源处理，配置路径
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 路由
app.use(banner.routes()).use(banner.allowedMethods())
app.use(product.routes()).use(product.allowedMethods())
app.use(theme.routes()).use(theme.allowedMethods())
app.use(category.routes()).use(category.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(port, host)

export default app

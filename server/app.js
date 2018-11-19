
// koa入口文件
const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
// 处理与post相关的请求
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

// 引入mongoose
const mongoose = require('mongoose')
// 数据库相关配置
const dbConfig = require('./dbs/config.js')
// 引入接口
const banner = require('./api/banner.js')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// 错误处理
onerror(app)

// 中间件
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

// 连接数据库
mongoose.connect(dbConfig.dbs,{
  useNewUrlParser:true
})

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

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(port, host)

module.exports = app

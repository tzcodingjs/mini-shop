
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// 引入only-ui组件
import onlyUi from 'only-ui'

Vue.use(onlyUi)

// 设置访问链接(临时)
Vue.prototype.baseUrl = 'http://127.0.0.1:3000/images'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

import cart from './cart'
import address from './address'

// vuex
export default new Vuex.Store({
  modules:{
    cart,
    address
  }
})

// actions
export default {
  plus({ commit }, id) {
    commit('plus', id)
  },
  minus({ commit }, id) {
    commit('minus', id)
  },
  addGoods({ commit }, data) {
    commit('addGoods', data)
  },
  deleteGoods({ commit }, id) {
    commit('deleteGoods', id)
  },
  selectAll({ commit }) {
    commit('selectAll')
  },
  selectCancel({ commit }, id) {
    commit('selectCancel', id)
  }
}

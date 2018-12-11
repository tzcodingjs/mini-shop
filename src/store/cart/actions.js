// actions
export default {
  plus(ctx,id){
    ctx.commit('plus',id)
  },
  minus(){

  },
  addGoods(ctx,data){
    ctx.commit('addGoods',data)
  },
  deleteGoods(ctx,data){
    ctx.commit('deleteGoods',data)
  }
}

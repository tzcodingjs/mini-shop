// getter
export default {
  // 总数量
  totalNum(state){
    let cart = state.cart;
    let totalNum = null;
    for(let i in cart){
      totalNum += cart[i].count
    }
    return totalNum;
  },
  // 总价格
  totalPrice(state){
    let cart = state.cart;
    let base = 1000;
    let totalPrice = null;
    for(let i in cart){
      totalPrice += cart[i].count * cart[i].price * base
    }
    return totalPrice/base;
  }
}

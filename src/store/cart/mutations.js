export default {
  plus(state, id) {
   let cart = state.cart;
   for(let i in cart){
     if(cart[i].id === id){
       cart[i].count += 1
     }
   }
     return
  },
  minus() {

  },
  addGoods(state, data) {
    let cart = state.cart;
    for (let i in cart) {
      if (cart[i].id === data.id) {
        cart[i].count += data.count
        return
      }
    }
    cart.push(data);
  },
  deleteGoods(state, data) {
    console.log(state)
  }
}

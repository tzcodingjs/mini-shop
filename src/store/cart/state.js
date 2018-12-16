// state

let storage = window.localStorage;
let defaultCart = JSON.parse(storage.getItem('cartList'));
try {
  if(!defaultCart){
    defaultCart = [];
  }
} catch (error) {

}

export default {
  cart: defaultCart,
  selectAll:true
}

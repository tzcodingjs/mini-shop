<template>
  <div :class="$style.container">
    <p v-if="!cartList.length">您还没有添加任何商品，快去添加吧！</p>
    <template v-else>
      <div :class="$style.cartItem" v-for="(item,index) in cartList" :key="index">
        <!-- checkbox -->
        <img
          v-if="item.status"
          src="../../../assets/images/icon/circle@selected.png"
          :class="$style.check"
          @click.stop="selectCancel(item.id)"
        >
         <img
          v-else
          src="../../../assets/images/icon/circle@noselected.png"
          :class="$style.check"
          @click.stop="selectCancel(item.id)"
        >
        <div :class="$style.cartImg">
          <img :src="baseUrl + item.main_img_url" alt="picture">
        </div>
        <div :class="$style.text">
          <div :class="$style.num">
            <span>{{ item.name }}</span>
            <div :class="$style.counter">
              <span :class="$style.minus" @click.stop="minus(item.id,item.count)">-</span>
              <span :class="$style.number">{{ item.count }}</span>
              <span :class="$style.plus" @click.stop="plus(item.id,item.count)">+</span>
            </div>
          </div>
          <div :class="$style.monery">
            <span>￥{{ item.price }}</span>
            <span :class="$style.x" @click.stop="deleteGoods(item.id)">x</span>
          </div>
        </div>
      </div>
      <div :class="$style.conutBanner">
        <div @click.stop="selectAll" :class="$style.selectAll">
          <img v-if="isSelectAll" src="../../../assets/images/icon/all@selected.png" :class="$style.selected">
          <img v-else src="../../../assets/images/icon/all.png" :class="$style.selected">
          <span>全选({{ totalNum }})</span>
        </div>
        <span :class="$style.toBuy">下单</span>
        <i>|</i>
        <span>￥{{ totalPrice }}</span>
        <img src="../../../assets/images/icon/arrow.png" alt="icon">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: [],
      baseUrl: this.baseUrl
    };
  },
  computed: {
    cartData() {
      let data = this.$store.state.cart.cart;
      return data && data.length > 0 ? data : [];
    },
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    totalNum() {
      return this.$store.getters.totalNum;
    },
    isSelectAll(){
      return this.$store.getters.selectAllStatus;
    }
  },
  methods: {
    getCartList() {
      let data = this.cartData;
      this.cartList = data;
    },
    // 增加数量
    plus(id) {
      this.$store.dispatch("plus", id);
    },
    // 减少数量
    minus(id) {
      this.$store.dispatch("minus", id);
    },
    // 删除商品
    deleteGoods(id) {
      this.$store.dispatch("deleteGoods", id);
    },
    // checkbox
    selectCancel(id) {
      this.$store.dispatch('selectCancel',id)
    },
    selectAll(){
      this.$store.dispatch('selectAll')
    }
  },
  created() {
    this.getCartList();
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.container {
  margin-top: 86px;
  margin-bottom: 180px;
  @include flex;
  .cart-item {
    @include flex(row);
    height: 186px;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid #d0d0d7;
    .check {
      width: 40px;
      margin-left: 20px;
    }
    .cart-img {
      width: 186px;
      img {
        display: block;
        width: 100%;
      }
    }
    .text {
      flex: 1;
      height: 100%;
      font-size: 28px;
      @include flex(row);
      justify-content: space-between;
      color: #454553;
      .num {
        @include flex;
        justify-content: space-between;
        .counter {
          font-size: 28px;
          .number {
            display: inline-block;
            width: 100px;
            text-align: center;
          }
          .minus {
            font-size: 40px;
          }
          .plus {
            font-size: 50px;
          }
        }
      }
      .monery {
        @include flex;
        font-size: 36px;
        justify-content: space-between;
        align-items: flex-end;
        padding-right: 10px;
        .x {
          padding-bottom: 10px;
        }
      }
    }
  }
  & > p {
    margin-top: 60px;
    text-align: center;
    color: #ddd;
    font-size: 28px;
  }
  .conut-Banner {
    @include flex(row);
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 90px;
    font-size: 28px;
    position: fixed;
    bottom: 90px;
    background-color: #ab956d;
    color: #fff;
    .selectAll{
      @include flex(row);
       align-items: center;
    }
    .selected {
      width: 48px;
      height: 48px;
      margin: 0 10px;
    }
    .to-buy {
      width: 220px;
      text-align: right;
      margin-right: 50px;
    }
  }
}
</style>

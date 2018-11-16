<template>
  <div :class="$style.container">
    <p v-if="cartList" >您还没有添加任何商品，快去添加吧！</p>
    <template v-else>
      <div :class="$style.cartItem">
        <img src="../../../assets/images/icon/circle@noselected.png" alt="" :class="$style.check">
        <div :class="$style.cartImg">
          <img src="../../../assets/images/test/product-dryfruit@1.png" alt="">
        </div>
        <div :class="$style.text">
          <div :class="$style.num">
            <span>梨花带雨</span>
            <div :class="$style.counter">
              <i :class="$style.minus">-</i>
              <span :class="$style.number">2</span>
              <i :class="$style.plus">+</i>
            </div>
          </div>
          <div :class="$style.monery">
            <span>￥0.01</span>
            <span :class="$style.x">x</span>
          </div>
        </div>
      </div>
      <div :class="$style.conutBanner">
        <img src="../../../assets/images/icon/all@selected.png" alt="" :class="$style.selected">
        <span>全选(2)</span>
        <span :class="$style.toBuy">下单</span>
        <i>|</i>
        <span>￥0.001</span>
        <img src="../../../assets/images/icon/arrow.png" alt="">
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartList: [
        {
          title:false
        }
      ]
    };
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.container {
  margin-top: 86px;
  @include flex;
  .cart-item {
    @include flex(row);
    height: 186px;
    padding: 20px;
    align-items: center;
    border-bottom: 1px solid #d0d0d7;
    .check {
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

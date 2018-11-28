<template>
  <div>
    <!-- 页头 -->
    <pheader title="商品详情"></pheader>
    <!-- 购物车 -->
    <div :class="$style.cart">
      <span :class="$style.cartNumber">10</span>
    </div>
    <div :class="$style.container">
      <div
        v-for="(item,idx) in products"
        :key="idx"
      >
      <!-- 头部 -->
        <div :class="$style.head">
          <div :class="$style.img">
            <img
              :src="item.headimg"
              alt="productImage"
            >
          </div>
          <div :class="$style.btnPanel">

          </div>
          <p
            v-if="item.stock"
            :class="$style.stock"
          >有货</p>
          <p
            v-else
            :class="$style.stock"
          >无货</p>
          <p :class="$style.name">{{ item.name }}</p>
          <p :class="$style.price">￥{{ item.price }}</p>
        </div>
        <!-- 产品详情部分 -->
        <div :class="$style.productDetail">
          <!-- tabs -->
          <ul :class="$style.list">
            <li v-for="(item,idx) in tabs"
            :key="idx"
            :class="{[$style.active]:idx == init}"
            @click="selectOne($event,idx)">{{ item.name }}</li>
          </ul>
          <div class="productCon">
            <div class="proImage"></div>
            <div class="proDesc"></div>
            <div class="protect"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import t1 from "@/assets/images/test/detail-13@1-dryfruit.png";
import Pheader from "@/components/public/header.vue";
export default {
  name: "detail",
  components: {
    Pheader
  },
  data() {
    return {
      init:0,
      tabs:[{
        name:'商品详情'
      },{
        name:'产品参数'
      },{
        name:'售后保障'
      }],
      products: [
        {
          headimg: t1,
          name: "贵妃笑100克",
          stock: 989,
          price: "0.01"
        }
      ]
    };
  },
  methods:{
    selectOne:function($event, idx){
      this.init = idx
    }
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.cart{
  position:fixed;
  top:120px;
  right:30px;
  width:64px;
  height:64px;
  background:url('@/assets/images/icon/cart@top.png') no-repeat center;
  background-size:cover;
  .cartNumber{
    position: absolute;
    top:-2px;
    left:-24px;
    width:40px;
    height:40px;
    line-height:40px;
    text-align: center;
    font-size:26px;
    color:#fff;
    background:#ab956d;
    border-radius:100%;
  }
}
.container {
  @include flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 86px;
  background: #f9f9f9;
  .head {
    width: 100vw;
    background: #fff;
    padding-bottom: 20px;
    margin-bottom:20px;
    .img {
      padding-top: 80px;
      overflow: hidden;
    }
    .btnPanel {
      @include flex(row);
      width: 660px;
      height: 100px;
      margin: 60px auto;
      border-radius: 100px;
      background-color: #ab956d;
      color: #fff;
      align-items: center;
    }
    p{
      margin-top:20px;
    }
    .stock {
      font-size: 24px;
    }
    .name {
      font-size: 40px;
    }
    .price {
      font-size: 38px;
    }
  }
  .productDetail{
    background:#fff;
    .list{
      @include flex(row);
      height:90px;
      line-height:90px;
      color:#c7c7cb;
      font-size:28px;
      border-bottom:1px solid #d0d0d7;
      li{
        height:90px;
        flex:1;
      }
      li.active{
        color:#ab956d;
        border-bottom:1px solid #ab956d;
      }
    }
  }
}
</style>

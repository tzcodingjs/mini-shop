<template>
  <div>

    <!-- 页头 -->
    <pheader title="商品详情"></pheader>

    <!-- 购物车 -->
    <div :class="$style.cart">
      <span :class="$style.cartNumber">10</span>
    </div>

    <div :class="$style.container" v-for="(item,idx) in products" :key="idx">

      <!-- 头部 -->
      <div :class="$style.head">
        <div :class="$style.img">
          <img :src="baseUrl + item.main_img_url" alt="productImage">
        </div>
        <div :class="$style.btnPanel">
          <div :class="$style.picker">
            <span>数量</span>
            <span>1</span>
            <span>
              <img src="@/assets/images/icon/arrow@down.png" alt="picker">
            </span>
          </div>
          <span :class="$style.middle"></span>
          <div :class="$style.addCart">
            <span>加入购物车</span>
            <span>
              <img src="@/assets/images/icon/cart.png" alt="addCart">
            </span>
          </div>
        </div>
        <p v-if="item.stock" :class="$style.stock">有货</p>
        <p v-else :class="$style.stock">无货</p>
        <p :class="$style.name">{{ item.name }}</p>
        <p :class="$style.price">￥{{ item.price }}</p>
      </div>

      <!-- 产品详情部分 -->
      <div :class="$style.productDetail">
        <!-- tabs -->
        <ul :class="$style.list">
          <li
            v-for="(tab, idx) in tabs"
            :key="idx"
            :class="{[$style.active]:idx == init}"
            @click="selectOne($event,idx)"
          >{{ tab.name }}</li>
        </ul>
        <div :class="$style.productCon">
          <div :class="$style.proImage" v-show="init == 0">
            <img
              v-for="(img,idx) in item.product_images"
              :key="idx"
              :src="baseUrl + img.image.url"
              alt="detailImg"
            >
          </div>
          <div :class="$style.proDesc" v-show="init == 1">
            <div>
              <span :class="$style.title">品名</span><span>贵妃笑</span>
            </div>
            <div>
              <span :class="$style.title">口味</span><span>酸、甜、苦、辣</span>
            </div>
            <div>
              <span :class="$style.title">产地</span><span>上海市</span>
            </div>
            <div>
              <span :class="$style.title">保质期</span><span>180天</span>
            </div>
          </div>
          <div :class="$style.protect" v-show="init == 2">
            <p>七天无理由免费退货</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Pheader from "@/components/public/header.vue";
export default {
  name: "detail",
  components: {
    Pheader
  },
  data() {
    return {
      init: 0,
      baseUrl: this.baseUrl,
      tabs: [
        {
          name: "商品详情"
        },
        {
          name: "产品参数"
        },
        {
          name: "售后保障"
        }
      ],
      products: []
    };
  },
  methods: {
    selectOne: function($event, idx) {
      this.init = idx;
    },
    getProductDetail: function(id) {
      let _this = this;
      axios.post("api/product/detail", {
          id: id
        }).then(response => {
          if (response.status === 200) {
            _this.products = response.data;
          }
        });
    }
  },
  created() {
    let id = this.$route.params.id;
    this.getProductDetail(id);
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.cart {
  position: fixed;
  top: 120px;
  right: 30px;
  width: 64px;
  height: 64px;
  background: url("@/assets/images/icon/cart@top.png") no-repeat center;
  background-size: cover;
  .cartNumber {
    position: absolute;
    top: -2px;
    left: -24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 26px;
    color: #fff;
    background: #ab956d;
    border-radius: 100%;
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
    margin-bottom: 20px;
    .img {
      padding-top: 80px;
      overflow: hidden;
    }
    .btnPanel {
      @include flex(row);
      width: 660px;
      height: 100px;
      font-size:28px;
      margin: 60px auto;
      border-radius: 100px;
      background-color: #ab956d;
      color: #fff;
      align-items: center;
      &>div{
         @include flex(row);
        //  box-sizing: border-box;
         justify-content: space-around;
      }
      .picker{
        width:50%;
        align-items: center;
        img{
          margin-top:6px;
          width:50px;
        }
      }
      .middle{
        display:inline-block;
        width:1px;
        height:40px;
        border:1px dotted #fff;
      }
      .addCart{
        width:49%;
      }
    }
    p {
      margin-top: 20px;
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
  .productDetail {
    width:100%;
    background: #fff;
    .list {
      @include flex(row);
      height: 90px;
      line-height: 90px;
      color: #c7c7cb;
      font-size: 28px;
      border-bottom: 1px solid #d0d0d7;
      li {
        height: 90px;
        flex: 1;
      }
      li.active {
        color: #ab956d;
        border-bottom: 1px solid #ab956d;
      }
    }
    .proImage{
      font-size:0;
      img{
        width:100%;
        display:block;
      }
    }
    .productCon {
      padding-top: 20px;
      font-size: 24px;
      .proDesc {
        @include flex;
        align-items: flex-start;
        .title {
          width: 100px;
          display: inline-block;
          text-align: center;
          padding-left: 40px;
          color: #808080;
        }
        span {
          padding-left: 60px;
          color: #333;
        }
        & > div {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>

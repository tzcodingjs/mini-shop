<template>
  <div>
    <panel title="精选主题">

      <!-- 插入自定义内容 -->
      <div :class="$style.theme">
        <div :class="$style.themeItem">
          <router-link :to="{name:'Theme',params:{id:'001'}}">
            <img src="../../../assets/images/test/1@theme.png" alt="theme">
          </router-link>
        </div>
        <div :class="$style.themeItem">
          <router-link :to="{name:'Theme',params:{id:'002'}}">
            <img src="../../../assets/images/test/2@theme.png" alt="theme">
          </router-link>
        </div>
        <div :class="[$style.themeItem,$style.big]">
          <router-link :to="{name:'Theme',params:{id:'003'}}">
            <img src="../../../assets/images/test/3@theme.png" alt="theme">
          </router-link>
        </div>
      </div>
    </panel>
    <panel title="最近新品"
    :products="productsRecent"
    :listClass="$style.list"
    :itemClass="$style.item"
    :imgClass="$style.img"
    :titleClass="$style.title"
    :priceClass="$style.price" />
  </div>
</template>

<script>
import panel from "@/components/panel.vue";
import t1 from "../../../assets/images/test/product-cake-a@3.png";
import t2 from "../../../assets/images/test/product-dryfruit@4.png";
import t3 from "../../../assets/images/test/product-rice@7.png";
export default {
  components: {
    panel
  },
  props:{
    productsRecent:{
      type:Array,
      default:()=>{return []}
    }
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.theme {
  @include flex($direction: row);
  justify-content: space-between;
  .theme-item {
    height: 375px;
    border-bottom: 4px solid #fff;
    box-sizing: border-box;
    &:first-child {
      border-right: 4px solid #fff;
    }
    img {
     display: block;
     height: 100%;
    }
    &.big img {
      width:100vw;
    }
  }
}
.list {
  @include flex($direction: row);
  margin: 0 20px 90px 20px;
  justify-content: space-between;
  .item {
    min-height: 300px;
    width: 49%;
    border-radius: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    background-color: #f5f6f5;
    text-align: center;
    .img {
      margin: 0 auto 0 auto;
      width: 80%;
      height: 220px;
      border-radius: 10px;
    }
    .title {
      font-size: 28px;
      margin-bottom: 6px;
    }
    .price {
      font-size: 24px;
      margin-bottom: 6px;
    }
  }
}
</style>

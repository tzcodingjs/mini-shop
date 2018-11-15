<template>
  <div>
    <panel title="精选主题">
      <!-- 插入自定义内容 -->
      <div :class="$style.theme">
        <div :class="$style.themeItem">
          <router-link to="/">
            <img src="../../../assets/images/test/1@theme.png" alt="theme">
          </router-link>
        </div>
        <div :class="$style.themeItem">
          <router-link to="/">
            <img src="../../../assets/images/test/2@theme.png" alt="theme">
          </router-link>
        </div>
        <div :class="[$style.themeItem,$style.big]">
          <router-link to="/">
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
  data() {
    return {
      productsRecent: [
        {
          id:'1',
          imgSrc: t1,
          title: "锈色瓜子",
          price: "0.01"
        },
        {
          id:'2',
          imgSrc: t2,
          title: "锈色瓜子",
          price: "0.01"
        },
        {
          id:'3',
          imgSrc: t3,
          title: "锈色瓜子",
          price: "0.01"
        }
      ]
    };
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.theme {
  @include flex($direction: row);
  align-content: space-between;
  .theme-item {
    display: flex;
    height: 375px;
    width: 50%;
    border-bottom: 4px solid #fff;
    position: relative;
    box-sizing: border-box;
    &:first-child {
      border-right: 4px solid #fff;
    }
    &.big {
      width: 100%;
    }
  }
  img{
    width:100%;
    height:100%;
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

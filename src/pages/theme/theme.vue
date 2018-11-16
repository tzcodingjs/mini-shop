<template>
  <div>
    <myHeader />
    <div :class="$style.container">
      <div :class="$style.themeImg">
        <img src="../../assets/images/test/1@theme-head.png" alt="theme">
      </div>
      <tpanel :class="$style.panel"
      :products="products"
      :listClass="$style.list"
      :itemClass="$style.item"
      :imgClass="$style.img"
      :titleClass="$style.title"
      :priceClass="$style.price"></tpanel>
    </div>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/public/header.vue";
import tpanel from "@/components/panel.vue";
import myFooter from "@/components/public/footer.vue";
import t1 from "../../assets/images/test/product-cake-a@3.png";
import t2 from "../../assets/images/test/product-dryfruit@4.png";
import t3 from "../../assets/images/test/product-rice@7.png";
export default {
  name: "Theme",
  components: {
    myHeader,
    tpanel,
    myFooter
  },
  data() {
    return {
      products: [
        {
          id: "1",
          imgSrc: t1,
          title: "锈色瓜子",
          price: "0.01"
        },
        {
          id: "2",
          imgSrc: t2,
          title: "锈色瓜子",
          price: "0.01"
        },
        {
          id: "3",
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
.container {
  @include flex;
  margin-top: 86px;
  .theme-img {
    width: 100%;
    height: 400px;
    img {
      display: block;
      width: 100%;
    }
  }
  .panel {
    @include panel;
    &>p {
      display: none;
    }
  }
  .list {
  @include flex($direction: row);
  margin: 40px 20px 90px 20px;
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
}
</style>

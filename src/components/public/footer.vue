<template>
  <div :class="$style.footer">
    <router-link to="/" :class="$style.item">
      <span :class="$style.home"></span>
      <p>主页</p>
    </router-link>
    <router-link to="/category" :class="$style.item">
      <span :class="$style.category"></span>
      <p>分类</p>
    </router-link>
    <router-link to="/cart" :class="$style.item">
      <span :class="$style.cart"></span>
      <p>购物车</p>
    </router-link>
    <router-link to="/personal" :class="$style.item">
      <span :class="$style.personal"></span>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "myfooter"
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.footer {
  @include flex($direction: row);
  position: fixed;
  width: 100%;
  bottom: 0;
  height:90px;
  background: #f5f5f5;
  align-items: center;
  .item {
    @include flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    span {
      display: inline-block;
      width: 40px;
      height: 40px;
    }
    .home {
      background: url("../../assets/images/toolbar/home.png") no-repeat;
      background-size: 40px 40px;
    }
    .category {
      background: url("../../assets/images/toolbar/category.png") no-repeat;
      background-size: 40px 40px;
    }
    .cart {
      background: url("../../assets/images/toolbar/cart.png") no-repeat;
      background-size: 40px 40px;
    }
    .personal {
      background: url("../../assets/images/toolbar/my.png") no-repeat;
      background-size: 40px 40px;
    }
    p {
      font-size:24px;
      color: #989898;
    }
  }
}
</style>

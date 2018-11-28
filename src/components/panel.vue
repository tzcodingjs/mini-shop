<template>
  <div :class="$style.panel">
    <!-- 小标题 -->
    <p :class="$style.title">{{ title }}</p>
    <slot></slot>
    <div :class="listClass">
      <!-- 产品模块 -->
      <div :class="itemClass" v-for="(item,idx) in products" :key="idx">
        <router-link :to="{name:'Detail',params:{id:item.id}}">
          <img :src="baseUrl + item.image.url" alt="products" :class="imgClass">
          <p :class="titleClass">{{ item.name }}</p>
          <p :class="priceClass" v-if="item.price">{{ item.price }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listClass: {
      type: String,
      default: "$style.list"
    },
    itemClass: {
      type: String,
      default: "$style.item"
    },
    imgClass: {
      type: String,
      default: "$style.img"
    },
    titleClass: {
      type: String,
      default: "$style.title"
    },
    priceClass: {
      type: String,
      default: "$style.price"
    },
    title: {
      type: String,
      default: ""
    },
    products: {
      type: Array
    }
  },
  data(){
    return {
      baseUrl:this.baseUrl
    }
  }
};
</script>
<style lang='scss' module>
@import '@/assets/css/layout.scss';
.panel{
  @include panel;
}
</style>

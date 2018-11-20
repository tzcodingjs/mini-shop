<template>
  <div :class="swiperClass">
    <swiper :options="options">
      <swiper-slide v-for="(item,idx) in items" :key="idx">
        <!-- 图片 -->
        <router-link :to="{ name:'Detail',params:{ id:item.id }}">
          <img :src="item.imgSrc" :alt="item.alt" class="img">
        </router-link>
      </swiper-slide>
      <!-- 分页器选项 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "slider",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {};
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        };
      }
    },
    items: {
      type: Array,
      default: []
    },
    swiperClass: {
      type: String,
      default: "swiper"
    }
  }
};
</script>
<style lang='scss'>
.swiper {
  .img {
    width: 100%;
  }
}
// 自定义分页器样式
.swiper-pagination-bullet {
  width: 16px !important;
  height: 16px !important;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #000;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 20px;
}
</style>

<template>
  <div :class="$style.slider">
    <slider :items="items"/>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'
import banner1 from '@/assets/images/test/banner-1a.png'
import banner2 from '@/assets/images/test/banner-2a.png'
import banner3 from '@/assets/images/test/banner-3a.png'
export default {
  components:{
    slider
  },
  data () {
    return {
      items:[
        {
          href:'/',
          imgSrc:banner1,
          alt:'banner'
        },
        {
          href:'/',
          imgSrc:banner2,
          alt:'banner'
        },{
          href:'/',
          imgSrc:banner3,
          alt:'banner'
        }
      ]
    };
  }
}

</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.slider{
  margin-top:rem(86);
}
</style>

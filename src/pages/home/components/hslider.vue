<template>
  <div :class="$style.slider">
    <slider :items="items"/>
  </div>
</template>

<script>
import slider from '@/components/slider.vue'
export default {
  components:{
    slider
  },
  props:{
    items:{
      type:Array,
      default:()=>{return []}
    }
  }
}

</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.slider{
  margin-top:rem(86);
}
</style>

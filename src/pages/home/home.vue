<template>
  <div :class="$style.container">
     <myHeader/>
     <myFooter/>
  </div>
</template>

<script>
import myHeader from '@/components/header/header.vue'
import myFooter from '@/components/footer/footer.vue'
export default {
  components:{
    myHeader,
    myFooter
  },
  data () {
    return {

    };
  }
}

</script>
<style lang='scss' module>
@import '@/assets/css/layout.scss';
.container{
  @include flex;

}
</style>

<template>
  <div :class="$style.header">
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name:'myheader',
  props: {
    title: {
      type: String,
      default: "零食商贩"
    }
  }
};
</script>
<style lang='scss' module>
@import '@/assets/css/layout.scss';
.header{
  position:fixed;
  top:0;
  width:100%;
  height:rem(86);
  line-height:rem(86);
  text-align: center;
  background:#AB956D;
  span{
    color:#fff;
  }
}
</style>

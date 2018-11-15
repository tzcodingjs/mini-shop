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
  height:86px;
  line-height:86px;
  font-size:30px;
  text-align: center;
  background:#AB956D;
  z-index:2;
  span{
    color:#fff;
  }
}
</style>

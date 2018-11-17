<template>
  <div>
    <myHeader title="我的" />
    <personInfo></personInfo>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/public/header.vue";
import personInfo from "./components/personInfo.vue";
import myFooter from "@/components/public/footer.vue";
export default {
  components: {
    myHeader,
    personInfo,
    myFooter
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
</style>

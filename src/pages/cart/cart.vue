<template>
  <div>
    <myHeader title="购物车"/>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/public/header.vue";
import myFooter from "@/components/public/footer.vue";
export default {
  components: {
    myHeader,
    myFooter
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
</style>

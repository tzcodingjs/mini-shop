<template>
  <div>
    <myHeader title="购物车"/>
    <cartCon></cartCon>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/public/header.vue";
import cartCon from "./components/cartCon.vue"
import myFooter from "@/components/public/footer.vue";
export default {
  components: {
    myHeader,
    cartCon,
    myFooter
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
</style>

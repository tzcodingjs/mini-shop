<template>
  <div>
    <myHeader title="我的" />
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/header/header.vue";
import myFooter from "@/components/footer/footer.vue";
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

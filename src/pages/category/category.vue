<template>
  <div>
    <myHeader title="分类" />
    <cpanel />
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/public/header.vue";
import cpanel from "./components/cpanel.vue";
import myFooter from "@/components/public/footer.vue";
export default {
  components: {
    myHeader,
    cpanel,
    myFooter
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss'>
</style>

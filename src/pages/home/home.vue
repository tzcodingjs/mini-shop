<template>
  <div>
    <myHeader />
    <hSlider />
    <hPanel />
    <myFooter />
  </div>
</template>

<script>
import myHeader from "@/components/public/header.vue";
import hSlider from "./components/hslider.vue";
import hPanel from "./components/hpanel.vue";
import myFooter from "@/components/public/footer.vue";
export default {
  components: {
    myHeader,
    hSlider,
    hPanel,
    myFooter
  },
  created() {
    // 主页数据请求
    this.axios
      .get("api/banner")
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

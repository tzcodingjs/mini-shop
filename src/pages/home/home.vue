<template>
  <div>
    <myHeader />
    <hSlider :items="items"/>
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
  data(){
    return {
      items:[]
    }
  },
  created() {
    // 主页banner数据请求
    this.axios
      .get("api/banner")
      .then((response) => {
        this.items = response.data.banner
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

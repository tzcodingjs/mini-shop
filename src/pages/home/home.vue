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
  }
};
</script>

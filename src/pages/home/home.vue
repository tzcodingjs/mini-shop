<template>
  <div>
    <myHeader />
    <hSlider :items="items" />
    <hPanel :productsRecent="productsRecent" />
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
  data() {
    return {
      items: [],
      productsRecent: []
    };
  },
  methods: {
    getBanner:function(){
      let _this = this
      _this.axios
        .get("api/banner")
        .then(response => {
          _this.items = response.data.banner;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getRecent:function(){
      let _this = this
      _this.axios
        .get("api/product")
        .then(response => {
          _this.productsRecent = response.data.products;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getBanner();
    this.getRecent();
  }
};
</script>

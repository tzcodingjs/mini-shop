<template>
  <div>
    <myHeader />
    <hSlider :items="items" />
    <hPanel :productsRecent="productsRecent" />
    <myFooter />
  </div>
</template>

<script>
import axios from 'axios';
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
      axios.get("api/banner")
        .then(response => {
          this.items = response.data.banner;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getRecent:function(){
      axios.get("api/product")
        .then(response => {
          this.productsRecent = response.data.products;
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

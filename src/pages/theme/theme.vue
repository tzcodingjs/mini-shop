<template>
  <div>
    <myHeader />
    <div :class="$style.container" v-for="(item,idx) in products" :key="idx" >
      <div :class="$style.themeImg">
        <img :src="baseUrl + item.image.url" alt="theme">
      </div>
      <tpanel :class="$style.panel"
      :products="item.products"
      :listClass="$style.list"
      :itemClass="$style.item"
      :imgClass="$style.img"
      :titleClass="$style.title"
      :priceClass="$style.price"></tpanel>
    </div>
    <myFooter />
  </div>
</template>

<script>
import axios from 'axios'
import myHeader from "@/components/public/header.vue";
import tpanel from "@/components/panel.vue";
import myFooter from "@/components/public/footer.vue";
export default {
  name: "Theme",
  components: {
    myHeader,
    tpanel,
    myFooter
  },
  data() {
    return {
      baseUrl:this.baseUrl,
      products: []
    };
  },
  methods:{
    getTheme:function(id){
      let _this = this
      axios.post('api/theme',{
        id:id
      }).then(function(response){
        let data = response.data;
        if(data.success == true){
          _this.products = data.themes
        }
      })
    }
  },
  created(){
    let id = this.$route.params.id;
    this.getTheme(id);
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.container {
  @include flex;
  margin-top: 86px;
  .theme-img {
    width: 100%;
    height: 400px;
    img {
      display: block;
      width: 100%;
    }
  }
  .panel {
    &>p {
      display: none;
    }
  }
  .list {
  @include flex($direction: row);
  margin: 40px 20px 90px 20px;
  justify-content: space-between;
  .item {
    min-height: 300px;
    width: 49%;
    border-radius: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    background-color: #f5f6f5;
    text-align: center;
    .img {
      margin: 0 auto 0 auto;
      width: 80%;
      height: 220px;
      border-radius: 10px;
    }
    .title {
      font-size: 28px;
      margin-bottom: 6px;
    }
    .price {
      font-size: 24px;
      margin-bottom: 6px;
    }
  }
}
}
</style>

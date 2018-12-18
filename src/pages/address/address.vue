<template>
  <div>
    <myHeader title="地址管理"/>
    <div :class="$style.form">
      <div :class="$style.section">
        <input type="text" v-model="username" placeholder="请输入姓名">
      </div>
      <div :class="$style.section">
        <input type="text" v-model="phone" placeholder="请输入电话号码">
      </div>
      <!-- ui components-->
      <mini-address
        :itemHeight="height"
        :class="$style.address"
        @getValues="getValues"
        color="#666"
      ></mini-address>
      <div :class="$style.section">
        <input type="text" v-model="address" placeholder="请输入详细地址">
      </div>
      <button @click.stop="saveAddress">保存</button>
    </div>
  </div>
</template>

<script>
import myHeader from "@/components/public/header.vue";
export default {
  name: "Address",
  components: {
    myHeader
  },
  data() {
    return {
      height: 162,
      username:'',
      phone:'',
      address:'',
      addressDetail:''
    };
  },
  methods: {
    getValues(data) {
      this.addressDetail = data
    },
    saveAddress(){
      let data = {
        username:this.username,
        phone:this.phone,
        address:this.address,
        addressDetail:this.addressDetail
      }
      this.$store.dispatch('saveAddress',data);
      this.$router.push("./personal");
    }
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.form {
  padding-top: 96px;
  padding-left: 20px;
  .section {
    height: 60px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
    box-sizing: border-box;
    input {
      display: block;
      width:98%;
      height: 40px;
      font-size: 28px;
      border: none;
    }
  }
  .address {
    font-size: 28px;
  }
  button{
    width:96%;
    height:80px;
    font-size:28px;
    background:#f7f7f7;
    border:1px solid #ddd;
    border-radius:10px;
    margin-top:20px;
  }
}
</style>

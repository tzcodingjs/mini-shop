<template>
  <!-- 主容器 -->
  <div :class="$style.container">
      <!-- 左侧菜单 -->
      <div :class="$style.leftList">
        <ul>
          <li
          v-for="(list,idx) in listItem" :key="idx"
          :value="list.id"
          @click="selectItem($event,idx)"
          :class="{[$style.active]:idx == init}">{{ list.name }}</li>
        </ul>
      </div>
      <!-- 右侧详情内容 -->
      <div :class="$style.rightBox" v-for="(list,idx) in listItem" :key="idx" v-show="idx == init">
        <div :class="$style.headerImg">
          <img :src="baseUrl + list.image.url" alt="headerimg">
        </div>
        <panel
          :products="list.products"
          :title="'—— ' + list.name + ' ——'"
          :listClass="$style.list"
          :itemClass="$style.item"
          :imgClass="$style.img"
          :titleClass="$style.title"
        ></panel>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import panel from "@/components/panel.vue";
export default {
  components: {
    panel
  },
  data() {
    return {
      init: 0,
      baseUrl: this.baseUrl,
      listItem: []
    };
  },
  methods: {
    getCategory: function() {
      let _this = this;
      axios.get("api/category/all").then(response => {
        let data = response.data;
        if (data.success) {
          _this.listItem = data.category;
        }
      });
    },
    selectItem: function(e, idx) {
      this.init = idx;
    }
  },
  created() {
    this.getCategory();
  }
};
</script>
<style lang='scss' module>
@import "@/assets/css/layout.scss";
.container {
  @include flex($direction: row);
  margin-top: 86px;
  .left-list {
    position: fixed;
    top: 86px;
    left: 0;
    bottom: 90px;
    width: 150px;
    border-right: 1px solid #d8d8d8;
    background: #fff;
    li {
      height: 50px;
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      border-left: 6px solid #fff;
      &.active {
        color: #ab956d;
        border-left: 6px solid #ab956d;
      }
    }
  }
  .right-box {
    flex: 1;
    margin-left: 150px;
    padding: 30px;
    .header-img {
      margin: 0 auto;
      img {
        width: 100%;
        display: block;
      }
    }
    .list {
      @include flex($direction: row);
      justify-content:flex-start;
      .item {
        width: 33.33%;
        margin-bottom: 20px;
        text-align: center;
        .img {
          height: 120px;
          width: 120px;
          border-radius: 120px;
        }
        .title {
          color: #444452;
          font-size: 24px;
        }
      }
    }
  }
}
</style>

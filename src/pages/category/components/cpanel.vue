<template>
  <!-- 主容器 -->
  <div :class="$style.container">
    <!-- 左侧菜单 -->
    <div :class="$style.leftList">
      <ul>
        <li v-for="(list,idx) in listItem"
        :key="idx"
        :value="list.id"
        @click="selectItem($event,idx)"
        :class="{[$style.active]:idx == init}">{{ list.listTitle }}</li>
      </ul>
    </div>
    <!-- 右侧详情内容 -->
    <div :class="$style.rightBox">
      <div :class="$style.headerImg">
        <img src="../../../assets/images/test/category-cake.png" alt="headerimg">
      </div>
      <panel :products="products" title="—— 果味 ——" :listClass="$style.list" :itemClass="$style.item" :imgClass="$style.img" :titleClass="$style.title"></panel>
    </div>
  </div>
</template>

<script>
import panel from "@/components/panel.vue";
import img1 from "../../../assets/images/test/product-fry@1.png";
import img2 from "../../../assets/images/test/product-fry@2.png";
import img3 from "../../../assets/images/test/product-fry@3.png";
export default {
  components: {
    panel
  },
  data() {
    return {
      init: 0,
      listItem: [
        {
          id: "01",
          listTitle: "果味"
        },
        {
          id: "02",
          listTitle: "蔬菜"
        },
        {
          id: "03",
          listTitle: "干果"
        }
      ],
      products: [
        {
          id: "1",
          imgSrc: img1,
          title: "带雨梨花"
        },
        {
          id: "1",
          imgSrc: img2,
          title: "带雨梨花"
        },
        {
          id: "1",
          imgSrc: img3,
          title: "带雨梨花"
        }
      ]
    };
  },
  methods: {
    selectItem: function(e, idx) {
      this.init = idx;
    }
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
      justify-content: space-between;
      .item {
        width: 30%;
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

<template>
  <div :class="$style.picker">
    <div :class="$style.con">
      <div :class="$style.btnPanel">
        <span :class="$style.cancel">取消</span>
        <span :class="$style.confirm">确定</span>
      </div>
      <div :class="$style.pickerItem">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props:{
   num:{
     type:Array,
     default:()=>{return []}
   },
   step:{
     type:Number,
     default:1
   }
 }
}

</script>
<style lang='scss' module>
@import '@/assets/css/layout.scss';
.picker{
  position:absolute;
  width:100vw;
  height:100vh;
  font-size:36px;
  background:rgba(0,0,0,.3);
  z-index:10;
  .con{
    @include flex;
    flex-wrap:nowrap;
    position:absolute;
    bottom:0;
    width:100%;
    height:400px;
    background:#fff;
    overflow: hidden;
    .btnPanel{
      @include flex(row);
      padding:20px 30px;
      justify-content:space-between;
      .cancel{
        color:#808080;
      }
      .confirm{
        color:#1aad19;
      }
    }
    .pickerItem{
      text-align: center;
      color:#808080;
      overflow-x:hidden;
      overflow-y:auto;
      li{
        padding:20px;
      }
    }
  }
}
</style>

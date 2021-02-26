<template>
  <div class="display-number">
    <div class="number-title">
      系统概览
    </div>
    <div class="number-content">
      <div class="content-item data1">
        <div class="content-info">
          <div class="font1">巡查</div>
          <div class="big">
            <div class="font3">逾期</div>
            <div class="font2">{{numberData.check}}</div>
          </div>
          <div class="font3">总数{{numberData.total}}</div>
        </div>
      </div>
      <div class="content-item data2">
        <div class="content-info">
          <div class="font1">事件</div>
          <div class="big">
            <div class="font3">逾期</div>
            <div class="font2">{{numberData.check}}</div>
          </div>
          <div class="font3">总数{{numberData.total}}</div>
        </div>
      </div>
      <div class="content-item data3">
        <div class="content-info">
          <div class="font1">任务</div>
          <div class="big">
            <div class="font3">逾期</div>
            <div class="font2">{{numberData.check}}</div>
          </div>
          <div class="font3">总数{{numberData.total}}</div>
        </div>
      </div>
      <div class="content-item data4">
        <div class="content-info">
          <div class="font1">上报问题</div>
          <div class="big">
            <div class="font3">逾期</div>
            <div class="font2">{{numberData.total}}</div>
          </div>
          <div class="font3">总数{{numberData.total}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "display-number",
    props:{
      numberData:{}
    },
    created()
    {
    }
  }
</script>

<style scoped>
.display-number{
   width:100%;
   height: 160px;
   background-color: #FFFFFF;
   border-radius: 8px;
   padding:33px 33px 0 33px;
}
.number-title{
  border-left: 4px solid #027AFF;
  padding-left: 5px;
  text-align: left;
  font-weight: 600;
}
.number-content{
  margin-top: 28px;
  display:flex;
  align-items: center;
}
.number-content .content-item{
  height: 90px;
  margin-right:8px;
  border-radius: 8px;
  flex:1;
  position: relative;
}
.number-content .content-item:nth-of-type(4){
  margin-right:0;
}
.number-content .content-item .content-info{
  color: #FFFFFF;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}
.number-content .content-item .content-info .big{
  display: flex;
  align-items: center;
}
.font1{
  font-size: 14px;
}
.font2{
  font-size: 24px;
}
.font3{
  font-size: 2px;
}
.data1{
  background-image: linear-gradient(49deg, #A87AFF 0%, #7151ED 100%);
}
.data2{
  background-image: linear-gradient(49deg, #7A81FF 0%, #6345FF 100%);
}
.data3{
  background-image: linear-gradient(47deg, #5C8BFF 0%, #0095FF 100%);
}
.data4{
  background-image: linear-gradient(52deg, #5C8BFF 0%, #356DF9 100%);
}
</style>
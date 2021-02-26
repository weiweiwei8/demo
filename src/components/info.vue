<template>
  <div class="info-main">
    <div class="number-title">
      通知公告
    </div>
    <div class="more" v-show="isShow" @click="show=!show">
      <span>更多</span>
      <i class="iconfont iconaright"></i>
    </div>
    <div >
      <div v-for="(item,index) in infoData" class="info-item" v-show="index<3||show">
        <img src="../assets/images/dot.png" alt="">
        <div>{{item.content}}</div>
        <div>{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data()
    {
      return {
        show:false
      }
    },
    props:{
      infoData:''
    },
    watch:{
      infoData(){
        this.show=false;
      }
    },
    computed:{
      isShow()
      {
        return this.infoData.length>3;
      }
    },
    methods:{
    },
    created() {
    }
  }
</script>

<style scoped>
.info-main{
  width:100%;
  height: 160px;
  border-radius: 8px;
  padding:33px 33px 0 33px;
  background-color: #FFFFFF;
  position: relative;
}
.number-title{
  border-left: 4px solid #027AFF;
  padding-left: 5px;
  text-align: left;
  font-weight: 600;
}
.more{
  position: absolute;
  right:33px;
  top:33px;
  font-size: 14px;
  color: #666666;
}
.more i{
  font-size:14px;
}

.info-item{
  width:100%;
  margin-top:17px;
  display:flex;
}
.info-item :nth-child(2)
{
  flex:5;
  max-width: 120px;
  font-size: 14px;
  color: #666666;
  text-align: left;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.info-item :nth-child(3)
{
  flex:3;
  font-size: 12px;
  color: #999999;
}
.show-more{
}
img{
  width:20px;
  height:20px;
}
</style>
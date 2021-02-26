<template>
  <div class="work-title">
    <div class="work-left">
      <p>工作台</p>
      <i class="iconfont iconaright"></i>
    </div>
    <p class="work-right">{{title}}</p>
  </div>
</template>

<script>
  export default {
    name: "WorkTitle",
    data()
    {
      return{
        title:'首页'
      }
    },
    created() {
      this.$bus.on('title',(item)=>{
        this.title=item;
      })
    }
  }
</script>

<style scoped>
.work-title{
  min-width:100px;
  height:27px;
}
.work-title .work-left{
  float: left;
  width: 64px;
  height: 27px;
  font-size: 16px;
  line-height: 27px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.work-title .work-left i{
  font-size: 14px;
}
.work-title .work-right{
  float: left;
  font-size: 16px;
  color: #3572E2;
  line-height: 27px;
  font-weight: 600;
}
</style>
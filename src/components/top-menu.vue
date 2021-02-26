<template>
  <div class="top-menu">
    <div class="top-menu-left">
      <i class="iconfont iconsuoyou" @click="closeLeftMenu"></i>
      <p>工作台</p>
      <p>系统设置</p>
      <p>知识库</p>
      <p>统计分析</p>
    </div>
    <div class="top-menu-content"></div>
    <div class="top-menu-right">
      <i class="iconfont icon135xiaoxitongzhitixinglingshenglingdang active"></i>
      <i class="iconfont iconguanliyuan"></i>
      <el-dropdown>
        <span class="el-dropdown-link">
          超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
         </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <i class="iconfont iconfullScreen" @click="closeALLMenu"></i>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TopMenu",
    methods:{
      closeLeftMenu()
      {
        this.$emit('closeLeftMenu')
      },
      closeALLMenu()
      {
        this.$emit('closeAllMenu')
      }
    }
  }
</script>

<style scoped>
.top-menu{
  width: 100%;
  height: 74px;
  background: #FFFFFF;
  box-shadow: 0px 3px 13px 0px rgba(0,88,255,0.18);
  display: flex;
  align-items: center;
}
.top-menu-left{
  flex:4;
  min-width:550px;
  margin-left:26px;
  display:flex;
  align-items: center;
}
.top-menu-left i{
  font-size: 16px;

}
.top-menu-left p{
  margin-left:58px;
  font-size: 18px;
  color: #333333;
  font-weight: 500;
}
.top-menu-content{
  flex: 4;
}
.top-menu-right{
  min-width:230px;
  flex:2;
}
.active{
  color: #3572E2 ;
}
i{
  font-size: 20px;
  margin-right:10px;
  margin-left:10px;
}
</style>
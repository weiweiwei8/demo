<template>
    <div class="main">
      <LeftMenu class="left" v-if="showLeftMenu&&showAllMenu"/>
      <TopMenu v-if="showAllMenu"
               :class="[showLeftMenu?'top':'top-open']"
               @closeAllMenu="closeAllMenu" @closeLeftMenu="closeLeftMenu" />
      <WorkTitle  :class="[showLeftMenu?'title':'title-open',{'title-open1':!showAllMenu}]"/>
      <div :class="[showLeftMenu?'view':'view-open',{'view-open1':!showAllMenu}]">
         <router-view></router-view>
      </div>
    </div>
</template>

<script>
  import LeftMenu from "../components/left-menu";
  import TopMenu from "../components/top-menu";
  import WorkTitle from "../components/work-title";
    export default {
      name: "Home",
      components: {TopMenu, LeftMenu,WorkTitle},
      data()
      {
        return{
          showLeftMenu:true,
          showAllMenu:true
        }
      },
      methods:{
        closeLeftMenu()
        {
          this.showLeftMenu=!this.showLeftMenu;
          console.log(this.showLeftMenu,this.showAllMenu)
        },
        closeAllMenu()
        {
          this.showAllMenu=!this.showAllMenu;
          console.log(this.showLeftMenu,this.showAllMenu)
        }
      },
      mounted()
      {
        console.log(this.showLeftMenu,this.showAllMenu)
      }
    }
</script>

<style scoped>
.main{
  width:100%;
  height: 1420px;
  position: relative;
}
.left{
  height: 100%;
}
.top{
  width:calc(100% - 205px);
  position: absolute;
  left:200px;
  top:0;
}
.top-open{
  position: absolute;
  left:0;
  top:0;
}
.view{
  background-color: #F6F7FB;
  width:calc(100% - 205px);
  position: absolute;
  left:205px;
  top:80px;
}
.view-open{
  background-color: #F6F7FB;
  width:100%;
  position: absolute;
  left:0;
  top:80px;
}
.view-open1{
  background-color: #F6F7FB;
  width:100%;
  position: absolute;
  left:0;
  top:0px;
}
.title{
  position:absolute;
  left:238px;
  top:110px;
  z-index: 10;
}
.title-open{
  position:absolute;
  left:33px;
  top:110px;
  z-index: 10;
}
.title-open1{
  position:absolute;
  left:33px;
  top:30px;
  z-index: 10;
}
</style>

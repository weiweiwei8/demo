<template>
    <div class="left-menu">
      <div class="title">
        <p class="title-info">智慧安保系统</p>
      </div>
      <div class="menu-content">
        <div v-for="(item,index) in title" class="menu-item"  @mouseover="mouseOver(index)"
             @mouseleave="mouseLeave(index)" @click="clickMenu(item,index)"
             :class="[index===currentIndex||isActive[index]?'active':'no-active']">
          <div class="menu" >
            <i :class="icon[index]" class="iconfont"></i>
            <p>{{item}}</p>
            <i v-show="!isActive[index]&&index!==currentIndex" class="iconfont iconaright"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "LeftMenu",
      data()
      {
        return {
          title:['首页','监控中心','金库','日常工作','来访管理','值班管理','台账管理','资产管理',
                 '通知公告','安保责任书','组织信息','系统动态','活动记录','数据图表'],
          icon:['iconmy-current','iconjiankongzhongxin','icons_ic_jinku','iconrichanggongzuo',
                'iconlaifangguanli','iconzhibanguanli','iconweibiaoti-_huabanfuben','iconzichan',
                'icontongzhi','iconanbao','iconzuzhixinxi','iconxitongdongtaitongzhi','iconhuodongjilu',
                'iconshujutubiao'],
          icon1:['iconmy-current-copy'],
          isActive:[false,false,false,false,false,false,false,false,false,false,false,false,false,false],
          currentIndex:0
        }
      },
      methods:{
        mouseOver(index)
        {
          this.isActive.splice(index,1,true)
        },
        mouseLeave(index)
        {
          this.isActive.splice(index,1,false)
        },
        clickMenu(item,index)
        {
          this.currentIndex=index;
          this.$bus.emit('title',item);
          if(item==='首页') {
            this.$router.replace('/first-page');
          }
          else if(item==='监控中心')
          {
            this.$router.replace('/check');
          }
        }
      }
    }
</script>

<style scoped>
.left-menu{
  width: 199px;
  background: #FFFFFF;
  box-shadow: 0px 3px 13px 0px rgba(0,88,255,0.18);
}
.title{
  width: 199px;
  height: 74px;
  background-image: linear-gradient(-43deg, #236CFF 0%, #4A9BFF 100%);
  /*overflow: hidden;*/
  padding-top: 1px;
}
.title .title-info{
  width: 108px;
  height: 18px;
  margin: 27px 45px;
  font-size: 18px;
  color: #FFFFFF;
  font-weight: 400;
}
.menu-content{
  width: 100%;
}
.menu-content .menu-item{
  width: 100%;
  height: 56px;
  position:relative;
}
.menu-content .menu-item:hover{
  background-color: #F2F7FF;
}
.menu-content .menu-item .menu{
  width:165px;
  height:20px;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  display:flex;
  align-items: center;
}
.menu-content .menu-item .menu i{
  font-size:14px;
}
.menu-content .menu-item .menu i:nth-of-type(2){
  position:absolute;
  right:0;
}
.menu-content .menu-item p{
  margin-left: 11px;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 14px;
  font-weight: 500;
}
.active{
  color: #3572E2 ;
  background-color:#F2F7FF ;
}
.no-active{
  color: #333333;
}
</style>
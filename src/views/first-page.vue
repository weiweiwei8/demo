<template>
  <div class="view-main">
    <div class="view-content">
      <div class="view-first">
        <div class="select-button">
          <div class="time-button">
            <button :class="{active:isSelect}" @click="clickMonth">月</button>
            <button :class="{active:!isSelect}" @click="clickYear">年</button>
          </div>
          <div class="time-select">
            <span v-if="isSelect" class="span-right">月份</span>
            <span v-else class="span-right">年份</span>
            <select v-model="time" v-if="isSelect"  @change="selectTime">
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
            <select v-model="time1" v-else>
              <option v-for="option in options1" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
          <div class="refresh-button">
            <button class="active" @click="refreshData">刷新</button>
          </div>
        </div>
      </div>
      <div class="view-second">
        <DisplayNumber class="number" :numberData="number"/>
        <Info  class="info"  :infoData="content"/>
      </div>
      <div class="view-third-forth">
        <div class="title">
          事件分析
        </div>
        <div class="display">
          <div class="chart" ref="chart1"></div>
          <div class="chart" ref="chart2"></div>
        </div>
      </div>
      <div class="view-third-forth">
        <div class="title">
          巡查分析
        </div>
        <div class="display">
          <div class="chart" ref="chart3"></div>
          <div class="chart" ref="chart4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import WorkTitle from "../components/work-title";
  import DisplayNumber from "../components/display-number";
  import Info from "../components/info";
  import {chart1,chart2} from "../assets/js/echart.js"
  import axios from 'axios'
  export default {
    name: "FirstPage",
    components: {Info, DisplayNumber, WorkTitle},
    data()
    {
      return{
        number: {},
        content:[],
        date:[],
        place:[],
        create:[],
        finished:[],
        unfinished:[],
        isSelect:true,
        time: '2020-1',
        time1: '2020',
        options: [
          { text: '2020-1', value: '2020-1' },
          { text: '2020-2', value: '2020-2' },
          { text: '2020-3', value: '2020-3' }
        ],
        options1: [
          { text: '2020', value: '2020' },
          { text: '2021', value: '2021' },
          { text: '2022', value: '2022' }
        ]
      }
    },
    watch:{
      unfinished()
      {
        this.$nextTick(()=>
        {
          let myChart = this.$echarts.init(this.$refs.chart1);
          myChart.setOption(chart1(this.date,this.create,this.finished,this.unfinished));
          let myChart1 = this.$echarts.init(this.$refs.chart2);
          myChart1.setOption(chart2(this.place,this.create,this.finished,this.unfinished));
          let myChart2 = this.$echarts.init(this.$refs.chart3);
          myChart2.setOption(chart1(this.date,this.create,this.finished,this.unfinished));
          let myChart3 = this.$echarts.init(this.$refs.chart4);
          myChart3.setOption(chart2(this.place,this.create,this.finished,this.unfinished));
        })
      }
    },
    methods:{
    clickMonth(){
      this.isSelect=true;
    },
    clickYear()
    {
      this.isSelect=false;
    },
    refreshData()
    {
      this.isSelect? this.time='2020-1':this.time1='2020';
      this.isSelect=true;
    },
    changeData(data,index)
    {
      let a=[];
      data.forEach((item)=>{
          for(let i in item)
          {
            if(i===index)
            {
              a.push(item[i])
            }
          }
        });
      return a;
    },
    getChart(params)
    {
      axios.post('/api/data1', params).then((res) => {
        console.log(res)
        this.number=res.data.number;
        this.content=res.data.content;
        this.date=this.changeData(res.data.chart,'date');
        this.place=this.changeData(res.data.chart,'place');
        this.create=this.changeData(res.data.chart,'create')
        this.finished=this.changeData(res.data.chart,'finished')
        this.unfinished=this.changeData(res.data.chart,'unfinished')
      })
    },
    selectTime() {
      if (this.isSelect && this.time ==='2020-1') {
        this.getChart({id:1});
      } else if (this.isSelect && this.time === '2020-2') {
        this.getChart({id:2});
      } else if (!this.isSelect && this.time1 === '2020') {
        this.getChart({id:3});
      } else {
        this.getChart({id:4});
      }
    },
    setChart()
    {
      axios.post('/api/data1',{id:1}).then((res)=>{
        this.number=res.data.number;
        this.content=res.data.content;
        this.date=this.changeData(res.data.chart,'date');
        this.place=this.changeData(res.data.chart,'place');
        this.create=this.changeData(res.data.chart,'create')
        this.finished=this.changeData(res.data.chart,'finished')
        this.unfinished=this.changeData(res.data.chart,'unfinished')
        let myChart = this.$echarts.init(this.$refs.chart1);
        myChart.setOption(chart1(this.date,this.create,this.finished,this.unfinished));
        let myChart1 = this.$echarts.init(this.$refs.chart2);
        myChart1.setOption(chart2(this.place,this.create,this.finished,this.unfinished));
        let myChart2 = this.$echarts.init(this.$refs.chart3);
        myChart2.setOption(chart1(this.date,this.create,this.finished,this.unfinished));
        let myChart3 = this.$echarts.init(this.$refs.chart4);
        myChart3.setOption(chart2(this.place,this.create,this.finished,this.unfinished));
      })
    }
    },
    created() {
    },
    mounted() {
      this.setChart();
    }
  }
</script>

<style scoped>
.view-main{
  width:100%;
}
.view-content {
  margin: 30px;
}
.view-first{
  width:100%;
  margin-top:33px;
}
.view-first:after{
  content: "";
  display: block;
  height: 40px;
  clear:both;
  visibility: hidden;
}
.view-first  .select-button{
  position: absolute;
  right:33px;
  font-size: 14px;
  line-height: 3px;
  min-width:450px;
  display: flex;
  align-items: center;
}
.view-first .select-button .time-select{
  margin-left: 24px;
  margin-right: 10px;
}
.view-first .select-button .time-select .span-right{
  margin-right: 10px;
}
.view-second{
  width:100%;
  margin-top:35px;
  display: flex;
}
.view-second .number{
  flex: 7;
  margin-right: 33px;
}
.view-second .info{
  flex: 3;

}
.view-third-forth{
  background-color: #FFFFFF;
  height:400px;
  margin-top: 33px;
  padding:33px;
}
.title{
  border-left: 4px solid #027AFF;
  padding-left: 5px;
  text-align: left;
  font-weight: 600;
  margin-bottom: 30px;
}
.display{
  display: flex;
}
.chart{
  flex: 1;
  height:350px;
  margin-right:33px;
}
.active{
  background-color: #027AFF ;
  color: #FFFFFF;
}
button{
  width: 81px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: #FFFFFF;
}
select{
  width: 130px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 4px;
}
</style>
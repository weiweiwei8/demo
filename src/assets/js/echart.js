import echarts from "echarts"
export const chart1= (date,check,finished,unfinished) => {
  let option = {
    title: {
      text: '事件分布',
      textStyle:{
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    color:['#5C8BFF','#98FB98','#7B68EE'],
    legend: {
      data: ['创建事件', '完成事件', '逾期事件'],
      x:'right',
      y:'-1%'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      // feature: {
      //   saveAsImage: {}
      // }
    },
    xAxis: {
      type: 'category',
      axisTick:{
        show:false//不显示坐标轴刻度线
      },
      axisLine: {
        show: false,//不显示坐标轴线
      },
      boundaryGap: false,
      data: date,
      axisLabel: {
        show: true,//显示坐标轴文字
        interval:0,
        textStyle: {
          color:'#888888'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisTick:{
        show:false//不显示坐标轴刻度线
      },
      axisLine: {
        show: false,//不显示坐标轴线
      },
      axisLabel: {
        show: true,
        interval:0,
        textStyle: {
          color:'#888888',
        }
      }
    },
    series: [
      {
        name: '创建事件',
        type: 'line',
        symbol:'none',
        smooth:true,
        data: check,
        markPoint: {
          data: [
            {type: 'max', name: '最大值'}
          ],
          symbol:'pin',
          symbolSize:50
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#81befd"
            },
              {
                offset: 1,
                color: "#fff"
              }
            ])//改变区域颜色
          }
        },
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#5C8BFF' //改变折线颜色
            }
          }
        }
      },
      {
        name: '完成事件',
        type: 'line',
        symbol:'none',
        smooth:true,
        data: finished
      },
      {
        name: '逾期事件',
        type: 'line',
        symbol:'none',
        smooth:true,
        data: unfinished
      },

    ]
  };
  return option;
}
export const chart2= (date,check,finished,unfinished) => {
  let option = {
    title: {
      text: '事件分布',
      textStyle:{
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    color:['#5C8BFF','#98FB98','#7B68EE'],
    legend: {
      data: ['创建事件', '完成事件', '逾期事件'],
      x:'right',
      y:'-1%'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      // feature: {
      //   saveAsImage: {}
      // }
    },
    xAxis: {
      type: 'category',
      axisTick:{
        show:false//不显示坐标轴刻度线
      },
      axisLine: {
        show: false,//不显示坐标轴线
      },
      boundaryGap: false,
      data: date,
      axisLabel: {
        show: true,//显示坐标轴文字
        interval:0,
        formatter:function(params) {
          var newParamsName = "";
          var paramsNameNumber = params.length;
          var provideNumber = 2;  //一行显示几个字
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
          if (paramsNameNumber > provideNumber) {
            for (var p = 0; p < rowNumber; p++) {
              var tempStr = "";
              var start = p * provideNumber;
              var end = start + provideNumber;
              if (p == rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber);
              } else {
                tempStr = params.substring(start, end) + "\n";
              }
              newParamsName += tempStr;
            }

          } else {
            newParamsName = params;
          }
          return newParamsName
        },
        textStyle: {
          color:'#888888'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisTick:{
        show:false//不显示坐标轴刻度线
      },
      axisLine: {
        show: false,//不显示坐标轴线
      },
      axisLabel: {
        show: true,
        interval:0,
        textStyle: {
          color:'#888888',
        }
      }
    },
    series: [
      {
        name: '创建事件',
        type: 'line',
        symbol:'none',
        smooth:true,
        data: check,
        markPoint: {
          data: [
            {type: 'max', name: '最大值'}
          ],
          symbol:'pin',
          symbolSize:50
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: "#81befd"
            },
              {
                offset: 1,
                color: "#fff"
              }
            ])//改变区域颜色
          }
        },
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#5C8BFF' //改变折线颜色
            }
          }
        }
      },
      {
        name: '完成事件',
        type: 'line',
        symbol:'none',
        smooth:true,
        data: finished
      },
      {
        name: '逾期事件',
        type: 'line',
        symbol:'none',
        smooth:true,
        data: unfinished
      },

    ]
  };
  return option;
}
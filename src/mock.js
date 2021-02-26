const Mock = require('mockjs')
// 获取 mock.Random 对象
//使用mockjs模拟数据
let number={check:188,event:134,task:13,question:35,total:200};
let number1={check:134,event:45,task:19,question:135,total:300};
let number2={check:56,event:156,task:77,question:197,total:200};
let number3={check:188,event:14,task:132,question:213,total:400};
let content=[
  {content:'今天天气很好很晴朗',time:'2020-1-2 13:43'},{content:'今天天气很好很晴朗',time:'2020-1-2 13:43'}
];
let content1=[{content:'昨天天气很好很晴朗',time:'2020-1-3 13:43'},
              {content:'昨天天气很好很晴朗',time:'2020-1-3 13:43'},
              {content:'昨天天气很好很晴朗',time:'2020-1-3 13:43'},
              {content:'昨天天气很好很晴朗',time:'2020-1-3 13:43'},
              {content:'昨天天气很好很晴朗',time:'2020-1-3 13:43'}
];
let chart=[{date:'10.01',create:0.6,finished:0.3,unfinished:0.7,place:'白马支行'},{date:'10.08',create:0.7,finished:0.55,unfinished:0.45,place:'云马支行'},
          {date:'10.15',create:0.41,finished:0.59,unfinished:0.41,place:'荒古支行'},{date:'10.22',create:0.38,finished:0.28,unfinished:0.72,place:'小马支行'},
          {date:'10.29',create:0.75,finished:0.7,unfinished:0.3,place:'刘山支行'},{date:'11.05',create:0.35,finished:0.28,unfinished:0.78,place:'科技支行'},
          {date:'11.12',create:0.6,finished:0.7,unfinished:1.0,place:'讲话支行'},{date:'11.19',create:1.0,finished:0.3,unfinished:0.6,place:'不会支行'},
          {date:'11.26',create:0.4,finished:0.5,unfinished:0.65,place:'地方支行'}];
let chart2=[{date:'01.01',create:0.3,finished:0.23,unfinished:0.36,place:'白马支行'},{date:'10.01',create:0.56,finished:0.35,unfinished:0.8,place:'云马支行'},
  {date:'01.15',create:0.51,finished:0.49,unfinished:0.91,place:'荒古支行'},{date:'01.22',create:0.38,finished:0.28,unfinished:0.72,place:'小马支行'},
  {date:'01.29',create:0.75,finished:0.7,unfinished:0.8,place:'刘山支行'},{date:'02.05',create:1.0,finished:0.68,unfinished:0.28,place:'科技支行'},
  {date:'02.12',create:0.2,finished:0.34,unfinished:0.3,place:'讲话支行'},{date:'02.19',create:1.0,finished:0.5,unfinished:0.3,place:'不会支行'},
  {date:'02.26',create:0.45,finished:0.2,unfinished:0.7,place:'地方支行'}]
Mock.mock('/api/data1','post',(res)=>{
  const {id} = JSON.parse(res.body);
  if(id===1)
  {
    return {
        number:number,
        content:content,
        chart:chart
    }
  }else if(id===2)
  {
    return {
        number:number1,
        content:content1,
        chart:chart2
    }
  }else if(id===3) {
    return {
        number:number2,
        content:content,
        chart:chart2
    }
  }else if(id===4)
  {
    return {
        number:number3,
        content:content1,
        chart:chart
    }
  }

})
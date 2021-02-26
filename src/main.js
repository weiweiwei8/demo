import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import echarts from "echarts";
import router from './router/router'
import VueBus from 'vue-bus';
require("./mock.js")
Vue.use(VueBus);
Vue.prototype.$echarts = echarts;
import 'element-ui/lib/theme-chalk/index.css';
import './assets/images/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

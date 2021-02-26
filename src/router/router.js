import Vue from "vue";
import VueRouter from "vue-router";
import FirstPage from '../views/first-page';
import Check from '../views/check'
Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/first-page'
  },
  {
    path: '/first-page',
    component: FirstPage
  },
  {
    path: '/check',
    component: Check
  }

];

const router = new VueRouter({
  routes
});

export default router;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import VueLazyload from 'vue-lazyload'
//import vuex from 'vuex'
//引用
import store from './store/index'



import './assets/font/iconfont.css'
import './assets/css/base.css'


//使用懒加载：
Vue.use(VueLazyload,{
  preLoad:1.3,
  error:require('./assets/images/err.png'),
  loading: require('./assets/images/loading.gif'),
  attempt:1,
  listenEvent:['scroll']
})


//使用vuex
/*Vue.use(vuex);

const store=new vuex.store({
  state: {
    flag:123
  }
})*/

Vue.config.productionTip = false

//定义axios全局
axios.defaults.baseURL="http://localhost:3333";  //定义全局ip
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'  //定义头部信息
Vue.prototype.$http=axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'  //2.0写法  render:h=>h(APP) 相当于 function(createElement){return createElement(APP)}
})

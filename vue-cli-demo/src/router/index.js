import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from './../components/Home.vue'
import Catgory from './../components/Catgory.vue'
import Find from './../components/Find.vue'
import Cart from './../components/Cart.vue'
import Mine from './../components/Mine.vue'
import GoodsDetail from './../components/GoodsDetail.vue' //详情
import Search from './../components/SearchMain.vue' //搜索

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/home'

    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/catgory',
      name: 'Catgory',
      component: Catgory
    },
    {
      path: '/catgory/:id',
      name: 'Catgory',
      component: Catgory
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail/:id',
      name: 'GoodsDetail',
      component: GoodsDetail,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    }

  ]
})

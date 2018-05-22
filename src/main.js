import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './filters' // 加载过滤器
import {Button} from 'mint-ui'
import './mock/mockServer'  //加载即可

import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
Vue.use(VueLazyload,{
  loading
})
// 注册全局组件
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue ({
  el:'#app',
  render:h=>h(App),
  router, //使用上vue-router  特定的结果 $route $router
  store , //使用上vuex  特定的结果：$store

  /*components:{ App },
  template:'<App/>'*/
})

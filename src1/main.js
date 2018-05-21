import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* eslint-disable no-new */
new Vue ({
  el:'#app',
  render:h=>h(App),
  router, //使用上vue-router  特定的结果 $route $router
  store  //使用上vuex  特定的结果：$store
  /*components:{ App },
  template:'<App/>'*/
})

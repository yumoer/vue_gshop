/*包含n个直接更新状态方法的对象*/
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,
  RECEIVE_INFO,RECEIVE_GOODS,RECEIVE_RATINGS,DECREMENT_FOOD_COUNT,INCREMENT_FOOD_COUNT,CLEAR_CART
} from './mutation-type'
import Vue from 'vue'
export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  [INCREMENT_FOOD_COUNT](state,{food}){
    if(!food.count){  //第一次增加
      Vue.set(food,'count',1)  //让新增的属性也有数据绑定
      // 将food添加带cartFoods中
      state.cartFoods.push(food)
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){  //只有有值才去捡
      food.count--
      if(food.count===0){
        //将food从catrFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },

  [CLEAR_CART](state){
    //清除foods中的count
    state.cartFoods.forEach(food=>food.count=0)
    //移出购车车中所有购物项
    state.cartFoods = []
  }

}

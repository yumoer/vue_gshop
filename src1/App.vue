<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  /*import {reqFoodTypes} from './api'*/
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {mapActions} from 'vuex'
  export default {
    mounted(){
      /*const result = await reqFoodTypes()
      console.log(result)*/
      //第一种方式
      // this.$store.dispatch('getAddress')
      //第二种方式
      this.getAddress()
    },
    components:{
      FooterGuide
    },
    methods:{
      ...mapActions(['getAddress'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f3f3f3
</style>

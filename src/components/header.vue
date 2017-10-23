<template>
  <div class="header">
      <div class="columns header-nav">
        <!--<router-link to="/" class="column is-one-quarter">首页</router-link>-->
        <router-link to="/index" class="column is-one-quarter" >
          <i class="fa fa-home"></i>首页
        </router-link>

        <router-link to="/content" class="column is-one-quarter">
          <i class="fa fa-search"></i>检索
        </router-link>

        <router-link to="/watch" class="column is-one-quarter">
          <i class="fa fa-line-chart"></i>监控
        </router-link>

        <router-link to="/pay" class="column is-one-quarter">
          <i class="fa fa-ruble"></i>年费
        </router-link>
      </div>

      <!--<div v-if="errorMessage" style="border: 2px solid red;height: 50px;"> {{ errorMessage }} </div>-->

      <!--<div v-else style="height: 50px;width:100%;display: block; color: red; background-color: #2b542c;">-->
        <!--<div class="header-nav" v-for="item in navInfo">-->
          <!--<nav-item v-bind:item="item">{{ item.productId}}</nav-item>-->
        <!--</div>-->
      <!--</div>-->
  </div>
</template>

<script>
//  import { mapState } from 'Vuex'
//  import nav from '../components/nav'
  export default{
//    data () {
//      return {
//        errorMessage: ''
//      }
//    },
//    computed: mapState([
//      'navInfo'
//    ]),
//    components: {
//      'nav-item': nav
//    },
//    methods: {
//      async getNavData () {
//        try {
//          const result = await this.$store.dispatch('getNavData')
//          if (result) {
//            console.log('数据请求成功')
//          }
//        } catch (err) {
//          this.errorMessage = err.message
//          console.log(this.errorMessage)
//        }
//      }
//    },
//    mounted () {
//      this.getNavData()
//    }
  }
</script>

<style >
  .header {
    background-color: #00d1b2;
  }
  .header-nav{
    color: #ffffff;
    width: 1200px;
    margin: 0 auto;
  }
  .header-nav a{
    float: left;
    color: #ffffff;
    font-size: 1.2rem;
  }
  .header-nav a:hover{
    background-color:#03c1a5;
  }
  .header-nav a i{
    margin: 0 10px;
    font-size: 1.3rem;
    vertical-align: middle;
  }
  .columns:last-child{
    margin-bottom: 0;
  }
  .header-nav span{
    float: left;
  }
  .header h5{
    color: red;
  }
</style>

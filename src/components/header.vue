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

      <div style="height: 50px;display: block; color: red; background-color: #2b542c;">
        <div>
          <span> {{this.$store.state.navInfo.productId}}</span>
          <span> {{this.$store.state.navInfo.productName}}</span>
          <span> {{this.$store.state.navInfo.prodcutPrice}}</span>
          <span> {{this.$store.state.navInfo.prodcutImg}}</span>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapState } from 'Vuex'
  export default{
    data () {
      return {
      }
    },
    computed: mapState([
      'navInfo'
    ]),
    mounted () {
      const result = this.$store.dispatch('getNavData')
      if (result) {
        console.log('数据请求成功')
      }
    }
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
</style>

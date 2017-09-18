<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import Footer from './components/footer.vue'
  import Header from './components/header.vue'
  export default {
    name: 'app',
    components: {
      'v-footer': Footer,
      'v-header': Header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 62.5%;
  }
  .container{
    padding: 0;
  }
</style>

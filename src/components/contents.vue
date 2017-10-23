<template>
  <div>
    <div v-if="errorMessage" style="border: 2px solid red;height: 50px;"> {{ errorMessage }} </div>

    <div v-else class="contents">
      <div v-for="item in navInfo">
        <nav-item v-bind:item="item">{{ item.productId}}</nav-item>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'Vuex'
  import nav from '../components/nav'
  export default{
    data () {
      return {
        errorMessage: ''
      }
    },
    computed: mapState([
      'navInfo'
    ]),
    components: {
      'nav-item': nav
    },
    methods: {
      async getNavData () {
        try {
          const result = await this.$store.dispatch('getNavData')
          if (result) {
            console.log('数据请求成功')
          }
        } catch (err) {
          this.errorMessage = err.message
          console.log(this.errorMessage)
        }
      }
    },
    mounted () {
      this.getNavData()
    }
  }
</script>
<style>
</style>

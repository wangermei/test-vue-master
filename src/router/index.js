import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Contents from '@/components/contents'
import Watch from '@/components/watch'
import Pay from '@/components/pay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: '/',
          name: 'Hello',
          component: Hello
        },
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'content',
          name: 'Contents',
          component: Contents
        },
        {
          path: 'watch',
          name: 'watch',
          component: Watch
        },
        {
          path: 'pay',
          name: 'pay',
          component: Pay
        }
      ]
    }
  ]
})

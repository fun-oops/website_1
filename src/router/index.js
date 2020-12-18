import Vue from 'vue'
import Router from 'vue-router'
import try1 from '@/components/try1.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: try1
    }
  ]
})

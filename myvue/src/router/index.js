import Vue from 'vue'
import Router from 'vue-router'
import Listtab from '@/components/Listtab'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listtab',
      component: Listtab
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello	
    }
  ]
})

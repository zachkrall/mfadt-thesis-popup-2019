import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home.vue'
import Submit from './pages/Submit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path: '/submit',
        name: 'Submit',
        component: Submit
    }
  ]
})

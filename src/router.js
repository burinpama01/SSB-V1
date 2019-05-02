import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MapDriver from './views/MapDriver.vue'
import StatusDriver from './views/StatusDriver.vue'
import Profile from './views/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mapdriver',
      name: 'mapdriver',
      component: MapDriver
    },
    {
      path: '/statusdriver',
      name: 'statusdriver',
      component: StatusDriver
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SinglePlayer from '../views/SinglePlayer.vue'
import Rules from '../views/Rules.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/single-player',
      name: 'single-player',
      component: SinglePlayer
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    }
  ]
})

export default router

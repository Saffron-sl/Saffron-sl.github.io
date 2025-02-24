import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CareConnect from '../views/CareConnect.vue'
import Marketplace from '../views/Marketplace.vue'
import Community from '../views/Community.vue'
import Services from '../views/Services.vue'
import LearnMore from '../views/LearnMore.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/care-connect',
      name: 'care-connect',
      component: CareConnect
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: Marketplace
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/learn-more',
      name: 'learn-more',
      component: LearnMore
    }
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DoctorConnect from '../views/DoctorConnect.vue'
import Marketplace from '../views/Marketplace.vue'
import Community from '../views/Community.vue'
import Services from '../views/Services.vue'
import LearnMore from '../views/LearnMore.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/doctor-connect',
      name: 'doctor-connect',
      component: DoctorConnect
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
      name: 'Services', 
      component: Services 
    },
    { path: '/learn-more', 
      name: 'LearnMore', 
      component: LearnMore }
  ]
})

export default router
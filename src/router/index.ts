/**
 * Vue Router Configuration
 * 
 * This file sets up the routing for the application.
 * Currently, there's only one route (Home page), but you can add more routes here.
 * 
 * HOW TO ADD NEW ROUTES:
 * 1. Import the new page component
 * 2. Add a new route object to the routes array
 * 3. Specify the path, name, and component
 */

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'

// Define routes
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Add more routes here as needed
  // Example:
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../pages/About.vue'),
  // },
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  // Smooth scroll behavior when navigating to hash links
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Agent from '../views/Agent.vue'
import Heatmap from '../components/Heatmap.vue'
import Test from '../views/reference.vue'
import DetailView from '../views/DetailView.vue'
import AnalyseView from '../views/AnalyseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Agent
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Agent',
      name: 'Agent',
      component: Agent
    },
    {
      path: '/Heatmap',
      name: 'Heatmap',
      component: Heatmap
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },
  ]
})

export default router

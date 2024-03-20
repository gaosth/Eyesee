import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Agent from '../views/Agent.vue'
import Heatmap from '../components/Heatmap.vue'
import Test from '../views/reference.vue'
import DetailView from '../views/DetailView.vue'
import Detail2View from '../views/Detail2View.vue'
import Detail3View from '../views/Detail3View.vue'
import AnalyzeView from '../views/AnalyzeView.vue'
import Analyze2View from '../views/Analyze2View.vue'
import Analyze3View from '../views/Analyze3View.vue'
import Sankey from '../components/Sankey.vue'

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
    {
      path: '/detail2',
      name: 'detail2',
      component: Detail2View
    },
    {
      path: '/detail3',
      name: 'detail3',
      component: Detail3View
    },
    {
      path: '/analyze',
      name: 'analyze',
      component: AnalyzeView
    },
    {
      path: '/analyze2',
      name: 'analyze2',
      component: Analyze2View
    },
    {
      path: '/analyze3',
      name: 'analyze3',
      component: Analyze3View
    },
    {
      path: '/sankey',
      name: 'sankey',
      component: Sankey
    },
  ]
})

export default router

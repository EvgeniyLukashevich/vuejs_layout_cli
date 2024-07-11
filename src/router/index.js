import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/components/pages/IndexPage.vue'
import BlogPage from '@/components/pages/BlogPage.vue'
import BlogDetailsPage from '@/components/pages/BlogDetailsPage.vue'
import ProjectPage from '@/components/pages/ProjectPage.vue'
import ProjectDetailsPage from '@/components/pages/ProjectDetailsPage.vue'
import NotFoundPage from '@/components/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: IndexPage
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: BlogDetailsPage
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: ProjectDetailsPage
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundPage
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

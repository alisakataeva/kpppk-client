import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import BlankPage from '@/views/BlankPage.vue'

import NewsList from '@/views/news/NewsList.vue'
import ProgramList from '@/views/programs/ProgramList.vue'
import NewsDetail from '@/views/news/NewsDetail.vue'
import ProgramDetail from '@/views/programs/ProgramDetail.vue'

import CommonInfoPage from '@/views/pages/CommonInfoPage.vue'
import ApplicantPage from '@/views/pages/ApplicantsPage.vue'

import Professionalitet from '@/views/Professionalitet.vue'
import Schedule from '@/views/Schedule.vue'

import PageNotFound from '@/views/PageNotFound.vue'
import SiteMap from '@/views/SiteMap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/blank',
      name: 'blank',
      component: BlankPage,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsList,
    },
    {
      path: '/programs',
      name: 'programs',
      component: ProgramList,
    },
    {
      path: '/news/:id',
      name: 'newsDetail',
      component: NewsDetail,
    },
    {
      path: '/programs/:id',
      name: 'programDetail',
      component: ProgramDetail,
    },
    {
      path: '/prof',
      name: 'profPage',
      component: Professionalitet,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: SiteMap
    },
    {
      path: '/page/:page_group/:page_code',
      name: 'commonInfoPage',
      component: CommonInfoPage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      component: PageNotFound
    },
  ],
})

export default router

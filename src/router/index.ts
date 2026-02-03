import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/Landing.vue'
import BlankPage from '@/views/BlankPage.vue'

import EventList from '@/views/events/EventList.vue'
import EventDetail from '@/views/events/EventDetail.vue'

import NewsList from '@/views/news/NewsList.vue'
import NewsDetail from '@/views/news/NewsDetail.vue'

import ProgramList from '@/views/programs/ProgramList.vue'
import ProgramDetail from '@/views/programs/ProgramDetail.vue'

import CommonInfoPage from '@/views/pages/CommonInfoPage.vue'

import Professionalitet from '@/views/Professionalitet.vue'
import Championship from '@/views/Championship.vue'
import Schedule from '@/views/Schedule.vue'

import PageNotFound from '@/views/PageNotFound.vue'
import SiteMap from '@/views/SiteMap.vue'
import Search from '@/views/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: Landing, },
    { path: '/blank', name: 'blank', component: BlankPage, },

    { path: '/events', name: 'events', component: EventList, },
    { path: '/events/:id', name: 'eventDetail', component: EventDetail, },
    { path: '/news', name: 'news', component: NewsList, },
    { path: '/news/:id', name: 'newsDetail', component: NewsDetail, },
    { path: '/programs', name: 'programs', component: ProgramList, },
    { path: '/programs/:id', name: 'programDetail', component: ProgramDetail, },

    { path: '/prof', name: 'profPage', component: Professionalitet },
    { path: '/champ', name: 'champPage', component: Championship },
    { path: '/schedule', name: 'schedule', component: Schedule },
    { path: '/sitemap', name: 'sitemap', component: SiteMap },
    { path: '/search', name: 'search', component: Search },

    { path: '/page/:page_group/:page_code', name: 'commonInfoPage', component: CommonInfoPage },

    { path: '/:pathMatch(.*)*', name: 'pageNotFound', component: PageNotFound },
  ],
})

export default router

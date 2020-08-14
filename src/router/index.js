import Vue from 'vue'
import Router from 'vue-router'

import home from '@/home/index'
import main from '@/home/main/main'
import notice from '@/home/main/notice'
import noticeDetail from '@/home/main/noticeDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: 'main',
          component: main
        },
        {
          path: '/notice',
          name: 'notice',
          component: notice
        },
        {
          path: '/noticeDetail',
          name: 'noticeDetail',
          component: noticeDetail
        },


      ]
    }
  ]
})

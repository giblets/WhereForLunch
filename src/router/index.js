import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Invite from '@/components/Invite'
import Search from '@/components/Search'
import Chat from '@/components/Chat'
import Welcome from '@/components/Welcome'
import BootstrapVue from 'bootstrap-vue'
import VueChatScroll from 'vue-chat-scroll'
//import VueFire from 'vuefire'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueChatScroll)
//Vue.use(VueFire)

export default new Router({
  routes: [
    {
      path: '/invite',
      name: 'Invite',
      component: Invite
    },
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next()
        } else {
          next({ name: 'Welcome' })
        }
      }
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    }
  ]
})

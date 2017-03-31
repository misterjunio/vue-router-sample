import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import NavigationMain from '../components/NavigationMain'
import NavigationMaster from '../components/NavigationMaster'
import NavigationDetail from '../components/NavigationDetail'
import SplitterMain from '../components/SplitterMain'
import SplitterMainPage from '../components/SplitterMainPage'
import SplitterPage1 from '../components/SplitterPage1'
import SplitterPage2 from '../components/SplitterPage2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/navigationMain',
      component: NavigationMain,
      children: [
        {
          path: '',
          name: 'navigationMaster',
          component: NavigationMaster,
          props: true
        },
        {
          path: ':detail',
          name: 'navigationDetail',
          component: NavigationDetail,
          props: true
        }
      ]
    },
    {
      path: '/splitterMain',
      component: SplitterMain,
      children: [
        {
          path: '',
          component: SplitterMainPage
        },
        {
          path: 'splitterPage1',
          component: SplitterPage1
        },
        {
          path: 'splitterPage2',
          component: SplitterPage2
        }
      ]
    }
  ]
})

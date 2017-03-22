import Vue from 'vue'
import Router from 'vue-router'
import NavigationMaster from '../components/NavigationMaster'
import NavigationDetail from '../components/NavigationDetail'
import SplitterMain from '../components/SplitterMain'
import SplitterPage1 from '../components/SplitterPage1'
import SplitterPage2 from '../components/SplitterPage2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/navigationMaster',
      name: 'navigationMaster',
      component: NavigationMaster
    },
    {
      path: '/navigation/:detail',
      name: 'navigationDetail',
      component: NavigationDetail,
      props: true
    },
    {
      path: '/splitterMain',
      name: 'splitterMain',
      component: SplitterMain
    },
    {
      path: '/splitterPage1',
      name: 'splitterPage1',
      component: SplitterPage1
    },
    {
      path: '/splitterPage2',
      name: 'splitterPage2',
      component: SplitterPage2
    }
  ]
})

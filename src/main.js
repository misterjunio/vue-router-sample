import 'onsenui'
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css')
require('onsenui/css/onsenui.css')

import App from './App'
import Home from './components/Home'
import router from './router'
router.afterEach((to, from) => {
  console.log('from', from);
  console.log('to', to);
})

Vue.use(VueOnsen)

new Vue({
  el: '#app',
  router,
  template:'<router-view></router-view>',
  components: { Home }
});

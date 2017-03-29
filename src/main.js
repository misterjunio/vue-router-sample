import 'onsenui'
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css')
require('onsenui/css/onsenui.css')

import router from './router'

Vue.use(VueOnsen)

new Vue({
  el: '#app',
  router,
  template:'<router-view></router-view>'
});

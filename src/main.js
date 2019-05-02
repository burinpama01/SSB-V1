import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
<<<<<<< HEAD
import * as VueGoogleMaps from 'vue2-google-maps'
=======
>>>>>>> master

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPYgXp9DFjLlBBhtucEaGdZMJXYTA66P4',
    libraries: 'places',
  },
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

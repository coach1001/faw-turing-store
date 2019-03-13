import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import './sass/styles.scss'
import './stylus/main.styl'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'fa'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

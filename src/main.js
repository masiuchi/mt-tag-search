import Vue from 'vue'
import VueMaterial from 'vue-material'
import store from './store.js'
import App from './App.vue'
import MaterialCSS from '../node_modules/vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

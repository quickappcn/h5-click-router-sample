import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^qa-router-button|templates|styles/]

new Vue({
  render: h => h(App),
}).$mount('#app')

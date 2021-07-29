import Vue from 'vue'
import VueRouter from 'vue-router'
import microApp from '@micro-zoe/micro-app'
import routes from './router'
import App from './App.vue'

// microApp.preFetch([{name: 'react16', url: 'http://localhost:3001/'}])
microApp.setData('page1', {type: '新的数据'})

microApp.start({
  lifeCycles: {
    created () {
      console.log('created 全局监听')
    },
    beforemount () {
      console.log('beforemount 全局监听')
    },
    mounted () {
      console.log('mounted 全局监听')
    },
    unmount () {
      console.log('unmount 全局监听')
    },
    error () {
      console.log('error 全局监听')
    }
  },
  /**
   * 自定义fetch
   * @param url 静态资源地址
   * @param options fetch请求配置项
   * @returns Promise<string>
  */
  //  fetch (url, options, appName) {
  //   if (url === 'http://localhost:3001/error.js') {
  //     return Promise.resolve('')
  //   }

  //   let config = null
  //   if (url === 'http://localhost:3001/micro-app/react16/') {
  //     config = {
  //       headers: {
  //         'custom-head': 'custom-head',
  //       }
  //     }
  //   }

  //   return fetch(url, Object.assign(options, config)).then((res) => {
  //     return res.text()
  //   })
  // }
})

Vue.config.productionTip = false

const router = new VueRouter({
  // options: {
  //   base: '/micro-app/demo/',
  // },
  mode: 'history',
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

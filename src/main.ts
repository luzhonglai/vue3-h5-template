/*
 * @Descripttion:
 * @repository: https://github.com/luzhonglai
 * @Author: ZhongLai Lu
 * @Date: 2021-11-15 14:12:48
 * @LastEditors: Zhonglai Lu
 * @LastEditTime: 2022-01-09 18:57:01
 */
import App from './App.vue'
import store from './store'
import router from './router'
import { createApp } from 'vue'
import { setupGlobalMethods, setupCustomComponents, vantPlugins } from './plugins'

const app = createApp(App)
console.log('环境变量---->', process.env)

/* gloabl  css */
import '@/styles/reset.css'
import '@/styles/index.less'
import '@/assets/icons/svg'

vantPlugins(app)
// setupDirectives(app)
setupGlobalMethods(app)
setupCustomComponents(app)

app.use(router).use(store).mount('#app')

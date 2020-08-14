// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import {
  get,
  post,
  useAppend,
} from "./utils/http";
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts' //引入echarts
Vue.use(ElementUI);
Vue.use(VueQuillEditor)
Vue.config.productionTip = false

Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$useAppend = useAppend;
Vue.prototype.$echarts = echarts //挂载在原型，组件内使用直接this.$echarts调用
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    tabs: [{ path: '/', title: '首页' }, { path: '/notice', title: '工作动态' }, { path: '/', title: '3' }, { path: '/', title: '4' }],

  },
  getters: {
    // state的计算属性
  },
  mutations: {
    // 更改state中状态的逻辑，同步操作
  },
  actions: {
    // 提交mutation，异步操作
  },
});
export default store
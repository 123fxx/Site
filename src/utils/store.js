
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    tabs: [{ path: '/', name: '首页' }],
    card: {
      tender: true,
      appeal: true,
    },
    advertising: true

  },
  getters: {
    // state的计算属性
  },
  mutations: {
    add_tabs (state, data) {
      state.tabs.push(data)
    },
    delete_tabs (state, data) {
      let index = state.tabs.findIndex(function (item) {
        return item.path === data.path;
      })
      state.tabs.splice(index + 1);
    },
    init_tabs (state) {
      state.tabs = [{ path: '/', name: '首页' }]
    },
    close_advertising (state) {
      state.advertising = false
    },
    close_card (state, data) {
      state.card[data] = false
    }
  },
  actions: {
    // 提交mutation，异步操作
  },
});
export default store
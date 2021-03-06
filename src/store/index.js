import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DMsg: '',
    EMsg: ''
  },
  mutations: {
    saveEMsg (state, payload) {
      state.EMsg = payload.EMsg
    },
    saveDMsg (state, payload) {
      state.DMsg = payload.DMsg
    }
  },
  actions: {
  },
  modules: {
  }
})

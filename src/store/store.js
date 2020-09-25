import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import exampleModule from './exampleModule/exampleModule'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters:{

  },
  modules: {
    exampleModule
  }
})

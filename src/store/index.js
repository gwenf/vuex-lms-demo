import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"

import assignments from './assignments'
import users from './users'

export default createStore({
  state: {
    isAuthenticated: true,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    assignments,
    users,
  },
  plugins: [
    createPersistedState()
  ]
})

import axios from 'axios'

export default {
  namespaced: true,
  state: {
    users: [],
    currentUser: {
      name: "Bob Ross",
      role: "Admin",
    },
    userTypes: [],
  },
  mutations: {
    setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    async getUsers ({ commit }) {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      commit('setUsers', res.data)
    }
  },
}

export default {
  namespaced: true,
  state: () => ({
    storeValue: 0
  }),
  mutations: {
    increment: (state) => {
      state.storeValue++
    },
    decrement: (state) => {
      state.storeValue--
    }
  },
  actions: {
    async save() {
      await console.log('here will be function that return promise')
    }
  },
  getters: {
    storeValue: (state) => state.storeValue
  }
}
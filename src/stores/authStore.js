import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    login(payload) {
      this.token = payload.token
      this.user = payload.user
    },

    logout() {
      this.$reset()
    }
  },

  persist: {
    key: 'auth',
    storage: localStorage,
    paths: ['token', 'user']
  }
})

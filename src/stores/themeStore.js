import { defineStore } from 'pinia'


export const useThemeStore = defineStore('theme', {
    state: () => ({
        darkMode: false
    }),
    getters: {
        isDarkMode: (state) => state.darkMode
    },
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        }
    },
    persist: true
})

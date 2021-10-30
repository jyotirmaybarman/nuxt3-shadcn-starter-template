import { acceptHMRUpdate, defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',

  state: () => ({
    theme:'dark'
  }),

  getters: {
    getTheme:(state) => state.theme
  },

  actions: {
    toggleTheme(){
      if(this.theme == "dark"){
        this.theme = 'light';
      }else{
        this.theme = 'dark';
      }
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}

import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',

  state: () => ({
    theme:'dark'
  }),

  getters: {
    getTheme:(state) => state.theme
  },

  actions: {
    initThemeStore(){
      this.theme = document.cookie.search('light') ? 'light':'dark';
      document.body.classList.add(this.theme);
    },
    toggleTheme(){
      if(this.theme == "dark"){
        document.body.classList.remove(this.theme);
        this.theme = 'light';
      }else{
        document.body.classList.remove(this.theme);
        this.theme = 'dark';
      }
      document.cookie = `vueuse-color-scheme=${this.theme}`
      document.body.classList.add(this.theme);
    }
  },
});


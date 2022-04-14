import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',

  state: () => ({
    theme:'dark'
  }),

  getters: {
    getTheme(){
      return this.theme;
    }
  },

  actions: {
    initThemeStore(){
      const mytheme = localStorage.getItem('mytheme');
      this.theme = mytheme ? mytheme :'dark';
      document.body.classList.add(this.theme);
      localStorage.setItem('mytheme',this.theme);
    },
    toggleTheme(){
      if(this.theme == "dark"){
        document.body.classList.remove(this.theme);
        this.theme = 'light';
      }else{
        document.body.classList.remove(this.theme);
        this.theme = 'dark';
      }
      localStorage.setItem('mytheme',this.theme);
      document.body.classList.add(this.theme);
    }
  },
});


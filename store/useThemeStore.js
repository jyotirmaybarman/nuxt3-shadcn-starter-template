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
    toggleTheme(){
      if(this.theme == "dark"){
        document.body.classList.remove(this.theme);
        this.theme = 'light';
      }else{
        document.body.classList.remove(this.theme);
        this.theme = 'dark';
      }
      document.body.classList.add(this.theme);
    }
  },
});

if(process.client){
  document.body.classList.add(useThemeStore().$state.theme);
}

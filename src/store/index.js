import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core';

export const useAppStore = defineStore('app', {
  state: () => {
    return useStorage('app', { menuSideBarCollapse: false })
  },
  actions: {
    setMenuSideBarCollapse(value) {
      this.menuSideBarCollapse = value
    }
  }
})

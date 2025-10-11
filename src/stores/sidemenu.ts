import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import type { SideMenu, SideMenuItem } from '@/interfaces/app_interfaces'


// 


export const useSideMenuStore = defineStore('sideMenu', () => {

  let sideMenu : SideMenu = {}

  function getSideMenu(group: string) {
    if (sideMenu.hasOwnProperty(group) && sideMenu[group].length > 0) {
      return sideMenu[group]
    }
    return []
  }

  function updateSideMenu(group: string, newMenu: SideMenuItem[]) {
    sideMenu[group] = []
    Object.assign(sideMenu[group], newMenu)
  }

  return {
    getSideMenu,
    updateSideMenu,
  }

})

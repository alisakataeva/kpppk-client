import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import appConfig from '../../local_appconfig.json'
import mainMenu from '../data/mainMenu.json'

export const useGlobalStore = defineStore('global', () => {

  let serverBasePath = `${appConfig.server_schema}://${appConfig.server_host}`
  if (appConfig.server_port.length > 0) {
    serverBasePath += `:${appConfig.server_port}`
  }

  const SERVER_BASE_PATH = ref(serverBasePath)

  const MAIN_MENU = ref(mainMenu)

  return {
    SERVER_BASE_PATH,
    MAIN_MENU,
  }

})

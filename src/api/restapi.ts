import Cookies from 'js-cookie'

import appConfig from '../../local_appconfig.json'

const REST_API_PATH = '/api'

let SERVER_BASE_PATH = `${appConfig.server_schema}://${appConfig.server_host}`
if (appConfig.server_port.length > 0) {
  SERVER_BASE_PATH += `:${appConfig.server_port}`
}

class RestAPI {

  constructor() {}

  postAjax = (path: string, request?: Object) => {

    // build url
    let url = `${SERVER_BASE_PATH}${REST_API_PATH}${path}`

    // define headers
    const headers = new Headers({})
    headers.append('Accept', 'application/json')
    let csrfToken = Cookies.get('csrftoken')
    if (csrfToken) {
      headers.append('X-CSRFToken', csrfToken)
    }

    return fetch(url, {
      method: 'POST',
      headers,
      credentials: 'include',
      body: JSON.stringify(request)
    })
  }

  //

  getNews = (page: number) => {
    return this.postAjax("/news/pagination", { page })
  }

  getLandingNews = () => {
    return this.postAjax("/news/landing-list")
  }

  getNewsDetail = (news_id: number) => {
    return this.postAjax("/news/detail", { news_id })
  }

  //

  getPrograms = () => {
    return this.postAjax("/program/list")
  }

  getLandingPrograms = () => {
    return this.postAjax("/program/landing-list")
  }

  getProgramDetail = (program_id: number) => {
    return this.postAjax("/program/detail", { program_id })
  }

  // 

  getSideMenu = (group: string) => {
    return this.postAjax("/page-group/list", { group })
  }

}

const restAPI = new RestAPI()
Object.freeze(restAPI);
export default restAPI
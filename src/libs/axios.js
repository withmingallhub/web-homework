import axios from 'axios'

class Axios {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  getBaseConfig() {
    let config = {
      baseURL: this.baseUrl,
      headers: {
        // 将来可以添加headers
      }
    }
    return config
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        if (url !== 'login' && url !== 'register') {
          let token = localStorage.getItem('token')
          if (token) {
            config.headers['Authorization'] = token
          } else {
            window.location.replace('http://localhost:8080/login')
          }
        }
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        const { data, status } = res
        return { data, status }
      },
      error => {
        let errorInfo = error.response
        if (!errorInfo) {
          const {
            request: { statusText, status },
            config
          } = JSON.parse(JSON.stringify(error))
          errorInfo = {
            statusText,
            status,
            request: { responseURL: config.url }
          }
        }
        return Promise.reject(error)
        
      }
    )
  }
  request(options) {
    let instance = axios.create()
    options = Object.assign(this.getBaseConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default Axios

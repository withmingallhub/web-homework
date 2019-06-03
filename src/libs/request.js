import Axios from '@/libs/axios'
const baseUrl = 'http://192.168.230.65:8080/control'
const api = new Axios(baseUrl)

export default api

import axios from 'axios'
import { IShowResponse } from '../components/line/data_types'

const instance = axios.create({})

instance.interceptors.response.use(
  (res: any) => {
    const data: IShowResponse = res.data
    if (data.code != 0) return Promise.reject({})
    return res
  },
  (err) => {
    return Promise.reject({})
  }
)

export { instance }

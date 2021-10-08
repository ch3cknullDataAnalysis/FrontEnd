import { IShowRequest, IShowResponse } from '../components/line/data_types'
import { instance } from './instance'

// const show_url =
// 'http://10.10.10.109:8080/dataAnalycs/dataAnalycs?key=gdpSum&cityNum=110000'
const show_url = 'http://localhost:4000/posts'

const params: IShowRequest = {
  key: '',
  id: 0,
}

export async function show(): Promise<IShowResponse> {
  const res = await instance.get(show_url, { params })

  const data: IShowResponse = res.data
  return data
}

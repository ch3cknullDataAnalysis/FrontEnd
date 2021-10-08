import { IShowRequest, IShowResponse } from '../components/line/data_types'
import { instance } from './instance'
import { API_SHOW } from './constant'

// const show_url =
// 'http://10.10.10.109:8080/dataAnalycs/dataAnalycs?key=gdpSum&cityNum=110000'

export async function show(params: IShowRequest): Promise<IShowResponse> {
  const res = await instance.get(API_SHOW, { params })

  const data: IShowResponse = res.data
  return data
}
